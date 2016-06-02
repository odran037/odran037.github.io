(function() {
  angular
    .module('homepage', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', { templateUrl: 'views/home.html' })
        .when('/about', { templateUrl: 'views/about.html' })
        .when('/work', { templateUrl: 'views/work.html' })
        .when('/location', { templateUrl: 'views/location.html' })
        .when('/hobbies', { templateUrl: 'views/hobbies.html' })
        .when('/contact', { templateUrl: 'views/contact.html' })
        .otherwise({ redirectTo : '/' });
    });
})();
