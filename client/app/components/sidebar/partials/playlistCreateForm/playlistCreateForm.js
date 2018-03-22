angular.module("spotigraph").controller("playlistCreateForm", function ($scope) {
    $scope.rows = [{}, {}, {}];
    $scope.add = function() {
        console.log(1)
        $scope.rows.push({});
    };

    $scope.remove = function(row) {
        var index = $scope.rows.indexOf(row);
        $scope.rows.splice(index, 1);
    };
});