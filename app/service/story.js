'use strict';

const fs = require('fs');
const Service = require('egg').Service;
const AipSpeechClient = require('baidu-aip-sdk').speech;

// 设置APPID/AK/SK
const APP_ID = '10719159';
const API_KEY = '5KxHVrbyPBVQzDyv6NyTe38K';
const SECRET_KEY = 'kRe5ZxAfHiPZ37hFHniHr1wbm31Bif40';

// 新建一个对象，建议只保存一个对象调用服务接口
const client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);

class StoryService extends Service {
  async baiduAiMp3() {
    // read config

    try {
      const result = await client.text2audio('新建一个对象，建议只保存一个对象调用服务接口');

      if (result.data) {
        fs.writeFileSync('app/public/baiduAiMp3/test.mp3', result.data);
        return 'http://localhost:7002/public/baiduAiMp3/test.mp3';
      }

      // 服务发生错误
      console.log(result);
    } catch (e) {
      // 发生网络错误
      console.log(e);
    }
  }
}

module.exports = StoryService;
