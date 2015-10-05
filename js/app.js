/*
 This is a demo angular app to show, how you can use U2F tokens
 with privacyIDEA.

 MIT License
 Cornelius Kölbel
 cornelius.koelbel@netknights.it

 */
myApp = angular.module("u2fDemo", []);

myApp.constant("privacyIdeaHost", "https://ubuntu.azz.de");
myApp.constant("authUrl", "/validate/check");


angular.module("u2fDemo")
    .controller("mainController",
        function ($scope, $http, privacyIdeaHost, authUrl) {



            $scope.success = function(data) {
                $scope.data = data;
                $scope.result = data.result;
                $scope.login.password = "";
                $scope.result_text = "";
                if ( $scope.result.status) {
                    if ($scope.result.value) {
                        $scope.result_text = "Authentication successful.";
                    }
                }
            };

            $scope.error = function(data) {
                $scope.data = data;
                $scope.login.password = "";
                $scope.result_text = "failed to authenticate!";
            };

            $scope.authenticate = function() {
                $http.post(privacyIdeaHost + "/" + authUrl,
                        {"user": $scope.login.username,
                         "pass": $scope.login.password}).success($scope.success
                ).error($scope.error)
            }
        });

myApp.run();
