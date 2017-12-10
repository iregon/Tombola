angular.module('starter')
.controller('LoginCtrl', function($scope, $rootScope, serverManager) {
  serverManager.connectToServer();

  $scope.doLogin = function() {
    var data = {
      nome: $scope.nickname,
      anunymous: "false",
    }
    $rootScope.userData = data;
  }

  $scope.doLoginAnonymous = function() {
    var data = {
      nome: "",
      anunymous: "true",
    }
    $rootScope.userData = data;
  }

});
