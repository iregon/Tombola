angular.module('starter')
.controller('SelectModeCtrl', function(
  $scope,
  $rootScope,
  serverManager,
  $location,
  $ionicPopup) {

  $scope.input = {};

  var goToLogin = function() {
    $location.path("/app/login");
  }

  if($rootScope.loginData === undefined) goToLogin();

  $scope.sendUserDataToServer = function() {

    if($scope.input.mode === undefined) {
      var alertPopup = $ionicPopup.alert({
        title: '<img src="img/warning.png">',
        template: 'Devi scegliere una modalit&agrave; di gioco'
      });
    }
    else {
      var data = $rootScope.loginData;
      data.action = "add";
      data.type = $scope.input.mode;
      if($scope.input.mode === "n") data.cartelle = $scope.input.numCartelle;
      else data.cartelle = "-1";

      console.log(data);

      serverManager.sendData(data);
    }
  }

  $scope.isGiocatoreNormaleSelected = function() {
    if($scope.input.mode !== undefined && $scope.input.mode === "n") return true;
    else return false;
  }
});
