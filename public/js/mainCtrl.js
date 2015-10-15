'use strict';

/**
 * @ngdoc function
 * @name c9todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the c9todoApp
 */
angular.module('todoApp')
	.controller('MainCtrl', ['$scope', 'TodoFactory', function ($scope, todoFactory) {

		$scope.status;
		$scope.todoItems;
		
		getTodoItems();

		function getTodoItems() {
			todoFactory.getTodoItems()
				.success(function (todoItems) {
					$scope.status = 'Retrieved Todo Items';
					$scope.todoItems = todoItems;
				})
				.error(function (error) {
					$scope.status = 'Error retrieving customers! ' + error.message;
				});
		}

	}]);

