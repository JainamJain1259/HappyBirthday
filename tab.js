
function opentab1(){
	var menu1=document.getElementById('menu1');
	var menu2=document.getElementById('menu2');
	var c=document.getElementById('canvas');


	menu1.style.left = "0";
	menu2.style.left = "100vw";
	c.style.position = "absolute";
	menu1.style.height = "360vh";
	menu2.style.height = "360vh";
}
function opentab2(){
	var menu1=document.getElementById('menu1');
	var menu2=document.getElementById('menu2');
	var c=document.getElementById('canvas');

	menu1.style.left = "-100vw";
	menu2.style.left = "0";
	c.style.position = "fixed";
menu2.style.height = "550vh";
	menu1.style.height = "360vh";	
}
