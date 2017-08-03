var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var om=[],poza=[],bara=[],cont_exp=[],afis=[],cont_but=[],buton1=[],buton2=[],buton3=[];
var poza_om=['imagini/andrei.png'];
window.onload = function()
{
	
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
	document.getElementById('filler').style.padding=0.05*y0+'px';
	for(var i=0;i<=0;i++)
	{
		om[i]=document.createElement('div');
		om[i].style.display='block';
		om[i].style.width='100%';
		om[i].style.height=0.4*y0+'px';
		om[i].style.borderBottom='3px solid #004280';
		om[i].id='om'+i;
		document.body.appendChild(om[i]);
		poza[i]=document.createElement('img');
		poza[i].style.display='inline-block';
		poza[i].style.width=0.3*x0+'px';
		poza[i].style.height=0.38*y0+'px';
		poza[i].style.marginTop=0.01*y0+'px';
		poza[i].style.objectFit='contain';
		poza[i].src=poza_om[i];
		poza[i].id='poza'+i;
		document.getElementById('om'+i).appendChild(poza[i]);
		 bara[i]=document.createElement('img');
		
		bara[i].src='imagini/bara.png';
		bara[i].style.display='inline-block';
		bara[i].style.height=0.39*y0+'px';
		bara[i].style.width=0.1*x0+'px';
		document.getElementById('om'+i).appendChild(bara[i]);
		 cont_exp[i]=document.createElement('div');
		cont_exp[i].style.display='inline-block';
		cont_exp[i].style.height=0.39*y0+'px';
		cont_exp[i].style.width=0.6*x0+'px';
		cont_exp[i].id='contexp'+i;
		cont_exp[i].style.verticalAlign='top';
		document.getElementById('om'+i).appendChild(cont_exp[i]);
		 afis[i]=document.createElement('div');
		afis[i].style.display='block';
		afis[i].style.width=0.59*x0+'px';
		afis[i].style.height=0.3*y0+'px';
		afis[i].id='afis'+i;
		afis[i].style.overflowY='scroll';
		document.getElementById('contexp'+i).appendChild(afis[i]);
		 cont_but[i]=document.createElement('div');
		cont_but[i].style.display='block';
		cont_but[i].style.height=0.09*y0+'px';
		cont_but[i].style.width=0.6*x0+'px';
		cont_but[i].id='contbut'+i;
		document.getElementById('contexp'+i).appendChild(cont_but[i]);
		 buton1[i]=document.createElement('div');
		buton1[i].style.display='inline-block';
		buton1[i].style.width=0.15*x0+'px';
		buton1[i].style.marginLeft=0.03*x0+'px';
		buton1[i].style.height=0.09*y0+'px';
		buton1[i].innerHTML='descriere';
		buton1[i].style.color='white';
		buton1[i].style.fontFamily='bebasbold';
		buton1[i].style.textAlign='center';
		buton1[i].style.textShadow='0px 0px 5px black';
		buton1[i].style.fontSize=0.05*y0+'px';
		buton1[i].style.background='rgba(00,42,80,0.5)';
		buton1[i].id='buton1'+i;
		document.getElementById('contbut'+i).appendChild(buton1[i]);
		 buton2[i]=document.createElement('div');
		buton2[i].style.display='inline-block';
		buton2[i].style.width=0.15*x0+'px';
		buton2[i].style.marginLeft=0.03*x0+'px';
		buton2[i].style.height=0.09*y0+'px';
		buton2[i].style.fontFamily='bebasbold';
		buton2[i].style.textAlign='center';
		buton2[i].innerHTML='info';
		buton2[i].style.color='white';
		buton2[i].style.textShadow='0px 0px 5px black';
		buton2[i].style.background='rgba(00,42,80,0.5)';
		buton2[i].id='buton2'+i;
		buton2[i].style.fontSize=0.05*y0+'px';
		document.getElementById('contbut'+i).appendChild(buton2[i]);
		 buton3[i]=document.createElement('div');
		buton3[i].style.display='inline-block';
		buton3[i].style.width=0.15*x0+'px';
		buton3[i].style.marginLeft=0.03*x0+'px';
		buton3[i].style.height=0.09*y0+'px';
		buton3[i].innerHTML='explicatie';
		buton3[i].style.fontSize=0.05*y0+'px';
		buton3[i].style.fontFamily='bebasbold';
		buton3[i].style.textAlign='center';
		buton3[i].style.color='white';
		buton3[i].style.textShadow='0px 0px 5px black';
		buton3[i].style.background='rgba(00,42,80,0.5)';
		buton3[i].id='buton3'+i;
		document.getElementById('contbut'+i).appendChild(buton3[i]);
	}
	
}