angular.module("myApp",[]);
angular.module("myApp").controller("myController",function ($scope) {
$scope.book=books;
});

angular.module("myApp").directive("rakhee",function () {
 return {
templateUrl:"rakheeDetails.html"
};

})
angular.module("myApp").directive("avibook",function () {
 return {
templateUrl:"book.html"
};

})
