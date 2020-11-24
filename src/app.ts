import angular from '../node_modules/angular';

export const MY_TOKEN  = 'name';

sessionStorage.setItem('admin', 'admin')
sessionStorage.setItem('user', '1234')
sessionStorage.setItem('Vlad', 'qwerty')

let authorizationApp = angular.module('authorizationApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/auth',
        {
            templateUrl:'./views/auth-page.html',
            controller: 'authController'
        });
        $routeProvider.when('/main',
        {
            templateUrl:'./views/main.html',
            controller:'mainController'
        });

        $routeProvider.otherwise({redirectTo: '/auth'});
});

export default authorizationApp;