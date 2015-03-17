directives.directive('rcDni',['dniSemanticsValidationService','dniSyntaxValidationService',function(dniSemanticsValidationService,dniSyntaxValidationService){
	return{
		require: 'ngModel',					
		link: function (scope, elm, attrs, ctrl){	
			var validationToExecute = function (viewValue){
				var currentTypedValue = viewValue;
				validateDNI(currentTypedValue);
			};

			function validateDNI(dni){
				validateDNISyntax(dni);
				validateDNISemantics(dni);
			}

			function validateDNISemantics(dni){								
				if (dniSemanticsValidationService.validateDNISemantics(currentTypedValue)){			
					ctrl.$setValidity('pattern',true);
				}else{
					ctrl.$setValidity('pattern',false);
				}
			};

			function validateDNISyntax(dni)
            {
            	if (dniSyntaxValidationService.validateDNISyntax(dni)){
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