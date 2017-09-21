var myApp=angular.module("WebBhumi",[]);

var classes=function ($scope) {
  var electricty;
  $scope.electricty=electricty;
};
myApp.controller("classes",classes);


var coursesFunc= function($scope) {
  var courses = [{name:"Angular",covers:[{name:"JavaScript"},{name:"Angular"}]},{name:"Web Design",covers:[{name:"html"},{name:"css"},{name:"JavaScript"},{name:"Angular"}]}];
  $scope.courses=courses;
  }

  myApp.controller("courses",coursesFunc);