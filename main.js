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
  var menuDown = false;
  var clearSelected = document.querySelector(".selected");
  if(clearSelected){
    clearSelected.setAttribute('class','');
  }
  var dropdown = document.getElementById("main-navbar");
  var menuButton = document.getElementsByClassName("drop-btn")[0];
  $scope.menuItems = data.sections;

  // Check what menu item this is in the array, it will correlate with the data-num on the page menu 
  var pageHighlight;
  data.sections.forEach(function(obj,index){
    if(obj.url === $state.$current.name){
      pageHighlight = index
    }
  })

  var underline = document.querySelector("[data-item='" + pageHighlight + "']") || null;
  if(underline){
    underline.setAttribute("class","selected");
    // underline.className += "selected ";
  } 
  
  function handleDropdown(){
    menuDown = !menuDown;
    menuDown ?  dropdown.className = dropdown.className+="down " : dropdown.className ="";
  }

  $scope.dropMenu = function(){
    handleDropdown();
  };

  $scope.menuClick = function(item, index){
    handleDropdown();
    $state.go(item.url)
  }

}])