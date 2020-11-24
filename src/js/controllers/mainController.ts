import  authorizationApp  from '../../app';
import { MY_TOKEN } from '../../app';

authorizationApp.controller('mainController', 
    function mainController($scope){
        let name = sessionStorage.getItem(MY_TOKEN);
        document.title = name;
        $scope.name = name
        $scope.logout = function() { document.location.href = "#!auth" }
    }
)