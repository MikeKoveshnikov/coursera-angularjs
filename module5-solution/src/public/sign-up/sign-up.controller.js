(function () {
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['signUpData', 'SignUpDataService', 'validMenuItemsShortNames'];
  function SignUpController(signUpData, SignUpDataService,validMenuItemsShortNames) {
    var signUpCtrl = this;

    signUpCtrl.signUpSuccessful = false;
    signUpCtrl.signUpData = signUpData;
    signUpCtrl.validMenuItemsShortNames = validMenuItemsShortNames;

    signUpCtrl.submitData = function () {
      SignUpDataService.saveSignUpData(signUpData);
      signUpCtrl.signUpSuccessful = true;
    };

  };
})();
