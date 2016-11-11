'use strict';

module.exports = function ($scope, $q, $location, AuthService) {

    $scope.logout = function () {
    $scope.checked=false;
      // call logout from service
      AuthService.logout($q)
        .then(function () {
          $location.path('/login');
          $scope.checked=true;
            document.getElementById("dpAdmin").style.display = "none";
              document.getElementById("dpAdmin1").style.display = "none";
                document.getElementById("dpAdmin2").style.display = "block";
        });

    };

}
