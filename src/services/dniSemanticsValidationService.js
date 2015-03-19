(function(){
	services.factory('dniSemanticsValidationService',[dniSemanticsValidationService]);

	function dniSemanticsValidationService(){
		function validateDNISemantics(dni) {
			var c=dni.substr(0,1).toUpperCase();
			return (c=='2');
		};

		return {
			validateDNISemantics : validateDNISemantics
		}
	}
})();