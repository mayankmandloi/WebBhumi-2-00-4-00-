var app=angular.module("myModule",[]);
app.controller("myController",function ($scope) {
  $scope.StudentsRating=[
{name:"Rakhee",html:7,css:9,js:5,angular:8,budget:1000 ,bday:new Date(1996,7,23)}

,{name:"Avinash",html:8,css:8,js:6,angular:8,budget:500 ,bday:new Date(1991,6,01)}

,{name:"Shivam",html:8,css:6,js:9,angular:3,budget:500 ,bday:new Date(1996,10,17)}

,{name:"Brijesh",html:9,css:10,js:8,angular:3,budget:1000 ,bday:new Date(1993,0,8)}];
  $scope.sortByMe=function(inputValue)
    {
      if($scope.byMe==inputValue)
        {
          $scope.byMe="-"+inputValue;
        }
        else {
            $scope.byMe=inputValue;
        }
    };
$scope.showBudget=function (student) {
  if(!student.paise)
    {
      student.paise=true;
    }

}
});
app.filter("hidePaise",function () {
  return function (item,paise) {
  if(!paise)
{
  var newItem=""+item;
  var len = newItem.length;
  var str= "";
  for(i=1;i<=len;i++)
  {
    str= str +"X";
  }
  return "Rs "+str;
  }
else {
  return "Rs "+item;
}
}
})
