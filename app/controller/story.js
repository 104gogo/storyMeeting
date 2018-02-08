'use strict';

const Controller = require('egg').Controller;

class StoryController extends Controller {
  async index() {
    const ctx = this.ctx;
    const mp3Url = await ctx.service.story.baiduAiMp3(ctx.query.text);

    this.ctx.body = { url: mp3Url };
  }
}

module.exports = StoryController;
