angular.module("spotigraph").config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/playlists');

    $stateProvider
        .state('playlists', {
            url: '/playlists',
            templateUrl: 'assets/views/workspace.html'
        });
});