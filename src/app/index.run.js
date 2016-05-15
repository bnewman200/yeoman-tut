(function() {
  'use strict';

  angular
    .module('yeomanTut')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
