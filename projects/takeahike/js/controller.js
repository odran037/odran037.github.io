var app = angular.module('app');

app.controller('controller', function($scope, mainService) {



  $scope.locationData;

  $scope.runQuery = function(/*city, state, activity, radius*/) {

    // console.log('Controller Activity', activity);

    $scope.showData = false;

    mainService.getData().then(function(returnFromService) {

      $scope.showData = true;
      //all data
      $scope.locationData = returnFromService;
      $scope.allData = returnFromService;

      $scope.hikingData = [];     // id 2
      $scope.mtbData = [];        // id 5
      $scope.campgroundData = []; // id 6
      $scope.cavingData = [];     // id 7
      $scope.snowData = [];       // id 9

      $scope.allData.map(function(i) {
          i.activities.map(function(j) {
            if(j.activity_type_id === 2) {
              $scope.hikingData.push(i);
            } else if (j.activity_type_id === 5) {
              $scope.mtbData.push(i);
            } else if (j.activity_type_id === 6) {
              $scope.campgroundData.push(i);
            } else if (j.activity_type_id === 7) {
              $scope.cavingData.push(i);
            } else if (j.activity_type_id === 9) {
              $scope.snowData.push(i);
            } 
          });
      })


      // console.log('Controller: ', $scope.locationData);

    },

    function(error) {
      console.log(error);

    });

  }();

});

app.filter('hikingFilter', function() {
  return function(data) {
    var hiking = [];
    data.map(function(i){
      if(i.activity_type_name === 'hiking') {
        hiking.push(i);
      } 
    });
    return hiking;
  }

});

app.filter('mtbFilter', function() {
  return function(data) {
    var mtb = [];
    data.map(function(i){
      if(i.activity_type_name === 'mountain biking') {
        mtb.push(i);
      } 
    });
    return mtb;
  }

});

app.filter('campgroundFilter', function() {
  return function(data) {
    var campgrounds = [];
    data.map(function(i){
      if(i.activity_type_name === 'campgrounds') {
        campgrounds.push(i);
      } 
    });
    return campgrounds;
  }

});


app.filter('cavingFilter', function() {
  return function(data) {
    var caving = [];
    data.map(function(i){
      if(i.activity_type_name === 'caving') {
        caving.push(i);
      } 
    });
    return caving;
  }

});

app.filter('snowFilter', function() {
  return function(data) {
    var snow = [];
    data.map(function(i){
      if(i.activity_type_name === 'snow sports') {
        snow.push(i);
      } 
    });
    return snow;
  }

});
// // app.filter('sidebarFilter', function () {
// //   return function (items) {
// //    var filtered = [];
// //    var pillar = [];
// //    for (var i = 0; i < items.length; i++) {
// //      var item = items[i];
// //      if (/p/i.test(item.hierarchy.substring(0, 1))) {
// //        filtered.push(item);
// //        pillar.push(item);
// //      }
// //      else if(/e/i.test(item.hierarchy.substring(0, 1))) {
// //        filtered.push(item);
// //      }
// //    }
// //    return filtered;
// //  };
// // });