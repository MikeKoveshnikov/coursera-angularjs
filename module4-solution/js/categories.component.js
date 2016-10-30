(function() {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'categoriesList.html',
    controller: CategoriesListController,
    bindings: {
      categories: '<'
    }
  });

  function CategoriesListController() {
    var categoriesListController = this;
  };
})();
