services.factory('cifSemanticValidationService', [function(){
   function validationSemantic(cif){
		//In valueCif we have the cif number without the first and last characters
        var valueCif=cif.substr(1,cif.length-2);
        //Sum pairs positions of the valueCif number
        var sumP=sumPairs(valueCif);
        //Sum odds positions of the valueCif number
        var sumO=sumOdd(valueCif);
        //Sum digits of result sumP+sumO 
        var unit=calculateUnit(sumP,sumO);

        var firstChar=cif.substr(0,1).toUpperCase();

            if(firstChar.match(/^[FJKNPQRSUVW]$/))
            {
                return checkControlLetter(unit,cif);
            }
            else if(firstChar.match(/^[ABCDEFGHLM]$/))
            {
                return checkControlNumber(unit,cif);    
            }
            return false;		
   	}

    return{
        validationSemantic : validationSemantic
    }

    function sumPairs(valCif){
        sumPairs = 0;
        for(i=1;i<valCif.length;i=i+2)
        {
            sumPairs=sumPairs+parseInt(valCif.substr(i,1));
        }
        return sumPairs;
    }

    function sumOdd(valCif){
        var sumOdd=0;

        for(i=0;i<valCif.length;i=i+2)
        {
            result=parseInt(valCif.substr(i,1))*2;
            if(String(result).length==1)
            {
                sumOdd=sumOdd+parseInt(result);
            }else{
                sumOdd=sumOdd+parseInt(String(result).substr(0,1))+parseInt(String(result).substr(1,1));
            }
        }
        return sumOdd;
    }

    function calculateUnit(sumPa, sumOd){
        var sum=sumPa+sumOd;

        var unit=String(sum).substr(1,1)
        unit = (10-parseInt(unit));

        return unit;
    }

    function checkControlLetter(unit,cif){
        return (String.fromCharCode(64+unit).toUpperCase()==cif.substr(cif.length-1,1).toUpperCase());
    }

    function checkControlNumber(unit,cif){
        if(unit==10)
           unit=0;
        return (cif.substr(cif.length-1,1)==String(unit));
    }
}]);

