angular.module("myApp",["ngRoute"]);
angular.module("myApp").controller("myController",function ($scope,$routeParams) {
  $scope.person1="Avinash";
  $scope.person2="Rakhee";
  $scope.Books=books;
  $scope.movies=movies;
  $scope.searchId=$routeParams.id;
  console.log($routeParams);

});
angular.module("myApp").config(function ($routeProvider) {
$routeProvider.when("/p1",{
template:"{{person1}}",
controller:"myController"
});
$routeProvider.when("/p2",{
template:"{{person2}}",
controller:"myController"
});

$routeProvider.when("/books",{
templateUrl:"book.html",
controller:"myController"
});

$routeProvider.when("/movies",{
templateUrl:"movie.html",
controller:"myController"
});

$routeProvider.when("/book/:id",{
templateUrl:"bookSearch.html",
controller:"myController"
});

$routeProvider.when("/book/edit/:id",{
templateUrl:"bookEdit.html",
controller:"myController"
});
})
