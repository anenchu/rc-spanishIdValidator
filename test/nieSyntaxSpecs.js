describe('Testing nie syntax services', function() {
	var $injector;
	var nifSyntaxValidationServices;

	beforeEach(function(){
		$injector = angular.injector(['ng','app.services']);
		nifSyntaxValidationServices = $injector.get('nifSyntaxValidationServices');
	});

	it('Inform a syntactically valid NIE', function() {
		var nie = "Y8410598H";
		var isNie = nifSyntaxValidationServices.isNIESyntacticallyCorrect(nie);

		// test to see if we get a not valid value
		expect(isNie).toBe(true);
	});

	it('Inform a syntactically wrong NIE (wrong length numbers)', function() {
		var nie = "Y84198H";
		var isNie = nifSyntaxValidationServices.isNIESyntacticallyCorrect(nie);
    
		// test to see if we get a not valid value
		expect(isNie).toBe(false);
	});

	it('Inform a syntactically wrong NIE (no control letter)', function() {
		var nie = "Y841598";
		var isNie = nifSyntaxValidationServices.isNIESyntacticallyCorrect(nie);
    
		// test to see if we get a not valid value
		expect(isNie).toBe(false);
	});

	it('Inform a syntactically wrong NIE (no letter)', function() {
		var nie = "8410598H";
		var isNie = nifSyntaxValidationServices.isNIESyntacticallyCorrect(nie);
    
		// test to see if we get a not valid value
		expect(isNie).toBe(false);
	});

	it('Inform a syntactically wrong NIE (wrong letter)', function() {
		var nie = "A841598H";
		var isNie = nifSyntaxValidationServices.isNIESyntacticallyCorrect(nie);
    
		// test to see if we get a not valid value
		expect(isNie).toBe(false);
	});

});