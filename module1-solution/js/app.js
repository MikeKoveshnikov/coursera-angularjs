(function() {
  'use strict';

    angular.module("LunchChecker", [])

    .controller("LunchCheckerController", LunchCheckerController);

    LunchCheckerController.$inject = ["$scope"];
    function LunchCheckerController($scope) {

        $scope.lunchDishes = "";
        $scope.message = "";

        $scope.checkIfTooMuch = function () {
          if ($scope.lunchDishes){
            var dishes = $scope.lunchDishes.split(",");
            if (dishes.length <= 3 && dishes.length > 0){
              $scope.message = "Enjoy!";
            } else if (dishes.length > 3){
              $scope.message = "Too much!";
            }
          } else {
            $scope.message = "Please enter data first";
          }
        };
    }
})();
