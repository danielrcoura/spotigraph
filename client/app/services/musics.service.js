angular.module("spotigraph").factory("musicsAPI", function ($http) {
    var baseUrl = 'http://127.0.0.1:3000';

    var _getMusics = function (playlist) {
        return $http.get(baseUrl + "/playlists/" + playlist + "/musics/");
    };

    var _getMusic = function (playlist, id) {
        return $http.get(baseUrl + "/playlists/" + playlist + "/musics/" + id);
    };

    var _saveMusic = function (playlist, music) {
        return $http.post(baseUrl + "/playlists/" + playlist + "/musics/", music);
    };

    var _removeMusic = function (playlist, music) {
        return $http.delete(baseUrl + "/playlists/" + playlist + "/musics/" + music);
    };

    return {
        getMusics : _getMusics,
        getMusic: _getMusic,
        saveMusic: _saveMusic,
        removeMusic: _removeMusic
    };
});