describe('Testing rcdni directive',function(){
	var scope,										
      	directive,
      	compiled,
      	html,
      	ctrl,
      	form;

    beforeEach(function(){						
    	module('app.directives');
      module('app.services');					
    	html = '<form name="patientForm">' +		
    			'<input type=text id=dni name="dni" rc-dni="" ng-model="fields.dni" />'
    			'</form>';
    	inject(function($compile, $rootScope, $controller){		
    		scope = $rootScope.$new();						
    		ctrl = $controller('MockDniController', {
    			$scope: scope
    		});
    		elem = angular.element(html);						
    		compiled = $compile(elem);				
    		compiled(scope);									
    		scope.$digest();									 				
    		form = scope.patientForm;	
    	});
	});
		
	it('Inform a valid DNI', function(){
		form.dni.$setViewValue("27904426K");				
		scope.$digest();									
		expect(form.dni.$valid).toBe(true);
	});

	it('Inform a wrong DNI',function(){
		form.dni.$setViewValue("27904426T");
		scope.$digest();
		expect(form.dni.$valid).toBe(false);				
	})
});