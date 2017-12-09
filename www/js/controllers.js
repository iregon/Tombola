angular.module('starter.controllers', [
  'ngWebSocket'
])

.factory('websocketData', function($websocket) {
  // Open a WebSocket connection
  var dataStream = $websocket('ws://127.0.0.1:80');

  var collection = [];

  dataStream.onMessage(function(message) {
    collection.push(JSON.parse(message.data));
  });

  var methods = {
    collection: collection,
    get: function() {
      dataStream.send(JSON.stringify({ action: 'get' }));
    }
  };

  // function send(text) {
  //   var returns;
  //   dataStream.send(text, returns);
  //   console.log(returns);
  // }



  return methods;
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $websocket) {
  // $scope.playlists = [
  //   { title: 'Reggae', id: 1 },
  //   { title: 'Chill', id: 2 },
  //   { title: 'Dubstep', id: 3 },
  //   { title: 'Indie', id: 4 },
  //   { title: 'Rap', id: 5 },
  //   { title: 'Cowbell', id: 6 }
  // ];
  // console.log($scope.websocketData = websocketData);

  // websocketData.send("aaaa");

  var socket = new WebSocket('ws://127.0.0.1:8080/Tombola_Server_NetBeans/actions');
  socket.onmessage = function (event) {
    console.log(JSON.parse(event.data));
  };
  var DeviceAction = {
    action: "add"
  };

  this.send = function (message, callback) {
    this.waitForConnection(function () {
        socket.send(message);
        if (typeof callback !== 'undefined') {
          callback();
        }
    }, 1000);
};

this.waitForConnection = function (callback, interval) {
    if (socket.readyState === 1) {
        callback();
    } else {
        var that = this;
        // optional: implement backoff for interval here
        setTimeout(function () {
            that.waitForConnection(callback, interval);
        }, interval);
    }
};
  this.send(JSON.stringify(DeviceAction), function() {console.log(JSON.stringify(DeviceAction));});
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
