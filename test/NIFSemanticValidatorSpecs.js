describe('Testing NIF semantic validator service', function() {
	var nifSemanticValidatorService;

	beforeEach(function () {
		// Use the function directly but we are not simulating the use of the service by angular
		//nifSemanticValidatorService = new nifSemanticValidatorService();

		// Module containing the services module
		module('app.services');

		inject(function(nifSemanticValidationService) {
			nifSemanticValidatorService = nifSemanticValidationService;
		});
	});

	it('Inform a valid DNI', function() {
		var result = nifSemanticValidatorService.isDNISemanticallyCorrect('15431243Z');
		expect(result).toBe(true);
	});

	it('Inform a wrong DNI', function() {
		var result = nifSemanticValidatorService.isDNISemanticallyCorrect('15431243G');
		expect(result).toBe(false);
	});

	it('Inform a valid NIE', function() {
		var result = nifSemanticValidatorService.isNIESemanticallyCorrect('X5431243T');
		expect(result).toBe(true);
	});

	it('Inform a wrong NIE', function() {
		var result = nifSemanticValidatorService.isNIESemanticallyCorrect('X5431243Z');
		expect(result).toBe(false);
	});

	it('Inform a valid KLM NIF', function() {
		var result = nifSemanticValidatorService.isNIFKLMSemanticallyCorrect('K12345674');
		expect(result).toBe(true);
	});

	it('Inform a wrong KLM NIF', function() {
		var result = nifSemanticValidatorService.isNIFKLMSemanticallyCorrect('K12345676');
		expect(result).toBe(false);
	});
	
	it('Inform a valid legal NIF', function() {
		var result = nifSemanticValidatorService.isLegalNIFSemanticallyCorrect('A12345674');
		expect(result).toBe(true);
	});

	it('Inform a wrong legal NIF', function() {
		var result = nifSemanticValidatorService.isLegalNIFSemanticallyCorrect('A12345676');
		expect(result).toBe(false);
	});

});