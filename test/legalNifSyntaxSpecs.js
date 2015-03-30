describe('Testing legal nif syntax services', function() {
	var $injector = angular.injector(['ng','app.services']);
	var nifSyntaxValidationServices;

	beforeEach(function(){		
		nifSyntaxValidationServices = $injector.get('nifSyntaxValidationServices');
	});

	it('Inform a syntactically valid legal NIF (control letter is letter)', function() {
		var legalNif = "P6047962C";
		var islegalNif = nifSyntaxValidationServices.isLegalNIFSyntacticallyCorrect(legalNif);

		// test to see if we get a not valid value
		expect(islegalNif).toBe(true);
	});

	it('Inform a syntactically valid legal NIF (control letter is number)', function() {
		var legalNif = "H12455762";
		var islegalNif = nifSyntaxValidationServices.isLegalNIFSyntacticallyCorrect(legalNif);

		// test to see if we get a not valid value
		expect(islegalNif).toBe(true);
	});

	it('Inform a syntactically wrong legal NIF (wrong length numbers)', function() {
		var legalNif = "P604962C";
		var islegalNif = nifSyntaxValidationServices.isLegalNIFSyntacticallyCorrect(legalNif);

		// test to see if we get a not valid value
		expect(islegalNif).toBe(false);
	});

	it('Inform a syntactically wrong legal NIF (no control letter)', function() {
		var legalNif = "P6047962";
		var islegalNif = nifSyntaxValidationServices.isLegalNIFSyntacticallyCorrect(legalNif);

		// test to see if we get a not valid value
		expect(islegalNif).toBe(false);
	});

	it('Inform a syntactically wrong legal NIF (no letter)', function() {
		var legalNif = "6047962C";
		var islegalNif = nifSyntaxValidationServices.isLegalNIFSyntacticallyCorrect(legalNif);
    
		// test to see if we get a not valid value
		expect(islegalNif).toBe(false);
	});

	it('Inform a syntactically wrong legal NIF (wrong letter)', function() {
		var legalNif = "M6047962C";
		var islegalNif = nifSyntaxValidationServices.isLegalNIFSyntacticallyCorrect(legalNif);

		// test to see if we get a not valid value
		expect(islegalNif).toBe(false);
	});

	it('Inform a syntactically wrong legal NIF (wrong control letter)', function() {
		var legalNif = "P6047962R";
		var islegalNif = nifSyntaxValidationServices.isLegalNIFSyntacticallyCorrect(legalNif);

		// test to see if we get a not valid value
		expect(islegalNif).toBe(false);
	});

});