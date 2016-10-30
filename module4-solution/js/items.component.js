(function() {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'itemsList.html',
    controller: ItemsListController,
    bindings : {
      items : '<'
    }
  });

  function ItemsListController() {
    var itemsListController = this;
  }
})();
