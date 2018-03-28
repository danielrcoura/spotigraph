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
    getMusics();

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

    function getMusics() {
        musicsAPI.getMusics($scope.id)
            .then(function (musics) {
                $scope.musics = musics.data;
                console.log('getMusics: ', musics.data);
            })
            .catch(function (error) {
                $scope.status = 'getMusics() error: ' + error.message;
                console.log($scope.status);
            });
    };

    $scope.addMusic = function (music) {
        musicsAPI.saveMusic($scope.id, {name: music})
        .then(function (data){
            console.log('music added: ' + data);
            getMusics();
        })
        .catch(function (error) {
            $scope.status = 'addMusic()' + error.message;
            console.log($scope.status);
        });
    }

    $scope.removeMusic = function (musicID) {
        musicsAPI.removeMusic($scope.id, musicID)
        .then(function (){
            console.log('music deleted');
            getMusics();
        })
        .catch(function (error) {
            $scope.status = 'removerMusic()' + error.message;
            console.log($scope.status);
        });
    }

    $scope.login = function () {
        Spotify.login()
            .then(function (data) {
                console.log(data);
                $scope.searchMusics();
            })
            .catch(function () {
                console.log('didn\'t log in');
            });
    };

    $scope.searchMusics = function () {
        Spotify.search($scope.searchMusic, 'track')
        .then(function (data) {
            console.log(data.data.tracks.items);
            $scope.findedMusics = data.data.tracks.items.slice(0, 12);
        })
        .catch(function (error) {
            console.log('searchMusic() error: ' + error.data)
        });
    };
}]);
