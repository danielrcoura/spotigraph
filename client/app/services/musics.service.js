angular.module("spotigraph").factory("musicsAPI", function ($http) {
    var baseUrl = 'http://127.0.0.1:3000';

    var _getMusics = function (playlist, id) {
        return $http.get(baseUrl + "/playlists/" + playlist + "/musicsField/");
    };

    var _getMusic = function (playlist, id) {
        return $http.get(baseUrl + "/playlists/" + playlist + "/musicsField/" + id);
    };

    var _saveMusic = function (playlist, music) {
        return $http.post(baseUrl + "/playlists/" + playlist + "/musicsField/", music);
    };

    return {
        getMusics : _getMusics,
        getMusic: _getMusic,
        saveMusic: _saveMusic
    };
});