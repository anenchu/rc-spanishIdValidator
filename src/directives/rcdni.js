directives.directive('rcDni',['dniSemanticsValidationService','dniSyntaxValidationService',function(dniSemanticsValidationService,dniSyntaxValidationService){
	return{
		require: 'ngModel',					
		link: function (scope, elm, attrs, ctrl){	
			var validationToExecute = function (viewValue){
				var currentTypedValue = viewValue;
				validateDNI(currentTypedValue);
			};

			function validateDNI(dni){
				if (validateDNISyntax(dni)){
					validateDNISemantics(dni);
				}
			}

			function validateDNISemantics(dni){
				var isValid = dniSemanticsValidationService.validateDNISemantics(dni); 								
				if (isValid){			
					ctrl.$setValidity('pattern',true);
				}else{
					ctrl.$setValidity('pattern',false);
				}
				return isValid;
			};

			function validateDNISyntax(dni)
            {
            	var isValid = dniSyntaxValidationService.validateDNISyntax(dni);
            	if (isValid){
					ctrl.$setValidity('dni',true);
				}else{
					ctrl.$setValidity('dni',false);
				}
            };

            ctrl.$parsers.unshift(function(viewValue){		
            	validationToExecute(viewValue);
            	return viewValue;
            });
		}
	};
}]);