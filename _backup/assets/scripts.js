// (function() {
//
//   angular
//     .module('odran037.io', ['ngRoute']).config(routes);
//
//     function routes($routeProvider) {
//       $routeProvider.when('/', {
//           templateUrl: 'assets/home.html'
//       }).when('/about', {
//         templateUrl: 'assets/about.html'
//       }).when('/portfolio', {
//         templateUrl: 'assets/portfolio.html'
//       }).when('/contact', {
//         templateUrl: 'assets/contact.html'
//       }).otherwise({
//         redirectTo : '/'
//       });
//     }
//
// })();

(function() {

  $(document).ready(function() {
    $('body').fadeIn(3000, function() {
      $('#home').show();
    });

    $('a').on('click', function() {
      switch ($(this).attr('href')) {
        case '#home':
          $('#about').hide(function() {
            $('#portfolio').hide(function() {
              $('#home').fadeIn(500);
            });
          });
          break;
        case '#about':
          $('#home').hide(function() {
            $('#portfolio').hide(function() {
              $('#about').fadeIn(500);
            });
          });
          break;
        case '#portfolio':
          $('#home').hide(function() {
            $('#about').hide(function() {
              $('#portfolio').fadeIn(500);
            });
          });
          break;
        default:
          $('#home').fadeIn(500);
          $('#about').fadeOut();
          $('#portfolio').fadeOut();
      }
    })

  });

  console.log(["         ##################################          ",               "          #                                #          ",               "          # 037                         5  #          ",               "          #                             4  #          ",               "          #     ###                     2  #          ",               "          #     ###                     5  #          ",               "          #     ###                     4  #          ",               "          #     ###       ###########   3  #          ",               "          #     ###       ###       ##     #          ",               "          #     ###       ###       ##     #          ",               "          #     #####################      #          ",               "          #               ###              #          ",               "          #               ###              #          ",               "          #               ###              #          ",               "          #                                #          ",               "          #        53662736-772837         #          ",               "          #                                #          ",               "          ##################################          ",               "======================================================",               "  GitHub          https://github.com/odran037         ",               " CodePen          http://codepen.io/odran037          ",               "LinkedIn          https://www.linkedin.com/in/odran037",               "======================================================"].join('\n'));

}).call(this);
