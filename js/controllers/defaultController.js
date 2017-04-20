userApp.controller('defaultController', function ($rootScope, $http) {

    //Função responsavel por retornar o nome do usuário
    $http.get("dados/usuario.json").then(function (response) {
        $rootScope.usuario = response.data.nome;
    });
});