var app=angular.module("myModule",[]);
app.controller("myController",function ($scope) {
  $scope.players=[{Name:"SR.Tendulkar",Match:463,Runs:18426,Highest:200,hun:49,fif:96},
  {Name:"SC.Ganguly",Match:308,Runs:11221,Highest:183,hun:22,fif:71},
  {Name:"R.Dravid",Match:340,Runs:10768,Highest:153,hun:12,fif:82},
  {Name:"M.S Dhoni",Match:301,Runs:9571,Highest:183,hun:9,fif:66},
  {Name:"M.Azharuddin",Match:334,Runs:9378,Highest:153,hun:7,fif:58},
  {Name:"V.Kohli",Match:197,Runs:8707,Highest:183,hun:30,fif:45},
  {Name:"Yuvraj sing",Match:301,Runs:8609,Highest:150,hun:14,fif:52},
  {Name:"V.sehwag",Match:241,Runs:7995,Highest:219,hun:15,fif:37},
  {Name:"Rohit sharma",Match:166,Runs:5843,Highest:264,hun:13,fif:33},
  {Name:"S.k Raina",Match:233,Runs:5568,Highest:116,hun:5,fif:36},
  {Name:"A jadeja",Match:196,Runs:5359,Highest:119,hun:6,fif:30},
  {Name:"G gambhir",Match:147,Runs:5238,Highest:150,hun:11,fif:34},
  {Name:"N.S Sidhu",Match:136,Runs:4413,Highest:134,hun:6,fif:33},
  {Name:"K Srikant",Match:146,Runs:4091,Highest:123,hun:4,fif:27},
  {Name:"N kapil Dev",Match:225,Runs:3783,Highest:175,hun:1,fif:14},
  {Name:"S dhawan",Match:90,Runs:3779,Highest:137,hun:11,fif:21},
  {Name:"DB vengsarkar",Match:129,Runs:3508,Highest:105,hun:1,fif:23},
  {Name:"RJ Shastri",Match:150,Runs:3108,Highest:109,hun:4,fif:18}];
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
$scope.showBudget=function (player) {
  if(!player.paise)
    {
      player.paise=true;
    }
  else {
    player.paise=false;
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