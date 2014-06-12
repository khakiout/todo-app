angular.module('todoApp', [])
	.controller('todoCtrl', [
	  '$scope',
	  '$filter',
	  function($scope, $filter) {
			console.log('Ready!');
			$scope.STATE_TODO = 1;
			$scope.STATE_WIP = 2;
			$scope.STATE_DONE = 3;
			
			$scope.tasks = [ 
        {
        	name : 'Wash clothes',
        	todoStamp : new Date().getTime(),
        	state : $scope.STATE_TODO
        },
        {
        	name : 'Finish report',
        	todoStamp : new Date('01/01/2013').getTime(),
        	state : $scope.STATE_TODO
        },
        {
        	name : 'Buy Grocery',
        	todoStamp : new Date('06/06/2014').getTime(),
        	wipStamp: new Date('06/07/2014').getTime(),
        	state : $scope.STATE_WIP
        },
        {
        	name : 'Cook Breakfast',
        	todoStamp : new Date('06/06/2014').getTime(),
        	wipStamp: new Date('06/07/2013').getTime(),
        	doneStamp: new Date('06/07/2013').getTime(),
        	state : $scope.STATE_DONE
        },
        {
        	name : 'Prepare Room',
        	todoStamp : new Date('06/06/2013').getTime(),
        	wipStamp: new Date('06/07/2013').getTime(),
        	doneStamp: new Date('06/12/2013').getTime(),
        	state : $scope.STATE_DONE
        }
      ];
			
			$scope.addTask = function() {
				console.log($scope.newTask);
				var task = {
				  name : $scope.newTask,
				  todoStamp : new Date().getTime(),
				  state : $scope.STATE_TODO
				}
				
				$scope.tasks.push(task);
				delete $scope.newTask;
			}
			
			$scope.promoteTask = function(task) {
				console.log(task.state);
				if (task.state == $scope.STATE_TODO) {
					task.wipStamp = new Date().getTime();
					task.state = $scope.STATE_WIP;
				} else if (task.state == $scope.STATE_WIP) {
					task.doneStamp = new Date().getTime();
					task.state = $scope.STATE_DONE;
				}
			}
			
			$scope.deleteTask = function(task) {
				var index = $scope.tasks.indexOf(task);
				console.log('deleting task with index: ' + index);
				
				$scope.tasks.splice(index, 1);
			}
		}]
	);