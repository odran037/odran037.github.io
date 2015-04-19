var app = angular.module('numFacts');

app.service('mainService', function($http, $q){

  this.getData = function(number) {

    var dfd = $q.defer();

    $http.get('http://numbersapi.com/' + number).then(function(response) {

      var resp = response.data;

      dfd.resolve(resp);

    })

    return dfd.promise;

  }

});