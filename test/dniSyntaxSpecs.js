describe('Testing dni syntax services', function() {
	var $injector = angular.injector(['ng','app.services']);
	var nifSyntaxValidationServices;

	beforeEach(function(){		
		nifSyntaxValidationServices = $injector.get('nifSyntaxValidationServices');
	});

	it('Inform a syntactically valid DNI', function() {
		var dni = "69925107R";
		var isDni = nifSyntaxValidationServices.isDNISyntacticallyCorrect(dni);

		// test to see if we get a not valid value
		expect(isDni).toBe(true);
	});

	it('Inform a syntactically wrong DNI (wrong length numbers)', function() {
		var dni = "699207R";
		var isDni = nifSyntaxValidationServices.isDNISyntacticallyCorrect(dni);
    
		// test to see if we get a not valid value
		expect(isDni).toBe(false);
	});

	it('Inform a syntactically wrong DNI (no control letter)', function() {
		var dni = "69925107";
		var isDni = nifSyntaxValidationServices.isDNISyntacticallyCorrect(dni);
    
		// test to see if we get a not valid value
		expect(isDni).toBe(false);
	});

});