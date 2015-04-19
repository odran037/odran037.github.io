var app = angular.module('numFacts');

app.controller('mainController', function($scope, mainService){

  $scope.getMathFacts = function() {

    mainService.getData($scope.facts).then(function(response) {

      $scope.factData = response;

    });

  }

});