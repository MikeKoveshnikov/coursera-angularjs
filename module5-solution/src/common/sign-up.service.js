(function () {
  'use strict';

  angular.module('common')
  .service('SignUpDataService', SignUpDataService);

  SignUpDataService.$inject = ['$q'];
  function SignUpDataService($q) {
    var service = this;
    this.signUpData = {};

    service.getCurrentSignUpData = function () {
      return this.signUpData;
    };

    service.saveSignUpData = function (signUpData) {
      this.signUpData = signUpData;
    };
  }
})();
