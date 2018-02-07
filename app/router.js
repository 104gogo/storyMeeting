'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/story', controller.story.index);

  router.get('/book/:id', controller.zssq.getBook);
  router.get('/bookSources', controller.zssq.getBookSources);
  router.get('/chapters/:id', controller.zssq.getChapters);
  router.get('/chapter/:link', controller.zssq.getChapter);
};
