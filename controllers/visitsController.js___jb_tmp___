this.visitsController = function ($scope, $http, $route, $location, UserService) {

    document.getElementById("docbody").className = "";

    $scope.visits = UserService.visitsArray;
    $scope.perscripts = UserService.prescription;
    $scope.press = UserService.tempItemList;

    $scope.intro = 'Add and manage doctor visits, prescriptions and tests';

    // DELETE DOCTOR FROM ARRAY
    $scope.removeVisits = function(id){
        for(var i = $scope.visits.length - 1; i >= 0; i--){
            if($scope.visits[i].id == id){
                $scope.visits.splice(i,1);
            }
        }
    }
    // DELETE DOCTOR FROM ARRAY END

    // DELETE PRESCRIPTION ITEM FROM ARRAY
    $scope.removeItem = function(id){

        for(var i = $scope.perscripts.length - 1; i >= 0; i--){
            if($scope.perscripts[i].id == id){
                UserService.prescription.splice(i,1);
            }
        }

        $route.reload();
    };
    // DELETE PRESCRIPTION ITEM FROM ARRAY END



    // SHOW DETAIL
    $scope.showDetail = function(id){

        // var presList = [];

        UserService.tempItemList = [];

        angular.forEach($scope.visits, function(visit) {
            $("#detail"+visit.id).hide("slow");
        });

        $scope.prescriptions = UserService.prescription;
        angular.forEach($scope.prescriptions, function(pres) {
            if(pres.visit == id)
                // presList.push(pres);
                UserService.tempItemList.push(pres);
        });

        // $scope.press = presList;
        $scope.press = UserService.tempItemList;

        $("#detail"+id).slideDown("slow");

    };
    // SHOW DETAIL END

    // OPEN DOCTOR ADDING FORM
    $scope.addDoc = function(){
        $("#addButton").hide();
        $("#addDoc").slideDown("slow");
    };
    // OPEN DOCTOR ADDING FORM END

    // CLOSE DOCTOR ADDING FORM
    $scope.closeDoc = function(){
        $("#addButton").hide();
        $("#addDoc").slideUp("slow");
        $("#addButton").show();
    };
    // CLOSE DOCTOR ADDING FORM END

    // CREATE DOC VISIT
    $scope.createDoc = function(doc){

        var newId = UserService.visitsArray.length+1;

        $("#addButton").hide();
        $("#addDoc").slideUp("slow");
        $("#addButton").show();
        doc.id = newId;
        doc.date = new Date();
        UserService.visitsArray.push(doc);
        $scope.doc = "";
    };
    // CREATE DOC VISIT END

    // CREATE PRESCRIPTION
    $scope.createPresc = function(visitId,presc){

        var newId = UserService.prescription.length+1;
        presc.id = newId;
        presc.visit = visitId;
        UserService.prescription.push(presc);
        $scope.newPresc = "";

        var presList2 = [];

        $scope.newPrescription = UserService.prescription;
        angular.forEach($scope.newPrescription, function(p) {
            if(p.visit == visitId)
                presList2.push(p);
        });

        $route.reload();

    };
    // CREATE PRESCRIPTION END

    // CLOSE PRESCRIPTION
    $scope.closePresc = function(id){
        $("#detail"+id).slideUp("slow");
        $scope.prescript = "";
    };
    // CLOSE PRESCRIPTION END

    // OPEN DOCTOR ADDING FORM FORM
    $scope.addDoc = function(){
        $("#addButton").hide();
        $("#addDoc").slideDown("slow");
    };
    // OPEN DOCTOR ADDING FORM END

    // CLOSE DOCTOR ADDING FORM
    $scope.closeDoc = function(){
        $("#addButton").hide();
        $("#addDoc").slideUp("slow");
        $("#addButton").show();
    };
    // CLOSE DOCTOR ADDING FORM END


}