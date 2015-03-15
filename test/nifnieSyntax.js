describe('Testing nifnie syntax services', function() {

	it('Inform a syntactically valid NIF', function() {
		var nif = "K1234567L";
    var isNif = syntaxServices.validateNifNieSyntax(nif);

		// test to see if we get a not valid value
		expect(isNif).toBe(true);
	});

	it('Inform a syntactically wrong NIF (wrong length numbers)', function() {
		var nif = "K123567L";
    var isNif = syntaxServices.validateNifNieSyntax(nif);

		// test to see if we get a not valid value
		expect(isNif).toBe(true);
	});

	it('Inform a syntactically wrong NIF (no control letter)', function() {
		var nif = "K1234567";
    var isNif = syntaxServices.validateNifNieSyntax(nif);

		// test to see if we get a not valid value
		expect(isNif).toBe(true);
	});

	it('Inform a syntactically wrong NIF (wrong letter)', function() {
		var nif = "R1234567L";
    var isNif = syntaxServices.validateNifNieSyntax(nif);

		// test to see if we get a not valid value
		expect(isNif).toBe(true);
	});

	it('Inform a syntactically valid NIE', function() {
		var nie = "Y8410598H";
    var isNie = syntaxServices.validateNifNieSyntax(nie);

		// test to see if we get a not valid value
		expect(isNie).toBe(true);
	});

	it('Inform a syntactically wrong NIE (wrong length numbers)', function() {
		var nie = "Y84198H";
		var isNie = syntaxServices.validateNifNieSyntax(nie);
    
		// test to see if we get a not valid value
		expect(isNie).toBe(false);
	});

	it('Inform a syntactically wrong NIE (no control letter)', function() {
		var nie = "Y841598";
		var isNie = syntaxServices.validateNifNieSyntax(nie);
    
		// test to see if we get a not valid value
		expect(isNie).toBe(false);
	});

	it('Inform a syntactically wrong NIE (wrong letter)', function() {
		var nie = "A841598H";
		var isNie = syntaxServices.validateNifNieSyntax(nie);
    
		// test to see if we get a not valid value
		expect(isNie).toBe(false);
	});

});