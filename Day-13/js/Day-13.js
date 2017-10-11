angular.module("myApp",["ngRoute"]);
angular.module("myApp").controller("myController",function ($scope) {
  $scope.person1="Avinash";
  $scope.person2="Rakhee";
  $scope.Books=books;
  $scope.movies=movies;

});
angular.module("myApp").config(function ($routeProvider) {
$routeProvider.when("/p1",{
template:"{{person1}}"
});
$routeProvider.when("/p2",{
template:"{{person2}}"
});

$routeProvider.when("/books",{
templateUrl:"book.html"
});

$routeProvider.when("/movies",{
templateUrl:"movie.html"
});
})
