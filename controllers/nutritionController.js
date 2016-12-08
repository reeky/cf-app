this.nutritionController = function ($scope, $http, $route, $location, UserService) {

    document.getElementById("docbody").className = "";

    $scope.intro = 'The following are ways for adding protein and calories to the diet. Be sure to follow other specific instructions from your health care provider. Eat whenever you are hungry. This may mean eating several small meals throughout the day.';

    // GET THE NUTRITION
    $http.get(UserService.globalRoot + "/nutrition.json")
        .then(function (response) {
            $scope.nutritions = response.data;
        });
    // END NUTRITION

    // GET THE NUTRITION BY ID
    $http.get(UserService.globalRoot + "/nutrition.json")
        .then(function (response) {
            $scope.nutritions = response.data;
            angular.forEach($scope.nutritions, function(nutritionByIds) {

                if(nutritionByIds.id == $route.current.params.id)
                    $scope.nutritionById = nutritionByIds;

            });
        });
    // END NUTRITION

    // GET THE DETAIL OF NUTRITION
    $scope.nutritionDetail = function(id,name){
        $scope.topColor = '#558B2F';
        $scope.pageName = "Whatever";
        $location.path('nutrition/'+id);
    };
    // GET THE DETAIL OF NUTRITION END

    // GO BACK TO NUTRITION LANDING PAGE
    $scope.back = function(){
        $scope.topColor = '#558B2F';
        $scope.pageName = "Nutrition";
        $location.path('nutrition');
    };
    // GO BACK END

}