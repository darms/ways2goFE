'use strict';

require('./_review-item.scss');

module.exports = {
  template: require('./review-item.html'),
  controller: ['$log', 'reviewService', ReviewItemController],
  controllerAs: 'reviewItemCtrl',
  bindings: {
    userid: '<',
    revieweduserid: '<',
    way: '<'
  }
};

function ReviewItemController($log) {
  $log.debug('ReviewItemController');
}