angular.module("spotigraph").factory("playlistsAPI", function ($http) {
    var baseUrl = 'http://127.0.0.1:3000';

    var _getPlaylists = function () {
        return $http.get(baseUrl + "/playlists");
    };

    var _getPlaylist = function (id) {
        return $http.get(baseUrl + "/playlists/" + id);
    };

    var _savePlaylist = function (contato) {
        return $http.post(baseUrl + "/playlists", contato);
    };

    return {
        getPlaylists: _getPlaylists,
        getPlaylist: _getPlaylist,
        savePlaylist: _savePlaylist
    };
});