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
        if (confirm("Are you sure you want to delete a \"daniel\" playlist?")) {
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
    }
});