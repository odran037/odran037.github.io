angular.module('numFacts')

.controller('triviaController', function($scope, mainService){

  $scope.getMathFacts = function() {

    mainService.getTriviaData($scope.facts).then(function(response) {

      $scope.factData = response;

    });

  }

});
