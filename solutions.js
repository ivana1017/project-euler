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
	document.getElementById('output1').innerHTML = result;
}
document.getElementById('compute1').addEventListener('click', genSumOfMultiples);

