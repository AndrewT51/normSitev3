"use strict";

var app = angular.module("securityApp",["ui.router"]);

app.config(["$urlRouterProvider", "$stateProvider", "$locationProvider" ,function($urlRouterProvider,$stateProvider, $locationProvider){
  $urlRouterProvider.otherwise('/home')
  
  // $locationProvider.html5Mode({
  //   enabled:true,
  //   requireBase: false
  // });

  $stateProvider
  .state("home",{
    url:"/home",
    templateUrl: "templates/home.html",
    controller: "mainCtrl"
  })
  .state("about",{
    url:"/about",
    templateUrl: "templates/about.html",
    controller: "mainCtrl"
  })
  data.sections.forEach(function(el){
    $stateProvider.state(el.url,{
      url: "/" + el.heading,
      templateUrl: "templates/" + el.image + ".html",
      controller: "mainCtrl"
    })
  })
}])

app.controller("mainCtrl", ["$scope","$state", function($scope,$state){
  var menuUp = true;
  var toClearUnderline = [].slice.call(document.querySelectorAll("[data-index]"))
  toClearUnderline.forEach(function(el){
    el.setAttribute("id","")
  })
  var dropdown = document.getElementsByClassName("mobile-view")[0];
  var menuButton = document.getElementsByClassName("nav-btn")[0];
  $scope.menuItems = data.sections;

  // Check what menu item this is in the array, it will correlate with the data-num on the page menu 
  // var pageHighlight;
  // data.sections.forEach(function(obj,index){
  //   if(obj.url === $state.$current.name){
  //     pageHighlight = index
  //   }
  // })

  // var underline = document.querySelector("[data-index='" + pageHighlight + "']") || null;
  // if(underline){
  //   underline.setAttribute("id","bar-selected");
  // } 
  
  // function handleDropdown(){
  //   menuUp = !menuUp;
  //   dropdown.style.display = menuUp ?  "none" : "block";
  //   menuUp ?  menuButton.className = menuButton.className.replace(/ btn-selected/,"") : menuButton.className += " btn-selected";
  // }

  // $scope.dropMenu = function(){
  //   handleDropdown();
  // };

  // $scope.menuClick = function(item, index){
  //   handleDropdown();
  //   $state.go(item.url)
  // }

}])