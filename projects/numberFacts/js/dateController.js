var app = angular.module('numFacts');

app.controller('dateController', function($scope, mainService){

  $scope.getMathFacts = function() {

    mainService.getDateData($scope.facts).then(function(response) {

      $scope.factData = response;

    });

  }

});