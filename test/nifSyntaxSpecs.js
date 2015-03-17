describe('Testing nif syntax services', function() {
	var $injector;
	var syntaxServices;

	beforeEach(function(){
		$injector = angular.injector(['ng','app.services']);
		syntaxServices = $injector.get('syntaxServices');
	});

	it('Inform a syntactically valid NIF', function() {
		var nif = "K1234567L";
    var isNif = syntaxServices.validateNifSyntax(nif);

		// test to see if we get a not valid value
		expect(isNif).toBe(true);
	});

	it('Inform a syntactically wrong NIF (wrong length numbers)', function() {
		var nif = "K123567L";
    var isNif = syntaxServices.validateNifSyntax(nif);

		// test to see if we get a not valid value
		expect(isNif).toBe(false);
	});

	it('Inform a syntactically wrong NIF (no control letter)', function() {
		var nif = "K1234567";
    var isNif = syntaxServices.validateNifSyntax(nif);

		// test to see if we get a not valid value
		expect(isNif).toBe(false);
	});

	it('Inform a syntactically wrong NIF (wrong letter)', function() {
		var nif = "R1234567L";
    var isNif = syntaxServices.validateNifSyntax(nif);

		// test to see if we get a not valid value
		expect(isNif).toBe(false);
	});

});