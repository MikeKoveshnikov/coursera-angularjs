(function () {
  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['myInfoData','favoriteDish'];
  function MyInfoController(myInfoData, favoriteDish) {
    var myInfoCtrl = this;

    myInfoCtrl.myInfoData = myInfoData;
    myInfoCtrl.favoriteDish = favoriteDish;
  };
})();
