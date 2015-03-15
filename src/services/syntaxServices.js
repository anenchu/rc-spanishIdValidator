services.factory('syntaxServices', [function() {
  
	function validateNifSyntax(nif) {
		var nifPattern = /^[k-mK-M]\d{7}[a-zA-Z]$/;

		return nifPattern.test(nif);
	}

	function validateNieSyntax(nie) {
		var niePattern = /^[x-zX-Z]\d{7}[a-zA-Z]$/;

		return niePattern.test(nie);
	}

  function validateNifNieSyntax(nifNie) {
    return validateNifSyntax(nifNie) || validateNieSyntax(nifNie);
  }

  return {
    validateNifNieSyntax: validateNifNieSyntax
  }
}]);