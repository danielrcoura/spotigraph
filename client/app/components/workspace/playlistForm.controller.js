angular.module("spotigraph").controller("playlistFormCtrl", function ($scope) {
    $scope.rows = [{}, {}];
    $scope.add = function() {
        $scope.rows.push({});
    };

    $scope.remove = function(row) {
        var index = $scope.rows.indexOf(row);
        $scope.rows.splice(index, 1);
    };
});