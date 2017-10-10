angular.module("myApp",["ngRoute"]);
angular.module("myApp").controller("myController",function ($scope) {
  $scope.person1="Avinash";
  $scope.person2="Rakhee";
  $scope.Books=books;

});
angular.module("myApp").config(function ($routeProvider) {
$routeProvider.when("/",{
template:"{{person1}}"
});
$routeProvider.when("/p2",{
template:"{{person2}}"
});

$routeProvider.when("/books",{
templateUrl:"book.html"
});


})
