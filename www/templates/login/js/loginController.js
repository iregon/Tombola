angular.module('starter')
.controller('LoginCtrl', function($scope, $rootScope, serverManager, $location) {
  serverManager.connectToServer();

  $scope.doLogin = function() {
    var data = {
      nome: $scope.nickname,
      anunymous: "false",
    }
    $rootScope.loginData = data;
    switchToSelectpage();
  }

  $scope.doLoginAnonymous = function() {
    var data = {
      nome: "",
      anunymous: "true",
    }
    $rootScope.loginData = data;
    switchToSelectpage();
  }

  var switchToSelectpage = function() {
    $location.path("selectMode");
  }
});
