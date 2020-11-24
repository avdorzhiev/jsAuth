import  authorizationApp  from '../../app';
import { MY_TOKEN } from '../../app';


authorizationApp.controller('authController',
    function authController($scope) {
        document.title = 'auth';
        $scope.login = ''
        $scope.password = ''
        $scope.check = function (login, password) {
            if (login.trim() && password.trim()) {
                if (sessionStorage.getItem(login) == password) {
                    sessionStorage.setItem(MY_TOKEN, login)
                    document.location.href = "#!main"
                }
                else alert('Неверный логин или пароль')
            } else alert('Введите логин и пароль!')
        }
    }
)