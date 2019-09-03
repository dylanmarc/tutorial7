function changeColor(){
	if(document.getElementById('colorChangeBox').style.backgroundColor == 'green'){
		document.getElementById('colorChangeBox').style.backgroundColor = 'blue';
	}else{
		document.getElementById('colorChangeBox').style.backgroundColor = 'green';
	}
}

function createAlert(){
	alert('hovered!');
}

function crossOff(){
	if(document.getElementById('one').style.textDecoration == ''){
		document.getElementById('one').style.textDecoration = 'line-through';
	}else{
		document.getElementById('one').style.textDecoration = '';
	}
}

function printArray(){
  let arrayToPrint = ['Snake', 'Dog' ,'Scorpion', 'Crocodile', 'Hippopotamus'];
	for(i=0; i<arrayToPrint.length; i++){
			console.log(arrayToPrint[i]);
		}
}

let clicks = 0;
function recordClicks(){
	clicks++;
	console.log(clicks);
}
