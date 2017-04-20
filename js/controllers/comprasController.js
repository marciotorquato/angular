userApp.controller('comprasController', function ($scope, $http) {

    //Função responsavel por retornar informações sobre as compras efetuadas pelo usuário
    $http.get("dados/usuario.json").then(function (response) {
        $scope.compras = response.data.compras;
    });
});