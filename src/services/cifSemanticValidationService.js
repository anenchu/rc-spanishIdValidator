services.factory('cifSemanticValidationService', [function(){
   function validationSemantic(cif){
		//In valueCif we have the cif number without the first and last characters
        var valueCif=cif.substr(1,cif.length-2);
        var sumPairs=0;

        //In sumPairs we add all digits in the even position of the string
        for(i=1;i<valueCif.length;i=i+2)
        {
            sumPairs=sumPairs+parseInt(valueCif.substr(i,1));
        }

        var sumOdd=0;

        //In sumPairs we add all digits in the odd position of the string
        for(i=0;i<valueCif.length;i=i+2)
        {
            result=parseInt(valueCif.substr(i,1))*2;
            if(String(result).length==1)
            {
                sumOdd=sumOdd+parseInt(result);
            }else{
                sumOdd=sumOdd+parseInt(String(result).substr(0,1))+parseInt(String(result).substr(1,1));
            }
        }

        // Total sum
        sum=sumPairs+sumOdd;

        var unit=String(sum).substr(1,1)
        unit=10-parseInt(unit);   

        var firstChar=cif.substr(0,1).toUpperCase();

            if(firstChar.match(/^[FJKNPQRSUVW]$/))
            {
                //Started by .... compared with the last letter
                if(String.fromCharCode(64+unit).toUpperCase()==cif.substr(cif.length-1,1).toUpperCase())
                    return true;    
            }else if(firstChar.match(/^[ABCDEFGHLM]$/)){
                //We check if the last value match
                if(unit==10)
                    unit=0;
                if(cif.substr(cif.length-1,1)==String(unit))
                    return true;
            }
            return false;		
   	}
    return{
        validationSemantic : validationSemantic
    }
}]);