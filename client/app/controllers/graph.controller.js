angular.module('spotigraph').controller('graphCtrl', function ($scope, graphAPI) {

    $scope.status;

    var COLORS = ['#4cb562', '#6168ba', '#f2625a'];
    var sys = arbor.ParticleSystem(300, 400,1);

    sys.parameters({gravity:true});
    sys.renderer = Renderer("#viewport") ;

    renderGraph();


    function renderGraph() {
        graphAPI.getGraph()
            .then(function (graph) {
                var graph = graph.data;
                Object.keys(graph).forEach(function (node) {
                    console.log('add node: ' + node);
                    sys.addNode(node, {'color': COLORS[Math.floor((Math.random() * 3))], 'shape': 'dot', 'label': graph[node].label});
                });
                console.log('__________________');
                Object.keys(graph).forEach(function (node) {
                    graph[node].adjacents.forEach(function (edge) {
                        console.log('add edge: ' + node + ' to ' + edge);
                        sys.addEdge(node, edge, {pointSize:100, color:'#2f2f2f'});
                    })
                });
            })
            .catch(function (error) {
                $scope.status = 'renderGraph() error: ' + error.message;
                console.log($scope.status);
            });
    }

});
