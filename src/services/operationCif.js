services.factory('operationCif', [function(){
   function calculationUnit(cif){
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

        return unit;		
   	}
    return{
        calculationUnit : calculationUnit
    }
}]);