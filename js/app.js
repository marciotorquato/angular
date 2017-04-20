//Criando o modulo com o nome userApp
var userApp = angular.module('userApp', ['ngRoute']);

//Configurando as rotas
userApp.config(function ($routeProvider) {
    $routeProvider

        //Rota para a pagina Home
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })

        //Rota para a pagina compras
        .when('/compras', {
            templateUrl: 'views/compras.html',
            controller: 'comprasController'
        })

        //Rota para a pagina endereco
        .when('/endereco', {
            templateUrl: 'views/endereco.html',
            controller: 'enderecoController'
        })

        //Rota para a pagina info
        .when('/info', {
            templateUrl: 'views/info.html',
            controller: 'infoController'
        });
});