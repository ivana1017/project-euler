function genSumOfMultiples(){
	var max = document.getElementById('form-input1').value;
	document.getElementById('input1').innerHTML = max;
	var num = 1;
	var result = 0;

	while(num < max){
		if(num % 3 == 0 || num % 5 == 0){
			result+=num;
		}
		num++;
	}
	document.getElementById('output1').innerHTML = 'Result: ' + result;
}

document.getElementById('compute1').addEventListener('click', genSumOfMultiples);


function evenFibNums(){
	var result = 2;
	var term1 = 1;
	var prevTerm = 2;
	var nextTerm = term1 + prevTerm;
	while(nextTerm < 4000000){
		if(nextTerm % 2 == 0){
			result+=nextTerm;
		}
		var temp = nextTerm;
		nextTerm = nextTerm + prevTerm;
		prevTerm = temp;
	}
	document.getElementById('output2').innerHTML = 'Result: ' + result;
}

document.getElementById('compute2').addEventListener('click', evenFibNums);


function lrgstPrimeFactor(){
	var num = document.getElementById('form-input2').value
	var maxPrime = 2;
	while (maxPrime <= num){
		if(num % maxPrime == 0){
			num /= maxPrime;
		}else{
			maxPrime++;
		}
		console.log(num);
	}
	document.getElementById('output3').innerHTML = 'Result: ' + maxPrime;
}

document.getElementById('compute3').addEventListener('click', lrgstPrimeFactor);

