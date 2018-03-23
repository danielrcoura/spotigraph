angular.module("spotigraph").controller("playlistFormCtrl", function ($scope) {
    $scope.musics = [{name: ''}, {name: ''}];
    $scope.add = function(index) {
        console.log(index);
        if (verifyField()) {
            $scope.musics.push({name: ''});
        }
    };

    function verifyField() {
        $scope.musics.forEach(function (music){
            if (music.name === '') {
                return false;
            }
        });
        return true;
    }

    $scope.validate = function () {
        var bool = false;
        if ($scope.playlistField) {
            bool = true;
        }
        return verifyField() && bool;
    }

    $scope.remove = function(music) {
        var index = $scope.musics.indexOf(music);
        $scope.musics.splice(index, 1);
    };
});