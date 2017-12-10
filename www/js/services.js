angular.module('starter')
.service("serverManager", function() {
  var socket;
  return {
    connectToServer: function() {
      try {
        // Open a WebSocket connection
        socket = new WebSocket('ws://127.0.0.1:8080/Tombola_Server_NetBeans/actions');
        console.log("connessione");
        return "OK";
      }
      catch(err) {
        return err;
      }
    },
    sendData: function(data) {
      this.send = function (message) {
        this.waitForConnection(function () {
          socket.send(message);
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

      this.send(JSON.stringify(data));
    }
  }
});
