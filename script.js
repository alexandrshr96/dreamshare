document.addEventListener("DOMContentLoaded", function() {
	let allElements = document.getElementsByTagName("*");
	for (var i=0; i < allElements.length; i++) {
		allElements[i].addEventListener("click",function() 								{console.log(this.tagName);});
	};
document.addEventListener("click",function() {console.log(this);});
window.addEventListener("click",function() {console.log(this);});
});

let btn = document.querySelector('.btn-color-redWhite');

btn.addEventListener('click',()=>{
    console.log(event);
    event.stopPropagation();
    console.log('tut bil click');
    btn.style.backgroundColor = 'yellow';
});

