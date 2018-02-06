'use strict';

const Controller = require('egg').Controller;

// 调用追书神器API
class ZssqController extends Controller {
  async getBook() {
    const ctx = this.ctx;
    const result = await ctx.curl(`http://api.zhuishushenqi.com/book/${ctx.params.id}`);

    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }
}

module.exports = ZssqController;
