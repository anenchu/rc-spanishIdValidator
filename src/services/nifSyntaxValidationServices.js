services.factory('nifSyntaxValidationServices', [function() {
  
	function isDNISyntacticallyCorrect(dni) {
		var dniPattern = /^\d{8}[a-zA-Z]$/;

		return dniPattern.test(dni);
	}

	function isNIFKLMSyntacticallyCorrect(nifKLM) {
		var nifKLMPattern = /^[k-mK-M]\d{7}[a-zA-Z]$/;

		return nifKLMPattern.test(nifKLM);
	}

	function isLegalNIFSyntacticallyCorrect(legalNif) {
		var legalNifPattern = /^[a-hjnp-su-wA-HJNP-SU-W]\d{7}([0-9]|[a-jA-J])$/;

		return legalNifPattern.test(legalNif);
	}

	function isNIESyntacticallyCorrect(nie) {
		var niePattern = /^[x-zX-Z]\d{7}[a-zA-Z]$/;

		return niePattern.test(nie);
	}

	return {
		isDNISyntacticallyCorrect: isDNISyntacticallyCorrect,
		isNIFKLMSyntacticallyCorrect: isNIFKLMSyntacticallyCorrect,
		isLegalNIFSyntacticallyCorrect: isLegalNIFSyntacticallyCorrect,
		isNIESyntacticallyCorrect: isNIESyntacticallyCorrect
	}
}]);