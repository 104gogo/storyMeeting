'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/story', controller.story.index);
  router.get('/book/:id', controller.zssq.getBook);
};
