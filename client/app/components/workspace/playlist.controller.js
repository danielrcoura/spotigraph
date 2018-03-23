angular.module("spotigraph").controller("playlistCtrl", function ($scope, playlistsAPI, musicsAPI) {
    $scope.musics = [{name: ''}, {name: ''}];
    $scope.playlistField = {name: ''};
    $scope.playlists;
    $scope.status;
    getPlaylists();

    function getPlaylists() {
        playlistsAPI.getPlaylists()
            .then(function (playlists) {
                $scope.playlists = playlists;
            })
            .catch(function (error) {
                console.log($scope.status);
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    $scope.add = function() {
        if (verifyFieldsFull(1)) {
            $scope.musics.push({name: ''});
        }
    };

    $scope.verifyMusicEmpty = function(music) {
        return !$scope.musics[music].name && music < $scope.musics.length - 3;
    };

    function verifyFieldsFull(limite) {
        for(var i = 0; i < $scope.musics.length - limite; i++) {
            if (!$scope.musics[i].name ){
                return false;
            }
        }
        return true;
    }

    $scope.reset = function() {
        $scope.musics = [{name: ''}, {name: ''}];
        $scope.playlistField = {name: ''};
    };

    $scope.btnEnable = function () {
        return verifyFieldsFull(2) && $scope.musics.length > 2 && $scope.playlistField.name;
    };

    $scope.remove = function(index) {
        if ($scope.musics.length > 1) {
            $scope.musics.splice(index, 1);
        }
        add();
    };

    $scope.createPlaylist = function() {
        playlistsAPI.savePlaylist($scope.playlistField)
            .then(
                function (playlist) {
                    console.log('playlist: ' + playlist.id);
                    $scope.reset();
                    getPlaylists();
                },
                function (error) {
                    console.log($scope.status);
                    $scope.status = 'Unable to create playlist data: ' + error.message;
                }
            );
    }

    $scope.deletePlaylist = function(playlist) {
        playlistsAPI.deletePlaylist(playlist)
            .then(
                function () {
                    console.log('playlists deletadas!');
                    getPlaylists();
                },
                function (error) {
                    console.log($scope.status);
                    $scope.status = 'Unable to delete playlist data: ' + error.message;
                }
            );

    }
});