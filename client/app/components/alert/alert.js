angular.module("spotigraph").directive("alert", function () {
    return {
        templateUrl: "app/components/alert/alert.html",
        replace: true,
        restrict: "AE",
        transclude: true
    };
});