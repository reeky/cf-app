this.lifestyleController = function ($scope, $http, $location, UserService) {

    document.getElementById("docbody").className = "";

    $scope.lifestyleIntro = 'Some of the lifestyle changes that CF patients require are:';

    // GET LIFESTYLES
    $http.get(UserService.globalRoot + "/lifestyle.json")
        .then(function (response) {
            $scope.lifestyles = response.data;
        });
    // END LIFESTYLES

}