angular.module('spotigraph').controller('graphCtrl', function ($scope, graphAPI) {

    $scope.status;

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
                    sys.addNode(node, {'color': 'red', 'shape': 'dot', 'label': node});
                });
                console.log('__________________');
                Object.keys(graph).forEach(function (node) {
                    graph[node].forEach(function (edge) {
                        console.log('add edge: ' + node + ' to ' + edge);
                        sys.addEdge(node, edge, {pointSize:100, color:'red'});
                    })
                });
            })
            .catch(function (error) {
                $scope.status = 'renderGraph() error: ' + error.message;
                console.log($scope.status);
            });
    }

});
