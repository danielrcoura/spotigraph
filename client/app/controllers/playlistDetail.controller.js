angular.module('spotigraph').controller('playlistDetailCtrl', 
['$scope', '$stateParams', 'Spotify', 'playlistsAPI', 'musicsAPI',
function ($scope, $stateParams, Spotify, playlistsAPI, musicsAPI) {
    $scope.status;
    $scope.id = $stateParams.id;
    $scope.playlist = {name: ''};
    $scope.musics = [];
    
    $scope.searchMusic;
    $scope.findedMusics = []

    getPlaylist();
    getMusicsIDs();
    console.log('to music ente: ', toMusic("11dFghVXANMlKmJXsNCbNl"));

    function getPlaylist() {
        playlistsAPI.getPlaylist($scope.id)
            .then(function (playlist) {
                $scope.playlist.name = playlist.data.name;
                console.log('getPlaylist: ',playlist.data);
            })
            .catch(function (error) {
                $scope.status = 'getPlaylist() error: ' + error.message;
                console.log($scope.status);
            });
    };

    function getMusicsIDs(){
        musicsAPI.getMusics($scope.id)
            .then(function (musicsIDs) {
                console.log('getMusicsIDs: ', musicsIDs.data)
                musicsIDs.data.forEach(element => {
                    console.log(toMusic(element.name));
                });

               /*  musicsIDs.data.forEach(function (id) {
                    $scope.musics.push(toMusic(id));
                }); */
            })
            .catch(function (error) {
                $scope.status = 'getMusicsIDs() error: ' + error.message;
                console.log($scope.status);
            });
    }
  
    $scope.login = function () {
        Spotify.login()
            .then(function (data) {
                console.log(data);
            })
            .catch(function () {
                console.log('didn\'t log in');
            })
    };

    function toMusic(SpotifyID) {
        var data;
        Spotify.getTrack(SpotifyID).then(function (track) { 
            console.log(track);
            data = track; 
        }).catch(function (error) {
            console.log('toMusic() error: ' + error.message);
        });
        return data;
    }

    $scope.searchMusics = function () {
        Spotify.search($scope.searchMusic, 'track').then(function (data) {
            console.log(data.data.tracks.items);
            $scope.findedMusics = data.data.tracks.items.slice(0, 12);
        });
    };
}]);
