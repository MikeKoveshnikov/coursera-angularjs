(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.boughtItems();

  };

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.toBuyItems();

    toBuy.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  };

  function ShoppingListCheckOffService() {
    var toBuy = [{name: "Cookies", quantity: 100},
     {name: "Chocolate bar", quantity:4},
     {name: "AngularJs book", quantity: 42},
     {name: "Notebook", quantity: 1},
     {name: "Aspirin", quantity: 2}];
    var alreadyBought = [];

    this.buyItem = function (index) {
      var item = toBuy[index];
      toBuy.splice(index,1);
      alreadyBought.push(item);
    };

    this.toBuyItems = function () {
      return toBuy;
    };

    this.boughtItems = function () {
      return alreadyBought;
    };
  }
})();
