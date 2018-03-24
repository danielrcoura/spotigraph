angular.module("spotigraph").factory("topAPI", function ($http) {
    var baseUrl = 'http://127.0.0.1:3000';

    var _getTopPlaylists = function () {
        return $http.get(baseUrl + "/graph/playlists-top");
    };

    return {
        getTopPlaylists : _getTopPlaylists
    };
});