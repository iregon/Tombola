angular.module('starter')
.controller('LoginCtrl', function(
  $scope,
  $rootScope,
  serverManager,
  $location,
  $ionicPopup,
  $window) {

  if(!serverManager.connectToServer() === "OK") {
    var alertPopup = $ionicPopup.alert({
      title: '<img src="img/no_internet.png">',
      template: 'Impossibile collegarsi al server'
    });

    alertPopup.then(function(res) {
      $window.close()
    });
  }

  $scope.doLogin = function() {
    if($scope.login.nickname !== undefined) {
      var data = {
        name: $scope.login.nickname
      }
      $rootScope.loginData = data;
      switchToSelectpage();
    }
    else {
      var alertPopup = $ionicPopup.alert({
        title: '<img src="img/warning.png">',
        template: 'Devi inserire un nickname'
      });

      // alertPopup.then(function(res) {
      //   console.log('Thank you for not eating my delicious ice cream cone');
      // });
    }
  }

  $scope.doLoginAnonymous = function() {
    var data = {
      name: ""
    }
    $rootScope.loginData = data;
    switchToSelectpage();
  }

  var switchToSelectpage = function() {
    $location.path("/app/selectMode");
  }
});
