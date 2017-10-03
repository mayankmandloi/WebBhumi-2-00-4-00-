var app=angular.module("myModule",[]);
app.controller("myController",function ($scope,$http,myService) {
  $scope.name=myService.name;
  $http.get("https://swapi.co/api/people/?page=2").then(function sucess(responseData){
    console.log(responseData.data.results);
    $scope.Persons=responseData.data.results;
},function fail(responseData) {

  });
});

app.service("myService",function functionName() {
  return {
    name:"mayank"
};
})
