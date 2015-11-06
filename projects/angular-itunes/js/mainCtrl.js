(function() {

  angular.module('itunes')
         .controller('mainCtrl', mainCtrl);

  function mainCtrl($scope, itunesService) {

    $scope.gridOptions = {
      data: 'songData',
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Track', displayName: 'Track'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'SinglePrice', displayName: 'Single Price'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
      ],
    };

    $scope.getSongData = function() {
      itunesService.getData($scope.artist).then(function(response) {
        // console.log('RESPONSE:', response);
        $scope.songData = response;
      });
    };

  }

})();
