//app.js

var myApp = angular.module('myApp', []);

myApp.controller('myAppController',['$scope', function($scope){
	
	writeInHtml = function(){
	console.log("Ok, I will say saySomething !!!");	
	$scope.text1 = "This is the string of text1";
	$scope.text2 = "This is the string of text2";
	$scope.text3 = "This is the string of text3";
	$scope.text4 = "This is the string of text4";
	}

	$scope.doSomething = function(){
		writeInHtml();
	}
	
}]);
