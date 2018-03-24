angular.module('spotigraph').controller('topCtrl', function ($scope, topAPI) {

    $scope.topPlaylists;
    $scope.status;

    getTopPlaylists();

    function getTopPlaylists() {
        topAPI.getTopPlaylists()
            .then(function (playlists) {
                $scope.topPlaylists = playlists.data;
                console.log('getTopPlaylists(): ' + $scope.topPlaylists);
            })
            .catch(function (error) {
                $scope.status = 'getPlaylists() error: ' + error.message;
                console.log($scope.status);
            });

    }

});
