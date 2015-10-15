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

	  $scope.todoItems = todoFactory.getTodoItems();

  }]);

