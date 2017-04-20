userApp.controller('enderecoController', function ($scope, $http) {

    //Responsavel por obter os endereços do usuário
    $http.get("dados/usuario.json").then(function (response) {
        $scope.enderecos = response.data.endereco;
    });
});