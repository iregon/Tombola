angular.module('starter')
.service("serverManager", function() {
  return {
    connectToServer: function() {
      // Open a WebSocket connection
      var socket = new WebSocket('ws://127.0.0.1:8080/Tombola_Server_NetBeans/actions');
      console.log("connessione");
    }
  }
});
