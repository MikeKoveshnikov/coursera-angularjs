(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http', 'baseUrl'];
  function MenuDataService($http, baseUrl) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: (baseUrl + '/categories.json')
      }).then(function (response) {
        return response.data;
      });
    };

    service.getItemsForCategory = function(categoryId) {
      return $http({
        method: 'GET',
        url: (baseUrl + '/menu_items.json'),
        params: {category : categoryId}
      }).then(function(response) {
        return response.data.menu_items;
      })
    };

  };
})();
