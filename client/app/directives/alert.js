angular.module("spotigraph").directive("alert", function () {
    return {
        templateUrl: "assets/views/alert.html",
        replace: true,
        restrict: "AE",
        transclude: true
    };
});