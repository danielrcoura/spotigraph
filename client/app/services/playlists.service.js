angular.module("spotigraph").factory("playlistsAPI", function ($http) {
    var baseUrl = 'http://127.0.0.1:3000';

    var _getPlaylists = function () {
        return $http.get(baseUrl + "/playlists");
    };

    var _getPlaylist = function (id) {
        return $http.get(baseUrl + "/playlists/" + id);
    };

    var _savePlaylist = function (playlist) {
        return $http.post(baseUrl + "/playlists", JSON.stringify(playlist));
    };

    var _deletePlaylist = function (id) {
        return $http.delete(baseUrl + "/playlists/" + id);
    };

    return {
        getPlaylists: _getPlaylists,
        getPlaylist: _getPlaylist,
        savePlaylist: _savePlaylist,
        deletePlaylist: _deletePlaylist
    };
});