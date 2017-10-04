angular.module("personNameApp",[]);


// ----------------------------------------


angular.module("personNameApp")
.controller("batch1Controller",function (getData) {
  this.Details=getData.personDetails;
})
