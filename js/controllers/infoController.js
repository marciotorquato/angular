userApp.controller('infoController', function ($scope, $http) {

    //Função responsavel por retornar algumas informações do usuário
    $http.get("dados/usuario.json").then(function (response) {
        $scope.info = response.data;
        console.log(response.data);
    });
});