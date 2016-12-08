// (function() {

    var app = angular.module("cf", ["ngRoute","ocNgRepeat"]);

    app.factory('UserService', function() {
        return {
            globalRoot : 'http://cf',
            prescription : [{ id: 1, visit: 1, name: "Panadol 10mg (BBD)"},
                { id: 2, visit: 1, name: "Paracetamil 20mg"},
                { id: 3, visit: 2, name: "Voltarin 20mg"},
                { id: 4, visit: 2, name: "Amloidipine 5mg"},
                { id: 5, visit: 2, name: "Volini"}],
            visitsArray : [
                { id: 1, name: "Dr. Mohamed Anil", letter: "M", color: "#00BCD4", date: "08-12-2016"},
                { id: 2, name: "Dr. Ismail Fazeel", letter: "I", color: "#D500F9", date: "08-12-2016"},
                { id: 3, name: "Dr. Ahmed Rasheed", letter: "A", color: "#1DE9B6", date: "08-12-2016"},
                { id: 4, name: "Dr.Naresh Patel", letter: "N", color: "#00BCD4", date: "08-12-2016"},
                { id: 5, name: "Dr. Abhijeeth Sawanth", letter: "A", color: "#D500F9", date: "08-12-2016"}
            ],
            tempItemList :[]
        };
    });

    ////////////////////// DEFINE CONTROLLERS ///////////////////////
    app.controller("menuController", menuController);
    app.controller("homeController", homeController);
    app.controller("symptomsController", symptomsController);
    app.controller("vaccineController", vaccineController);
    app.controller("lifestyleController", lifestyleController);
    app.controller("nutritionController", nutritionController);
    app.controller("visitsController", visitsController);
    app.controller("aboutController", aboutController);
	////////////////////// DEFINE CONTROLLERS END ///////////////////////

// })();