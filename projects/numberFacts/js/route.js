angular.module('numFacts', ['ngRoute'])

.config(function($routeProvider/*, $locationProvider*/) {

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

    //$locationProvider.html5Mode(true);
});
