'use strict';

module.exports = function ($scope, $q, $location, AuthService) {

    $scope.login = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;
      $scope.checked=true;
      // call login from service
      AuthService.login($scope.loginForm.username, $scope.loginForm.password, $q)
        // handle success
        .then(function () {


            $scope.checked=true;
          //  alert($rootScope.checked);

            $location.path('/home');
            $scope.disabled = false;
            $scope.loginForm = {};
            document.getElementById("dpAdmin").style.display = "block";
            document.getElementById("dpAdmin1").style.display = "block";
            document.getElementById("dpAdmin2").style.display = "none";
  //alert($scope.goAdmin);
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.checked=true;
          $scope.loginForm = {};
        });

    };

}
