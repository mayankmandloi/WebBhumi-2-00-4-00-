angular.module("myApp",[]);
// -----------------------------------------------
angular.module("myApp").controller("myController",function ($scope,getBookDetails) {
var that=this;
getBookDetails.getData.then(function (res) {
  that.Books=res.data.Books;
    console.log(that.Books);
},function (res) {
  console.log(res);
})


});
// -------------------------------------------------

angular.module("myApp").directive("showBook",function () {
  return{
  templateUrl:"bookTemplate.html",
  restrict:'ECMA'
};
});
// ------------------------------------------------------


angular.module("myApp").service("getBookDetails",function ($http) {
this.getData=$http.get("http://it-ebooks-api.info/v1/search/angular");
})
