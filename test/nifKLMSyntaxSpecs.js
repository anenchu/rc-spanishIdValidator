describe('Testing nif klm syntax services', function() {
	var $injector;
	var nifSyntaxValidationServices;

	beforeEach(function(){
		$injector = angular.injector(['ng','app.services']);
		nifSyntaxValidationServices = $injector.get('nifSyntaxValidationServices');
	});

	it('Inform a syntactically valid NIF KLM', function() {
		var nifKLM = "K1234567L";
		var isNifKLM = nifSyntaxValidationServices.isNIFKLMSyntacticallyCorrect(nifKLM);

		// test to see if we get a not valid value
		expect(isNifKLM).toBe(true);
	});

	it('Inform a syntactically wrong NIF KLM (wrong length numbers)', function() {
		var nifKLM = "K123567L";
		var isNifKLM = nifSyntaxValidationServices.isNIFKLMSyntacticallyCorrect(nifKLM);

		// test to see if we get a not valid value
		expect(isNifKLM).toBe(false);
	});

	it('Inform a syntactically wrong NIF KLM (no control letter)', function() {
		var nifKLM = "K1234567";
		var isNifKLM = nifSyntaxValidationServices.isNIFKLMSyntacticallyCorrect(nifKLM);

		// test to see if we get a not valid value
		expect(isNifKLM).toBe(false);
	});

	it('Inform a syntactically wrong NIE (no letter)', function() {
		var nifKLM = "1234567L";
		var isNifKLM = nifSyntaxValidationServices.isNIFKLMSyntacticallyCorrect(nifKLM);
    
		// test to see if we get a not valid value
		expect(isNifKLM).toBe(false);
	});

	it('Inform a syntactically wrong NIF KLM (wrong letter)', function() {
		var nifKLM = "R1234567L";
		var isNifKLM = nifSyntaxValidationServices.isNIFKLMSyntacticallyCorrect(nifKLM);

		// test to see if we get a not valid value
		expect(isNifKLM).toBe(false);
	});

});