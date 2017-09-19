var myApp=angular.module("WebBhumi",[]);

var classes=function ($scope) {
  var students = [{name:"Avinash",course:"Angular",batch:"02:00 pm"}, {name:"Brijesh",course:"Angular",batch:"02:00 pm"}, {name:"Rakhi",course:"Angular",batch:"02:00 am"}, {name:"Shivam",course:"Angular",batch:"??:00 pm"},{name:"Tanveer",course:"All",batch:"02:00 am" },{name:"Arti",course:"Web Design",batch:"02:00 am" },{name:"Mayank",course:"Angular",batch:"??:00 pm" }];
  $scope.students=students;
};
myApp.controller("classes",classes);


var coursesFunc= function($scope) {
  var courses = [{name:"Angular",covers:[{name:"JavaScript"},{name:"Angular"}]},{name:"Web Design",covers:[{name:"html"},{name:"css"},{name:"JavaScript"},{name:"Angular"}]}];
  $scope.courses=courses;
  }

  myApp.controller("courses",coursesFunc);
