directives.directive('rcCif', ['cifSemanticValidationService', function(cifSemanticValidationService){
	return {
		require:"ngModel",
	
	 link: function (scope, elm, attrs, ctrl){
		var validationToExecute = function (viewValue) {
			if(fullCIFValidation(viewValue)){
				ctrl.$setValidity('cif', true);
			}else{
				ctrl.$setValidity('cif', false);
			}
		};

		/*
        * Get the cif number without spaces or dashes
        * http://www.lawebdelprogramador.com/codigo/JavaScript/1992-Validar_un_CIF_NIF_y_DNI.html
        */

        function fullCIFValidation(cif){
        	return (validateCIFSintax(cif) && validateCIFSemantic(cif));
        }
        
        function validateCIFSintax(cif){
            var cifPattern = /^[ABCDEFGHJKLMNPQRSUVW][0-9]{7}[0-9A-J]$/;

            return cifPattern.test(cif);
        }

        function validateCIFSemantic(cif)
        {
            return cifSemanticValidationService.validationSemantic(cif);
        }
        
        ctrl.$parsers.unshift(function (viewValue){
        	validationToExecute(viewValue);

        	return viewValue;
        });
	  }
	};
}]);