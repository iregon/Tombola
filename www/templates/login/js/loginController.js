angular.module('starter')
.controller('LoginCtrl', function($scope, $rootScope, serverManager, $location, $ionicPopup) {
  serverManager.connectToServer();

  $scope.doLogin = function() {
    if($scope.login.nickname !== undefined) {
      var data = {
        nome: $scope.login.nickname,
        anunymous: "false",
      }
      $rootScope.loginData = data;
      switchToSelectpage();
    }
    else {
      var alertPopup = $ionicPopup.alert({
        title: 'ERRORE',
        template: 'Devi inserire un nickname'
      });

      // alertPopup.then(function(res) {
      //   console.log('Thank you for not eating my delicious ice cream cone');
      // });
    }
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
    $location.path("/app/selectMode");
  }
});
