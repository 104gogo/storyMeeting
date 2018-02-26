'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517559534418_1423';

  // add your config here
  config.middleware = [];

  config.host = 'http://120.79.72.243:7001'; // mp3测试地址
  // config.host = 'http://172.16.77.253:7002'; // mp3开发地址

  config.zssqApiHost = 'http://api.zhuishushenqi.com';
  config.zssqChapterHost = 'http://chapter2.zhuishushenqi.com';

  return config;
};
