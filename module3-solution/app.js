(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;

        controller.query = "";
        controller.found = [];

        controller.searchMenu = function() {
            if (controller.query.length === 0) {
                controller.found = [];
                return;
            }

            MenuSearchService.getMatchedMenuItems(controller.query)
                .then(function(foundItems) {
                    controller.found = foundItems;
                }).catch(function(error) {
                    console.log("Error has happened");
                    console.log(error);
                });
        };

        controller.removeItem = function(index) {
            controller.found.splice(index, 1);
        };

    };

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        service.foundItems = [];

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function(result) {
                var items = result.data.menu_items;

                service.foundItems = [];
                for (var index = 0; index < items.length; index++) {
                    var item = items[index];
                    var itemDescription = item.description.toLowerCase();

                    if (itemDescription.indexOf(searchTerm.toLowerCase()) !== -1) {
                        service.foundItems.push(item);
                    }
                }

                return service.foundItems;
            });
        };
    };

    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                items: "<",
                onRemove: "&"
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'controller',
            bindToController: true
        };

        return ddo;
    };

    function FoundItemsDirectiveController() {
        var controller = this;

        controller.hasElements = function() {
            return controller.items.length > 0;
        };
    };
})();
