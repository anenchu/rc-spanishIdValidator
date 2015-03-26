directives.directive('rcCif', [function(){
	return {
		require:"ngModel",
	
	 link: function (scope, elm, attrs, ctrl){
		var validationToExecute = function (viewValue) {
			var currentTypedValue = viewValue;

			if(fullCIFValidation(currentTypedValue)){
				ctrl.$setValidity('cif', true);
			}else{
				ctrl.$setValidity('cif', false);
			}
		};

		/*
        * Tiene que recibir el cif sin espacios ni guiones
        * Esta funcion es llamada
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
        
            //Quitamos el primer caracter y el ultimo digito
            var valueCif=cif.substr(1,cif.length-2);
            var sumPairs=0;

            //Sumamos las cifras pares de la cadena
            for(i=1;i<valueCif.length;i=i+2)
            {
                sumPairs=sumPairs+parseInt(valueCif.substr(i,1));
            }

            var sumOdd=0;

            //Sumamos las cifras impares de la cadena
            for(i=0;i<valueCif.length;i=i+2)
            {
                result=parseInt(valueCif.substr(i,1))*2;
                if(String(result).length==1)
                {
                    // Un solo caracter
                    sumOdd=sumOdd+parseInt(result);
                }else{
                    // Dos caracteres. Los sumamos...
                    sumOdd=sumOdd+parseInt(String(result).substr(0,1))+parseInt(String(result).substr(1,1));
                }
            }

            // Sumamos las dos sumas que hemos realizado
            sum=sumPairs+sumOdd;

            var unit=String(sum).substr(1,1)
            unit=10-parseInt(unit);

            var firstChar=cif.substr(0,1).toUpperCase();

            if(firstChar.match(/^[FJKNPQRSUVW]$/))
            {
                //Empieza por .... Comparamos la ultima letra
                if(String.fromCharCode(64+unit).toUpperCase()==cif.substr(cif.length-1,1).toUpperCase())
                    return true;    
            }else if(firstChar.match(/^[XYZ]$/)){
                //Se valida como un dni
                    var newcif;
                    if(firstChar=="X")
                        newcif=cif.substr(1);
                    else if(firstChar=="Y")
                        newcif="1"+cif.substr(1);
                    else if(firstChar=="Z")
                        newcif="2"+cif.substr(1);
                    return validateDNI(newcif);
            }else if(firstChar.match(/^[ABCDEFGHLM]$/)){
                //Se revisa que el ultimo valor coincida con el calculo
                if(unit==10)
                    unit=0;
                if(cif.substr(cif.length-1,1)==String(unit))
                    return true;
            }else{
                //Se valida como un dni
                return validateDNI(cif);
            }
            return false;
        }

        function validateDNI(dni){
            var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
            var valueDni=dni.substr(0,dni.length-1);
            var letter=dni.substr(dni.length-1,1).toUpperCase();

            if(lockup.charAt(valueDni % 23)==letter) 
                return true;
            return false;
        }

        ctrl.$parsers.unshift(function (viewValue){
        	validationToExecute(viewValue);

        	return viewValue;
        });
	  }
	};
}]);