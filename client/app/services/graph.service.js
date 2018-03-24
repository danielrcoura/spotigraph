angular.module("spotigraph").factory("graphAPI", function ($http) {
    var baseUrl = 'http://127.0.0.1:3000';

    var _getGraph = function () {
        return $http.get(baseUrl + "/graph/playlists/");
    };

    return {
        getGraph : _getGraph
    };
});