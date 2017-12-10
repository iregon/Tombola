angular.module('starter')
.controller('LoginCtrl', function($scope, serverManager) {
  serverManager.connectToServer();
});
