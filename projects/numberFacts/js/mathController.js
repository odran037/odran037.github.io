var app = angular.module('numFacts');

app.controller('mathController', function($scope, mainService){

  $scope.getMathFacts = function() {

    mainService.getMathData($scope.facts).then(function(response) {

      $scope.factData = response;

    });

  }

});