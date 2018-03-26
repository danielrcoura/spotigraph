angular.module('spotigraph').controller('spotifyCtrl', ['$scope', 'Spotify', function ($scope, Spotify) {
    $scope.tracks;
  
    $scope.login = function () {
        Spotify.login()
            .then(function (data) {
                console.log(data);
                alert("You are now logged in");
            })
            .catch(function () {
                console.log('didn\'t log in');
            })
    };

    $scope.searchArtist = function () {
        Spotify.search($scope.searchartist, 'track').then(function (data) {
            console.log(data.data.tracks.items);
            $scope.tracks = data.data.tracks.items;
        });
    };

}]);
