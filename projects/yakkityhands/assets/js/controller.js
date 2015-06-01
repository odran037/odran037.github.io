angular.module('yakkityHands')
  .controller('main', function ($scope, $http) {
    $scope.firstTen = [
                        {
                          "word": "Mom",
                          "link": "http://www.babysignlanguage.com/signs/mom.gif"
                        },
                        {
                          "word": "Dad",
                          "link": "http://www.babysignlanguage.com/signs/dad.gif"
                        },
                        {
                          "word": "Grandmother",
                          "link": "http://www.babysignlanguage.com/signs/grandmother.gif"
                        },
                        {
                          "word": "Grandfather",
                          "link": "http://www.babysignlanguage.com/signs/grandfather.gif"
                        },
                        {
                          "word": "Dog",
                          "link": "http://www.babysignlanguage.com/signs/dog.gif"
                        },
                        {
                          "word": "Cat",
                          "link": "http://www.babysignlanguage.com/signs/cat.gif"
                        },
                        {
                          "word": "Milk",
                          "link": "http://www.babysignlanguage.com/signs/milk.gif"
                        },
                        {
                          "word": "Eat",
                          "link": "http://www.babysignlanguage.com/signs/eat.gif"
                        },
                        {
                          "word": "More",
                          "link": "http://www.babysignlanguage.com/signs/more.gif"
                        },
                        {
                          "word": "All done",
                          "link": "http://www.babysignlanguage.com/signs/all_done.gif"
                        }
                      ];

    $http.get('./data-img.json')
       .then(function(res){
          $scope.list = res.data;                
    });

    $scope.quantity = 50;

});
