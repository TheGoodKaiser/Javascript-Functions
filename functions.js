	function checkInt (val) {
	if (typeof val !== "number"){
	throw "Invalid Input"
	}
	if (val%1 !== 0) {
		throw "Invalid Input"
	}
}
function checkArraysAndElements (val) {
	if(!Array.isArray(val)) {
		throw "Invalid Input";
	}
	if(val.length === 0) {
		throw "Invalid Input";
	}
	for(var i = 0; i<val.length; i++) {
		if(typeof val[i] !== "number") {
			throw "Invalid Input";
		}
	}
	for(var i = 0; i<val.length; i++) {
		if(val[i]%1 !== 0) {
			throw "Invalid Input";
		}
	}
}

/*
 * PROBLEM `checkData`: (easy)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString) {
	// your code goes here
	if(typeof inputString != "string") {
		throw "Invalid Input";
	} else if(inputString.length === 3) {
		return true;
	} else {
		return false;
	}

}

/*
 * PROBLEM `concatenateArrays`: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function concatenateArrays(a, b) {
	checkArraysAndElements(a);
	checkArraysAndElements(b);	
	var c = a.concat(b);
	return c;
}
/*
 * PROBLEM `fixProperNoun`: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
	// your code goes here
	if (typeof noun !== "string"){
		throw "Invalid Input"
	}
	if (noun.length === 0) {
		throw "Invalid Input"
	}

	return noun.replace(/\w\S*/g,function(a) { //the regExp uses S to match single characters, w to match alphanumerics,
		return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase(); //sets the first character to upper case with charAt and the rest ot lower with a substring
		}
	);
}

/*
 * PROBLEM `sortLetters`: (easy)
 * Write a function called `sortLetters` that returns a string that sorts all 
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {
	// your code goes here
	if (typeof inputString !== "string"){
		throw "Invalid Input"
	}

	var inputString = inputString.split("");
	var inputString = inputString.sort();
	var inputString = inputString.join("");
	return inputString;
}

/*
 * PROBLEM `absVal`: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
	checkInt(integer);
	if(integer<0){
		return integer*-1;
	} else {
		return integer;
	}

	// your code goes here
}

/*
 * PROBLEM `myMin`: (easy)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function myMin(a, b) {

	checkInt(a);
	checkInt(b);

	if(a>b){
		return b;
	} else {
		return a;
	}

}

/*
 * PROBLEM `myMax`: (easy) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */
 function myMax (a) {
 	checkArraysAndElements(a);
 	var max=0;
 	for (var i = 0; i<a.length; i++) {
 		if (a[i]>max) {
 			var max = a[i];
 		}
 	}
 	return max;
 }


/*
 * PROBLEM `getMonth`: (easy)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function getMonth (month) {
	checkInt(month);
	if (month<1 || month>12) {
		throw "Invalid Input"
	}
	if(month === 1) {
 		return "January";
 	} else if (month === 2) {
 		return "February";
 	} else if (month === 3) {
 		return "March"
 	} else if (month === 4) {
 		return "April"
 	} else if (month === 5) {
 		return "May"
 	} else if (month === 6) {
 		return "June"
 	} else if (month === 7) {
 		return "July"
 	} else if (month === 8) {
 		return "August"
 	} else if (month === 9) {
 		return "September"
 	} else if (month === 10) {
 		return "October"
 	} else if (month === 11) {
 		return "November"
 	} else if (month === 12) {
 		return "December"
 	}
 }

/*
 * PROBLEM `randomElement`: (medium)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */
 function randomElement (a) {
 	return a[Math.random()*a.length]
 }

/*
 * PROBLEM `studentPairs`: (medium)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */
 function studentPairs(people) {
 	var i = people.length;
	while(i--) {
		var pairedPeople = [];
		if(i>3) {
			var person1 = people.splice(Math.random()*(people.length),1);
			var person2 = people.splice(Math.random()*(people.length),1);

			pairedPeople.push(person1);
			pairedPeople.push(person2);
			pairs.push(pairedPeople);
			i--;
		} else {
			pairs.push(people.splice(0, 3));
			i--;
			i--;
		}
	}
	for(var q = 0; q<pairs.length; q++) {
		pairs[q] = "Group "+(q+1)+":" + pairs[q];
		console.log(pairs[q]);
	}
}

/*
 * PROBLEM `sumSquares`: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function sumSquares (num) {
 	checkInt(num);
	
	var sum = 0;
	for(var i = 1; i<=num; i++) {
		sum+=i*i;
	}
	return sum;
 }
 sumSquares(2);

/* 
 * PROBLEM `findMaxDiff`: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function findMaxDiff (a) {
 	if(!Array.isArray(a)) {
		throw "Invalid Input";
	}
	for(var i = 0; i<a.length; i++) {
		if(typeof a[i] !== "number") {
			throw "Invalid Input";
		}
	}
	for(var i = 0; i<a.length; i++) {
		if(a[i]%1 !== 0) {
			throw "Invalid Input";
		}
	}
 	var max = 0;
 	if(a.length === 0 || a.length === 1) {
 		return 0;
 	} else {
	 	for (var i = 0; i<(a.length-1); i++) {
	 		if(absVal((a[i]-a[i+1]))>max) {
	 			max = absVal((a[i]-a[i+1]));
	 		}
	 	}
	 	return max;
	 }
 }

/*
 * PROBLEM `insertDashes`: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function insertDashes(a) {
 	if (typeof a !== "string"){
		throw "Invalid Input"
	} 
	var inputString = inputString.split(" ");
	var inputString = inputString.join(" ");
	return inputString;

}

/* 
 * PROBLEM `mySubstring`mySubstring: (medium)
 * Implement a function called `mySubstring` that can output the substring of 
 * the given string within specified bounds.
 * 
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 * 
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function mySubstring(a, val1, val2) {
 	if (typeof a !== "string"){
		throw "Invalid Input"
	}
	if (a.length === 0) {
		throw "Invalid Input"
	}
	if (typeof val1 !== "number") {
		throw "Invalid Input";
	}
	if (val1%1 !== 0) {
		throw "Invalid Input"
	}
	if (typeof val2 !== "number") {
		throw "Invalid Input";
	}
	if (val2%1 !== 0) {
		throw "Invalid Input"
	}
	if (val2 > a.length) {
		throw "Invalid Input";
	}
	var str = a.split("");
	var ret = str.splice(val1, ((val2-val1)+1));
	ret = ret.join("");
	return ret;
 }

/*
 * PROBLEM `splitSwap`: (medium)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 * 
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function splitSwap (a) {
 	if(!Array.isArray(a)) {	
		throw "Invalid Input";
	}
	if(a.length === 0) {
		throw "Invalid Input";
	}
 }

/*
 * PROBLEM `smallMultiples`: (medium)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function smallMultiples (n, k) {
 	if ((typeof n !== "number") || (typeof k !== "number")) {
 		throw "Invalid Input";
 	}
 	if (!k) {
 		throw "Invalid Input";
 	}
 	var mult = k;
 	var count = 0;
 	while (mult<=(n-k)) {
 		count++;
 		mult=k*count;
 	}
 	if (count>0) {
 		count-=1
 	}
 	return count;
 	
 }

/* 
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
 function rot13 (a) {

 }

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
 function derot13 (a) {

 }

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
 function rotn () {

 }

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b 
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function findBoth (a, b) {
 	checkArraysAndElements(a);
 	checkArraysAndElements(b);
 	var c = [];
 	for (var i = 0; i<a.length; i++) {
 		for (var q = 0; q<b.length; q++) {
 			if (a[i] === b[q]) {
 				if ((!(a[i] in c)) && !((b[q] in c))) {
 					c.push(a[i]);
 				}
 			}
 		}
 	}
 	var len = c.length;
 	var counter = 0;
 	for (var x = 0; x<len; x++) {
 		counter = 0;
 		for (var y = 0; y<len; y++) {
 			if (c[x] in c) {
 				counter ++;
 			}
 		}
 		if (counter === 2) {
 			c.splice(x, 1);
 			len--;
 		}
 	}
 	return c;
 }

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and 
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function countBoth (a, b) {
 	checkArraysAndElements(a);
 	checkArraysAndElements(b);
 	var counter = 0;
 	var counter2 = 0;
 	for (var i = 0; i<a.length; i++) {
 		for (var q = 0; q<b.length; q++) {
 			if (a[i] === b[q]) {
 				counter++;
 			}
 		}
 	}
 	for (var x = 0; x<a.length; x++) {
 		if (a[i] in a) {
 			counter2++;
 		}
 	}
 	for (var x = 0; x<b.length; x++) {
 		if (b[i] in b) {
 			counter2++;
 		}
 	}
 	counter2-=a.length;
 	if (counter2>1) {
 		counter2--;
 		counter-=counter2;
 	}
 	return counter;

 }

/* 
 * PROBLEM `isDiagonalMatrix`: (hard)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal 
 * matrix if all entries outside the main diagonal are zero (the diagonal from 
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function isDiagonalMatrix (a) {

 }

/*
 * PROBLEM `isAnagram`: (hard) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal 
 * lengths arr1 and arr2. The function should return a new array of the same 
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function isAnagram(a,b) {
 	if (!Array.isArray(a) || !Array.isArray(b)) {
 		throw "Invalid Input";
 	}
 	var c = [];
 	var track = true;
 	for(var i = 0; i<a.length; i++) {
 		for (var q = 0; q<b.length; q++) {
 			if (a[i].length !== b[q].length) {
 				c.push(false)
 			} else {
 				a[i].split("");
 				b[q].split("");
 				var done = false;
 				var count = 0;
 				track = true;
 				while ((track === true) && !(done)) {
 					for (var x = 0; x<a[i].length; x++) {
 						if (!(a[i][x] in b[q])) {
 							track = false;
 							count=a[i].length;
 						} else {
 							count++;
 						}
 					}
 					if (count>=a[i].length) {
 						done =true;
 					}
 				}
 				a[i].join("");
 				b[q].join("");
 			}
 			c.push(track);
 		}
 	}
 }

/*
 * PROBLEM `validateParentheses`: (hard) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function validateParentheses () {

 }

/* 
 * PROBLEM `flattenArray`: (hard) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */
 function flattenArray () {

 }



