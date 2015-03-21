services.factory('nifSemanticValidationService', [nifSemanticValidationService]); 

function nifSemanticValidationService() {
	
	function isDNISemanticallyCorrect(dni) {
		return isDNIControlDigitCorrect(dni);
	}

	function isNIESemanticallyCorrect(nie) {
		var firstNIELetter = nie.charAt(0).toUpperCase();
		var firstNIENumber;

		if (firstNIELetter == 'X') {
			firstNIENumber = '0';
		} else if (firstNIELetter == 'Y') {
			firstNIENumber = '1';
		} else if (firstNIELetter == 'Z') {
			firstNIENumber = '2';
		}

		var otherNIEchars = nie.substr(1, nie.length - 1);
		return isDNIControlDigitCorrect(firstNIENumber + otherNIEchars);
	}

	function isDNIControlDigitCorrect(dni) {
		var possibleControlDigits = 'TRWAGMYFPDXBNJZSQVHLCKE';

        var dniNumber = dni.substr(0, dni.length - 1);
        var dniControlDigit = dni.substr(dni.length - 1, 1).toUpperCase();

        if (possibleControlDigits.charAt(dniNumber % 23) == dniControlDigit) {
            return true;
    	} else {
        	return false;
        }
	}

	function isNIFKLMSemanticallyCorrect(nifKLM) {
		return isLegalNIFControlDigitCorrect(nifKLM);
	}

	function isLegalNIFSemanticallyCorrect(legalNIF) {
		return isLegalNIFControlDigitCorrect(legalNIF);
	}

	function isLegalNIFControlDigitCorrect(nif) {
		var sumA = 0;
		for (var i = 2; i < 8; i = i + 2) {
			sumA += parseInt(nif.charAt(i), 10);
		}

		var sumB = 0;
		for (var i = 1; i < 9; i = i + 2) {
			sumB += sumCiphers(nif.charAt(i) * 2);
		}

		var sumC = sumA + sumB;
		var calculatedControlDigit = sumC % 10;
		var calculatedControlDigit = (calculatedControlDigit > 0) ? (10 - calculatedControlDigit) : 0;

		return checkLegalNIFDigit(nif, calculatedControlDigit);
	}

	function checkLegalNIFDigit(nif, calculatedControlDigit) {
		var controlDigit = nif.substr(nif.length - 1, 1);

		if (isNumeric(controlDigit)) {
			return controlDigit == calculatedControlDigit;
		} else {
			var possibleControlLetters = 'JABCDEFGHI';
			controlDigit = controlDigit.toUpperCase();

            return possibleControlLetters.charAt(calculatedControlDigit) == controlDigit;
		}
	}

	function sumCiphers(num) {
		var str = num.toString();
		var sum = 0;

		for (var i = 0; i < str.length; i++) {
		  	sum += parseInt(str.charAt(i), 10);
		}

		return sum;
	}

	// http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
	function isNumeric(input) {
		return (input - 0) == input && ('' + input).trim().length > 0;
	}

	return {
		isDNISemanticallyCorrect: isDNISemanticallyCorrect,
		isNIESemanticallyCorrect: isNIESemanticallyCorrect,
		isNIFKLMSemanticallyCorrect: isNIFKLMSemanticallyCorrect,
		isLegalNIFSemanticallyCorrect: isLegalNIFSemanticallyCorrect
	}

}