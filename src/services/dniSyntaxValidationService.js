(function(){
	services.factory('dniSyntaxValidationService',[dniSyntaxValidationService]);

	function dniSyntaxValidationService(){
		function validateDNISyntax(dni) {
			var c=dni.substr(dni.length-1,1).toUpperCase();
			return (c=='V');
		};

		return {
			validateDNISyntax : validateDNISyntax
		}
	}
})();