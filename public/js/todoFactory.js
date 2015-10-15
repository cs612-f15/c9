'use strict';

/**
 * @ngdoc service
 * @name c9todoApp.TodoFactory
 * @description
 * # TodoFactory
 * Factory in the c9todoApp.
 */
angular.module('todoApp')
	.factory('TodoFactory', ['$http', function ($http) {
		// Service logic
		// ...
		var todoItemsFake = [
			{ 'id': 1, 'title': 'do homework', 'done': false },
			{ 'id': 1, 'title': 'do homework', 'done': false },
			{ 'id': 2, 'title': 'do homework', 'done': false },
			{ 'id': 3, 'title': 'do homework', 'done': false },
			{ 'id': 4, 'title': 'do homework', 'done': false },
			{ 'id': 5, 'title': 'do homework', 'done': false }
		];
	

		var urlBase = '/api/todo';

		// Public API here
		return {
			getTodoFakeItems: function () {
				return todoItemsFake;
			},
			
			/// returns a Promise...
			getTodoItems: function(){
				return $http.get(urlBase);
			}
			
		};
		
		
		
	}]);
