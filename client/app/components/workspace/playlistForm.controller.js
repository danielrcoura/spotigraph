angular.module("spotigraph").controller("playlistFormCtrl", function ($scope) {
    $scope.musics = [{name: ''}, {name: ''}];
    $scope.playlistField = "";

    $scope.add = function() {
        if (verifyFieldsFull()) {
            $scope.musics.push({name: ''});
        }
    };

    $scope.verifyMusicEmpty = function(music) {
        console.log(music);
        return !$scope.musics[music].name && music < $scope.musics.length - 2;
    };

    function verifyFieldsFull() {
        for(var i = 0; i < $scope.musics.length -1; i++) {
            if (!$scope.musics[i].name ){
                return false;
            }
        }
        return true;
    }

    $scope.reset = function() {
        $scope.musics = [{name: ''}, {name: ''}];
        $scope.playlistField = "";
    };

    $scope.btnEnable = function () {
        return verifyFieldsFull() && $scope.playlistField;
    };

    $scope.remove = function(index) {
        if ($scope.musics.length > 1) {
            $scope.musics.splice(index, 1);
        }
        add();
    };
});