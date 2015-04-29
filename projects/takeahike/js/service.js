var app = angular.module('app');

app.service('mainService', function($http, $q) {

  this.getData = function(/*city, state, activity radius*/) {
    var dfd = $q.defer();
    $http({
      url: 'https://trailapi-trailapi.p.mashape.com/',
      method: 'GET',
      headers: {"X-Mashape-Authorization": "y2PmEy9P0Smsh95xWAGgYwBwf4fPp1Xw9XcjsnCaJ7daxdWG7O"}
    }).then(function(response){
      dfd.resolve(response.data.places);
      // console.log("Service: ", response.data.places);
    }, function(error){
      dfd.reject(error);
    });
    return dfd.promise;

  }

});