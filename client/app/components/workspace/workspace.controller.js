angular.module('spotigraph').controller('workspaceCtrl', function ($scope, playlistsAPI) {
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
});