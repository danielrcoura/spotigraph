# Spotigraph 
Spotigraph é uma aplicação simples que permite criar playlists e adicionar músicas (do Spotify) às playlists, além de mostrar graficamente as playlists relacionadas (possuem pelo menos uma música em comum) em forma de grafo.

## Usage
Backend server:

> spotigraph/api$ bundle install  
> spotigraph/api$ rails server 

Frontend server:

> spotigraph/client$ bower install  
> spotigraph/client$ python -m SimpleHTTPServer 8000  

```OBS: Você pode rodar o frontend qualquer servidor web, no caso escolhi python, mas é necessário que a aplicação esteja rodadando na porta 8000.``` 


## Screenshots

![Home page-1](https://github.com/danielrcoura/spotigraph/blob/master/screenshots/spotigraph-home-1.png)
![Home page-2](https://github.com/danielrcoura/spotigraph/blob/master/screenshots/spotigraph-home-3.png)
![Playlists](https://github.com/danielrcoura/spotigraph/blob/master/screenshots/create-playlist.png)
![Musics](https://github.com/danielrcoura/spotigraph/blob/master/screenshots/playlist-detail.png)
![Graph](https://github.com/danielrcoura/spotigraph/blob/master/screenshots/playlists-graph.png)
