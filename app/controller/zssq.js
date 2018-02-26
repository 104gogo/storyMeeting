'use strict';

const Controller = require('egg').Controller;

// 调用追书神器API
class ZssqController extends Controller {
  // 获取小说详情
  async getBook() {
    const ctx = this.ctx;
    const { zssqApiHost } = ctx.app.config;

    const result = await ctx.curl(`${zssqApiHost}/book/${ctx.params.id}`);

    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }

  // 获取小说源列表
  async getBookSources() {
    const ctx = this.ctx;
    const { zssqApiHost } = ctx.app.config;

    const result = await ctx.curl(`${zssqApiHost}/toc`, {
      data: {
        view: ctx.query.view || 'summary',
        book: ctx.query.book,
      },
    });

    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }

  // 获取小说章节列表
  async getChapters() {
    const ctx = this.ctx;
    const { zssqApiHost } = ctx.app.config;

    const result = await ctx.curl(`${zssqApiHost}/toc/${ctx.params.id}`, {
      data: {
        view: ctx.query.view || 'chapters',
      },
    });

    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }

  // 获取小说章节内容
  async getChapter() {
    const ctx = this.ctx;
    const { zssqChapterHost } = ctx.app.config;

    const url = `${zssqChapterHost}/chapter/${encodeURIComponent(ctx.params.link)}`;

    const result = await ctx.curl(url, {
      data: {
        k: ctx.query.k || '2124b73d7e2e1945',
        t: ctx.query.t || '1468223717',
      },
    });

    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }
}

module.exports = ZssqController;
