angular.module('spotigraph').controller('playlistDetailCtrl', ['$scope', '$stateParams', 'Spotify', function ($scope, $stateParams, Spotify) {
    $scope.id = $stateParams.id;
}]);
