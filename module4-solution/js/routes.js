(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home',{
        url: '/',
        templateUrl: 'home.html'
    })

    .state('categories', {
        url: '/categories',
        templateUrl: 'categories.html',
        controller: 'CategoriesController as categoriesController',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
    })

    .state('items', {
        url: '/items/{id}',
        templateUrl: 'items.html',
        controller: 'ItemsController as itemsController',
        params: {id : null},
        resolve: {
          items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.id);
          }]
        }
    });
  };
})();
