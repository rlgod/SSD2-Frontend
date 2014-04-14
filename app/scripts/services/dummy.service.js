'use strict';

//A dummy service used to create and identify dummy events
//See http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/

//Singleton
var app = angular.module('frontendApp.services.dummy', [])
  .service('dummy', function($rootScope) {
  	
  	this.attributes= {
		name : '...'
  	};

  	this.attributesNameUpdateEvent = function() {
		return "dummy.attributes.name.update";
		//To listen to this event use $scope.$on(dummy.attributesNameUpdateEvent(),
			// function(event) {...});
	}

  	//use to fire the event
  	this.setName = function(name) {
		this.attributes.name = name;
		$rootScope.$broadcast("dummy.attributes.name.update");
	}
  });