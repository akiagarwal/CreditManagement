angular.module('spark').directive('myNavigation',myNavigation);

function myNavigation(){
	return{
		restrict:'E',
		templateUrl: 'angular-app/navigation-directive/navigation-directive.html'
	};
}