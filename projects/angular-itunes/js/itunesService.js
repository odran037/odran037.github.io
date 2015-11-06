(function() {

  angular.module('itunes')
         .service('itunesService', itunesService);

  function itunesService($http, $q) {
    this.getData = function(artist) {
      var dfd = $q.defer();
      $http.jsonp('https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK')
      .then(function(response) {
        var resp = response.data.results;
        var len = resp.length;
        var result = [];
        var i = 0;
        for (i; i < len; i++) {
          // console.log('resp:', resp[i]);
          result[i] = {
            AlbumArt: resp[i].artworkUrl100,
            Track: resp[i].trackName,
            Artist: resp[i].artistName,
            Collection: resp[i].collectionName,
            SinglePrice: resp[i].trackPrice,
            CollectionPrice: resp[i].collectionPrice,
            Play: resp[i].previewUrl,
            Type: resp[i].kind,
          };
        }

        dfd.resolve(result);
      });

      return dfd.promise;
    };
  }

})();
