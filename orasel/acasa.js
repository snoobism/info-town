var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
window.onload = function(){
	
	var d=document.getElementById("lista").children;
	var e=document.getElementsByClassName("textc");
	for(var i=0;i<=e.length-1;i++)
	{	
		e[i].innerHTML=tex[i][x];
	}
	
	for(var i=0;i<=d.length-1;i++)
	{
		d[i].style.fontSize=0.05*y0+"px";
	}
	document.getElementById('andrei').style.opacity=1;
	document.getElementById('andrei').style.height=0.6*y0+'px';
	document.getElementById('andrei').style.width=0.25*x0+'px';
	document.getElementById('bula').style.width=0.3*x0+'px';
	document.getElementById('bula').style.height=0.3*y0+'px';
	document.getElementById('bula').style.left=0.15*x0+'px';
	document.getElementById('bula').style.top=0.25*y0+'px';
}