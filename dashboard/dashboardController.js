'use strict';

var dashboardController = angular.module('dashboardController', []);

dashboardController.controller('dashboardController', ['$scope', 
	function($scope) {
		$scope.welcome = 'welcome to my mobile thinger';
	}
]);