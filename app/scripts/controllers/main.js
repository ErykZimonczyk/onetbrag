'use strict';

/**
 * @ngdoc function
 * @name onetBragApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onetBragApp
 */
angular.module('onetBragApp')
  .controller('MainCtrl', function ($scope, $location) {
    if (localStorage.logged){
		var path = $location.path('/form');
	}

	$scope.goToForm = function (){
		if (localStorage.logged){
			var path = $location.path('/form');
			console.log(path);
		}
	}

    $scope.show = function(){
		logPopup.display="block";
	};

	$scope.goThroughFb = function(){
		localStorage.logged="true";
		var path = $location.path('/form');
	}

	$scope.validateSet = function(){
		$scope.hideEl('unproper_login');
		var email = document.getElementById('f_login').value;
		var password = document.getElementById('f_password').value;
		var reMail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var rePass = /[a-zA-Z0-9]{2,}/i;
		if (reMail.test(email) && rePass.test(password)){
			localStorage.logged="true";
			var path = $location.path('/form');
		} else {
			$scope.showEl('unproper_login');
		}
	}

	$scope.hideEl = function(name){
		var el = document.getElementById(name);
		el.style.display="none";
	}

	$scope.showEl = function(name){
		var el = document.getElementById(name);
		el.style.display="block";
	}

	$scope.logout = function(name){
		delete localStorage.logged;
		var path = $location.path('/');
	}


  });
