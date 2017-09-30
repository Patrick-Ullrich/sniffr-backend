(function () {

  'use strict';

  angular
    .module('app')
    .directive('navbar', navbar);

  function navbar() {
    return {
      templateUrl: 'app/navbar/navbar.html',
      controller: navbarController,
      controllerAs: 'vm'
    }
  }

  navbarController.$inject = ['$scope', 'authService'];

  function navbarController($scope, authService) {
    var vm = this;
    vm.auth = authService;
    vm.profile;
    if (authService.getCachedProfile()) {
      vm.profile = authService.getCachedProfile();
    } else {
      try {
        authService.getProfile(function (err, profile) {
          vm.profile = profile;
          $scope.$apply();
        });
      } catch (err) {

      }
    }
  }

})();