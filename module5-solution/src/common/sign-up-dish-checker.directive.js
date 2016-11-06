(function () {
  angular.module('common')
  .directive('dishCheck', function () {
    return {
        restrict: 'A',
        require:'ngModel',
        scope: {
          validShortNames: "<"
        },
        link: function (scope, elem, attr, ctrl) {
          ctrl.$validators.dishCheck = function (modelValue, viewValue) {
              if (ctrl.$isEmpty(modelValue)){
                return true;
              }
              if (scope.validShortNames.indexOf(viewValue) !== -1){
                return true;
              }
              return false;
          };
        }
    };
  });
})();
