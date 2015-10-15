'use strict';

/**
 * @ngdoc service
 * @name c9todoApp.TodoFactory
 * @description
 * # TodoFactory
 * Factory in the c9todoApp.
 */
angular.module('todoApp')
	.factory('TodoFactory', function () {
		// Service logic
		// ...

		var todoItems = [
			{ 'id': 1, 'title': 'do homework', 'done': false },
			{ 'id': 1, 'title': 'do homework', 'done': false },
			{ 'id': 2, 'title': 'do homework', 'done': false },
			{ 'id': 3, 'title': 'do homework', 'done': false },
			{ 'id': 4, 'title': 'do homework', 'done': false },
			{ 'id': 5, 'title': 'do homework', 'done': false }
		];
	

		// Public API here
		return {
			getTodoItems: function () {
				return todoItems;
			}
		};
	});
