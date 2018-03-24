angular.module("spotigraph").controller("playlistCtrl", function ($scope, playlistsAPI) {
    $scope.musicsField = [{name: ''}];
    $scope.playlistField = {name: ''};
    $scope.playlistsData;
    $scope.status;

    getPlaylists();

    $scope.resetFields = function() {
        $scope.musicsField = [{name: ''}];
        $scope.playlistField = {name: ''};
    };

    $scope.verifyMusicEmpty = function(index) {
        return !$scope.musicsField[index].name && index < $scope.musicsField.length - 3;
    };

    $scope.addMusicField = function() {
        if (verifyFieldsFull(1)) {
            $scope.musicsField.push({name: ''});
        }
    };

    $scope.removeMusicField = function(index) {
        if ($scope.musicsField.length > 1) {
            $scope.musicsField.splice(index, 1);
        }
        $scope.addMusicField();
    };

    $scope.btnEnable = function () {
        return verifyFieldsFull(2) && $scope.musicsField.length > 2 && $scope.playlistField.name;
    };

    function verifyFieldsFull(limit) {
        for(var i = 0; i < $scope.musicsField.length - limit; i++) {
            if (!$scope.musicsField[i].name ) return false;
        }
        return true;
    };

    function getPlaylists() {
        playlistsAPI.getPlaylists()
            .then(function (playlists) {
                $scope.playlistsData = playlists;
                console.log('recovering playlists...');
            })
            .catch(function (error) {
                $scope.status = 'getPlaylists() error: ' + error.message;
                console.log($scope.status);
            });
    };

    $scope.createPlaylist = function() {
        playlistsAPI.savePlaylist($scope.playlistField)
            .then(function (playlist) {
                console.log('created playlist: ' + playlist.id);
                $scope.resetFields();
                getPlaylists();
            })
            .catch(function (error) {
                $scope.status = 'createPlaylist() error: ' + error.message;
                console.log($scope.status);
            });
    };

    $scope.deletePlaylist = function(playlist) {
        playlistsAPI.deletePlaylist(playlist)
            .then(function () {
                getPlaylists();
                console.log('deleted playlist');
            })
            .catch(function (error) {
                $scope.status = 'deletePlaylist() error: ' + error.message;
                console.log($scope.status);
            });

    }
});