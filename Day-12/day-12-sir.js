angular.module("myApp",[]);
angular.module("myApp").controller("myController",function ($scope) {
$scope.book=books;
$scope.bachhe=bachhe;
});

angular.module("myApp").directive("rakhee",function () {
 return {
templateUrl:"rakheeDetails.html"
};

})
angular.module("myApp").directive("avibook",function () {
 return {
templateUrl:"book-sir.html",
scope:{
data:"=putput"
}
};

})
