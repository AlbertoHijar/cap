var app = angular.module('app', []);
app.controller('miCtrl', function (personajes, $http, $scope) {

    promise = personajes.getUsers();
    promise.then(function (data) {
        $scope.users = data;
        $scope.citaCelebre = {
            userId: $scope.users[0].id,
            frase: "",
            votos: 0,
        };

    });
    $scope.submitForm = function (form) {
        if(form.$valid){
            promise = personajes.addPersonaje($scope.citaCelebre);
            promise.then(function (personaje) {
                $scope.alert = true;
            })
        }else{
            $scope.error = true;
        }
       
    };

}).factory('personajes', function ($http) {

    return {

        addPersonaje: function (citaCelebre) {
            return $http.post('/admin/personaje/create', citaCelebre).then(function (respuesta) {
                return respuesta.data;
            })
        },
        getUsers: function () {
            return $http.get('/users/json').then(function (respuesta) {
                return respuesta.data;
            })
        }

    }

});