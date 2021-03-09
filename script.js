'use strict';
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
	let ul = document.querySelector('#myUl');
	let myInput = document.querySelector('#myInput').value;
	if(myInput === ""){ 
		alert("Введите дело")
	}else{
		let li = document.createElement('li');
		ul.append(li)
		li.innerHTML= myInput

		let span = document.createElement('SPAN');
		span.className = 'close';
		li.append(span);
		span.innerHTML = '\u00D7';
	}
	document.querySelector('#myInput').value = '';


	let elems = document.querySelectorAll('li span');
	for(let elem of elems ){
		elem.addEventListener('click', function(){
		elem.parentElement.remove(this);
	});
	}

	let Checked = document.querySelectorAll('li');
	for(let Check of Checked ){
		Check.addEventListener('click', function(){
		Check.style.textDecoration = 'line-through';
		Check.style.backgroundColor = '#228B22';
		Check.style.color = 'white';
	});
	} 

	
})


