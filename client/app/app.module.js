angular.module("spotigraph",[
    'ui.router',
    'spotify'
])
.config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('f9771b615f1c4f74ab02fc2ca5c26294');
    SpotifyProvider.setRedirectUri('http://127.0.0.1:8000/assets/views/spotify-callback.html');
    SpotifyProvider.setScope('');
});