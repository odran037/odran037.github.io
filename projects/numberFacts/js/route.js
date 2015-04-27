var app = angular.module('numFacts', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl : 'pages/math.html',
      controller  : 'mathController'
    })
    .when('/trivia', {
      templateUrl : 'pages/trivia.html',
      controller  : 'triviaController'
    })
    .when('/date', {
      templateUrl : 'pages/date.html',
      controller  : 'dateController'
    })
    .when('/about', {
      templateUrl : 'pages/about.html'
    })
    .otherwise({
      redirectTo  : '/'
    })

    $locationProvider.html5Mode(true);
});

// app.controller('mathController', function($scope, mathService){

//   $scope.getMathFacts = function() {

//     mathService.getData($scope.facts).then(function(response) {

//       $scope.factData = response;

//     });

//   }

// });

// app.controller('triviaController', function($scope, triviaService){

//   $scope.getMathFacts = function() {

//     triviaService.getData($scope.facts).then(function(response) {

//       $scope.factData = response;

//     });

//   }

// });

// app.controller('dateController', function($scope, dateService){

//   $scope.getMathFacts = function() {

//     dateService.getData($scope.facts).then(function(response) {

//       $scope.factData = response;

//     });

//   }

// });