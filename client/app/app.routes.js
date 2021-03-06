angular.module("spotigraph").config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'assets/views/home.html'
        })
        .state('playlists', {
            url: '/playlists',
            templateUrl: 'assets/views/playlists.html'
        })
        .state('playlistDetail', {
            url: '/playlists/:id',
            templateUrl: 'assets/views/playlist-detail.html'
        })
        .state('graph', {
            url: '/graph',
            templateUrl: 'assets/views/graph.html'
        })
        .state('top', {
            url: '/top',
            templateUrl: 'assets/views/top.html'
        });

});