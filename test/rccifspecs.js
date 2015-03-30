//http://www.benLesh.com/2013/06/angular-js-unit-testing-directives.html

describe('Testing rccif directive', function(){
	var scope,
		elem,
		directive,
		compiled,
		html,
		ctrl,
		form;

	beforeEach(function(){
		//Load the module
		module('src.directives');

		//set our view html.
		html = 	'<form name="testform" ng-init="{field:cif=\'\'}">' +
				'<input type="text" id="cif" name="cif" rc-cif="" ng-model="fields.cif"/>' +
				'</form>';

		inject(function($compile, $rootScope, $controller){
			//create a scope (you could just use $rootScope, I suppose)
			scope = $rootScope.$new();

			//get the jqLite or jQuery element
			elem = angular.element(html);

			//compile the element into a function to
			//process the view.
			compiled = $compile(elem);

			//run teh compiled view.
			compiled(scope);

			//call digest on the scope!
			scope.$digest();

			//Get the angularjs form control
			form = scope.testform;
		});
	});

	it('Inform a valid CIF', function() {
		form.cif.$setViewValue('P2900005F');
		scope.$digest();

		//test to see if we get a not valid value
		expect(form.cif.$valid).toBe(true);
	});

	it('Inform a valid CIF', function() {
		form.cif.$setViewValue('A45003332');
		scope.$digest();

		//test to see if we get a not valid value
		expect(form.cif.$valid).toBe(true);
	});

	it('Inform a wrong CIF', function() {
		form.cif.$setViewValue('P2900005H');
		scope.$digest();

		//test to see if we get a not valid value
		expect(form.cif.$valid).toBe(false);

		//jquery check ui
		var elemInvalid = $(elem[0]).find('#cif.ng-invalid');
		expect(elemInvalid.length).toEqual(1);
	});
	
});