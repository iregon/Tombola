angular.module('starter')
.controller('CartellaCtrl', function($scope, $stateParams, serverManager) {
  serverManager.connectToServer();
  var cartella = {
    numero: 1,
    nome: "Allievo",
    righe: {
      0: {
        0: "",
        1: "16",
        2: "21",
        3: "31",
        4: "42",
        5: "",
        6: "6",
        7: "",
        8: "",
      },
      1: {
        0: "1",
        1: "18",
        2: "",
        3: "33",
        4: "",
        5: "53",
        6: "62",
        7: "",
        8: "",
      },
      2: {
        0: "2",
        1: "",
        2: "",
        3: "38",
        4: "",
        5: "55",
        6: "69",
        7: "74",
        8: "",
      }
    }
  };

  var cartella2 = {
    numero: 2,
    nome: "Abbondanza",
    righe: {
      0: {
        0: "",
        1: "16",
        2: "21",
        3: "31",
        4: "42",
        5: "",
        6: "6",
        7: "",
        8: "",
      },
      1: {
        0: "1",
        1: "18",
        2: "",
        3: "33",
        4: "",
        5: "53",
        6: "62",
        7: "",
        8: "",
      },
      2: {
        0: "2",
        1: "",
        2: "",
        3: "38",
        4: "",
        5: "55",
        6: "69",
        7: "74",
        8: "",
      }
    }
  };

  var cartelle = [cartella, cartella2];

  $scope.getCartella = function() {
    var numCartella = $stateParams.num;
    return cartelle[numCartella];
  }

  $scope.getAllCartelle = function() {
    return cartelle;
  }
});
