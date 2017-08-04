var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var corect = new Audio('audio/corect.mp3');
var gresit = new Audio('audio/gresit.mp3');
var clock = new Audio('audio/clock.mp3');

$.fn.resizeText0 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText0.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText0.interval)
            clearTimeout($.resizeText0.interval)

        $.resizeText0.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText0();
	    }, 300);
    });
}

$.resizeText0 = {
    increaseSize: function (increment, start, newElem, width, height) {
        var fontSize = start;
        
        while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
            fontSize += increment;
            newElem.css("font-size", fontSize + "em");
        }
        
        if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
            fontSize -= increment;
            newElem.css("font-size", fontSize + "em");
            if (increment > 0.1) {
                $.resizeText0.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};

$.fn.resizeText1 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText1.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText1.interval)
            clearTimeout($.resizeText1.interval)

        $.resizeText1.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText1();
	    }, 300);
    });
}
$(document).ready(function () {
    $(".resizeText1").resizeText1();
});
$.resizeText1 = {
    increaseSize: function (increment, start, newElem, width, height) {
        var fontSize = start;
        
        while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
            fontSize += increment;
            newElem.css("font-size", fontSize + "em");
        }
        
        if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
            fontSize -= increment;
            newElem.css("font-size", fontSize + "em");
            if (increment > 0.1) {
                $.resizeText1.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText2 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText2.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText2.interval)
            clearTimeout($.resizeText2.interval)

        $.resizeText2.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText2();
	    }, 300);
    });
}

$.resizeText2 = {
    increaseSize: function (increment, start, newElem, width, height) {
        var fontSize = start;
        
        while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
            fontSize += increment;
            newElem.css("font-size", fontSize + "em");
        }
        
        if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
            fontSize -= increment;
            newElem.css("font-size", fontSize + "em");
            if (increment > 0.1) {
                $.resizeText2.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText3 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText3.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText3.interval)
            clearTimeout($.resizeText3.interval)

        $.resizeText3.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText3();
	    }, 300);
    });
}

$.resizeText3 = {
    increaseSize: function (increment, start, newElem, width, height) {
        var fontSize = start;
        
        while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
            fontSize += increment;
            newElem.css("font-size", fontSize + "em");
        }
        
        if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
            fontSize -= increment;
            newElem.css("font-size", fontSize + "em");
            if (increment > 0.1) {
                $.resizeText3.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText4 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText4.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText4.interval)
            clearTimeout($.resizeText4.interval)

        $.resizeText4.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText4();
	    }, 300);
    });
}

$.resizeText4 = {
    increaseSize: function (increment, start, newElem, width, height) {
        var fontSize = start;
        
        while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
            fontSize += increment;
            newElem.css("font-size", fontSize + "em");
        }
        
        if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
            fontSize -= increment;
            newElem.css("font-size", fontSize + "em");
            if (increment > 0.1) {
                $.resizeText4.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
window.onload = function(){
	
	setTimeout(function(){
		document.getElementById('contmare').style.opacity=1;
		document.getElementById('cont1').style.opacity=1;
		document.getElementById('STARTBUTTON').style.opacity=1;
		document.getElementById('panglica').style.opacity=1;
		
	},500);
	
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
	var f=document.getElementsByClassName("resizeText0");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText1");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText2");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText3");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText4");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	$(".resizeText0").resizeText0();
	$(".resizeText1").resizeText1();
	$(".resizeText2").resizeText2();
	$(".resizeText3").resizeText3();
	$(".resizeText4").resizeText4();
	document.getElementById('contmare').style.width=0.7*x0+"px";
	document.getElementById('contmare').style.fontSize=0.05*y0+'px';
	document.getElementById('contmare').style.marginTop=0.1*y0+"px";
	document.getElementById("cont1").style.width=0.7*x0+"px";
	document.getElementById("cont1").style.height=0.5*y0+"px";
	document.getElementById("c0").style.marginTop=0.03*y0+"px";
	document.getElementById("c0").style.width=0.5*x0+"px";
	document.getElementById("c0").style.height=0.09*y0+"px";
	
	document.getElementById("bara").style.marginTop=0.015*y0+"px";
	document.getElementById("cont2").style.marginTop=0.04*y0+"px";
	document.getElementById("cont3").style.marginTop=0.03*y0+"px";
	document.getElementById("c1").style.left=0.05*x0+"px";
	document.getElementById("c2").style.right=0.05*x0+"px";
	document.getElementById("c3").style.left=0.05*x0+"px";
	document.getElementById("c4").style.right=0.05*x0+"px";
	document.getElementById("cont2").style.height=0.1*y0+"px";
	document.getElementById("cont3").style.height=0.1*y0+"px";
	document.getElementById("STARTBUTTON").style.width=0.15*x0+"px";
	document.getElementById("STARTBUTTON").style.height=0.075*y0+"px";
	document.getElementById("STARTBUTTON").style.lineHeight=0.075*y0+"px";
	document.getElementById("STARTBUTTON").style.marginTop=0.0*y0+"px";
	document.getElementById("panglica").style.marginTop=0.5*y0+"px";
	document.getElementById("panglica").style.height=0.25*y0+"px";
	document.getElementById("panglica").style.width=0.6*x0+"px";
	
	
	var f=document.getElementsByClassName("buton");
	for(var i=0;i<=f.length-1;i++)
	{
		
		f[i].style.verticalAlign="middle";
		f[i].style.width=0.02*x0+"px";
		
	}
	
	document.getElementById('puncte').style.width=0.7*0.3*x0+"px";
	document.getElementById('intrebare').style.width=0.7*0.3*x0+"px";
	document.getElementById('viteza').style.width=0.7*0.3*x0+"px";
	document.getElementById('puncte').style.marginLeft=0.7*0.03*x0+"px";
	document.getElementById('intrebare').style.marginLeft=0.7*0.03*x0+"px";
	document.getElementById('viteza').style.marginLeft=0.7*0.03*x0+"px"
	
	
}
function incepe()
{	schimbaSTART();
	document.getElementById('STARTBUTTON').style.pointerEvents='none';
	function schimbaSTART()
	{
		
		setTimeout(STARTtext2,500);
		setTimeout(STARTtext3,1500);
		setTimeout(STARTtext4,2500);
		setTimeout(STARTtext5,3500);
		setTimeout(test,4000);
	}
	
	
	function STARTtext1(){
		document.getElementById("STARTBUTTON").innerHTML="START";
	}
	function STARTtext2(){
		document.getElementById("STARTBUTTON").innerHTML="3";
	}
	function STARTtext3(){
		document.getElementById("STARTBUTTON").innerHTML="2";
	}
	function STARTtext4(){
		document.getElementById("STARTBUTTON").innerHTML="1";
	}
	function STARTtext5(){
		document.getElementById("STARTBUTTON").innerHTML="START";
	}	
	
}


var lung=0;
var t,ok;
var b;
function bara(){
	var elem=document.getElementById("progres");
	lung=lung+speed;
	elem.style.width=lung+"%";
	cronometru();
	if(elem.style.width==100+"%")
	{
		stopbara();
		ok=1;
		
	}
	
}
function cronometru(){
	 t=setTimeout(bara,10);
	
	
}

function stopbara(){
	 clearTimeout(t);
	 var elem=document.getElementById("progres");
	 elem.style.width=0+"%";
	 lung=0;
	 ok=1;
	for(var j=1;j<=4;j++)
	{
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/stripecorect.png) repeat";
				
			}
		}
	}
}
function corectTimeout11(){
	document.getElementById("c1").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(corectTimeout2,1000)
}
function corectTimeout12(){
	document.getElementById("c1").style.background="#222 url(imagini/stripecorect.png) repeat";
	
}
function gresitTimeout11(){
	document.getElementById("c1").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(gresitTimeout12,1000)
}
function gresitTimeout12(){
	document.getElementById("c1").style.background="#222 url(imagini/stripeincorect.png) repeat";
}

function corectTimeout21(){
	document.getElementById("c2").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(corectTimeout22,1000)
}
function corectTimeout22(){
	document.getElementById("c2").style.background="#222 url(imagini/stripecorect.png) repeat";
	
}
function gresitTimeout21(){
	document.getElementById("c2").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(gresitTimeout22,1000)
}
function gresitTimeout22(){
	document.getElementById("c2").style.background="#222 url(imagini/stripeincorect.png) repeat";
}

function corectTimeout31(){
	document.getElementById("c3").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(corectTimeout32,1000)
}
function corectTimeout32(){
	document.getElementById("c3").style.background="#222 url(imagini/stripecorect.png) repeat";
	
}
function gresitTimeout31(){
	document.getElementById("c3").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(gresitTimeout32,1000)
}
function gresitTimeout32(){
	document.getElementById("c3").style.background="#222 url(imagini/stripeincorect.png) repeat";
}
function corectTimeout41(){
	document.getElementById("c4").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(corectTimeout42,1000)
}
function corectTimeout42(){
	document.getElementById("c4").style.background="#222 url(imagini/stripecorect.png) repeat";
	
}
function gresitTimeout41(){
	document.getElementById("c4").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(gresitTimeout42,1000)
}
function gresitTimeout42(){
	document.getElementById("c4").style.background="#222 url(imagini/stripeincorect.png) repeat";
}
var x0,x1,x2,x3,x4,x5,raspunsuri;



var a=[
		["Ce instrucțiune face afișarea textului sau a unei variabile?","cin","cout","for","while",'cout',0],
		['Cum se poate afla CMMDC?','scădere repetată','adunare și înmulțire','prin derivare','prin regula de 3 simpla','scădere repetată',1],
		['De ce este nevoie pentru a interschimba două valori','o funcție repetitivă','o variabilă intermediară','o structură de tip IF','o variabilă de control','o variabilă intermediară',2],
		['Prin ce metodă se verifică dacă un număr este prim?','prin scăderi repetate','printr-o variabilă secundară','prin împărțirea la toate numerele cuprinse între 1 și el însuși','prin înmulțirea la toate numerele cuprinse între 1 și el însuși ','prin împărțirea la toate numerele cuprinse între 1 și el însuși',3],
		['Ce înseamnă că un număr este palindrom?','se împarte doar la 1 și el însuși','este format din maxim 3 cifre','se citește la fel din ambele capete','nu se citește la fel din ambele capete','se citește la fel din ambele capete',4],
		['La ce este folosită funcția cout?','introducerea unor valori','trimiterea într-un fișier extern a unor date','afișarea textului sau a variabilelor','preluarea informatiilor dintr-o baza de date','afișarea textului sau a variabilelor',5],
		['Ce se întâmplă dacă în while condiția este mereu adevărată','se iese din while','se repetă la infinit','se stinge calculatorul','toate cele precizate','se repetă la infinit',6],
		['Ce fel de structură este for','repetitivă','de control','condițională','de afișare','repetitivă',7],
		['Prin ce instrucțiune se introduc valori în variabile de la tastatură?',"cin","cout","for","while",'cin',8],
		['Folosirea cout-ului într-o structură repetitivă duce la ...?','o eroare de compilare','afișarea cout-ului doar prima dată','afișarea cout-ului la fiecare repetiție','afișarea cout-ului doar la ultima repetiție','afișarea cout-ului la fiecare repetiție',9]
		
		
		
		
		
		
	];
	var vit=2;
function viteza(){
	if(vit==3)
	{
		vit=1;
		document.getElementById("b3").src='imagini/buttonoff.png';
		document.getElementById("b2").src='imagini/buttonoff.png';
		document.getElementById("b3s").src='imagini/buttonoff.png';
		document.getElementById("b2s").src='imagini/buttonoff.png';
		speed=0.08;
	}else if(vit==2){
		vit=vit+1;
		document.getElementById("b3").src='imagini/buttonon.png';
		document.getElementById("b3s").src='imagini/buttonon.png';
		speed=0.2;
	}else if(vit==1){
		vit=vit+1;
		document.getElementById("b2").src='imagini/buttonon.png';
		document.getElementById("b2s").src='imagini/buttonon.png';
		speed=0.125;
	}
	
	
	
	
}
var speed=0.125;
function test(){
	
	document.getElementById("c1").style.pointerEvents = "auto";
	document.getElementById("c2").style.pointerEvents = "auto";
	document.getElementById("c3").style.pointerEvents = "auto";
	document.getElementById("c4").style.pointerEvents = "auto";
	
	
	
	raspunsuri=0;
	var t,i=0;
	function shuffle(a) {
    var k, aux, l;
    for (l = a.length; l; l--) {
        k = Math.floor(Math.random() * l);
        aux = a[l - 1];
        a[l - 1] = a[k];
        a[k] = aux;
    }
}
	shuffle(a);
	raspunsuri=0;
	
	verificaNrIntrebari(i);
	
	function verificaNrIntrebari(i)
	{
	document.getElementById("puncte").innerHTML="PUNCTE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+raspunsuri+"/10";
	document.getElementById("intrebare").innerHTML="intrebarea &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(i+1);
	
		if(i==10)
				{	document.getElementById("c0").innerHTML="?";
					document.getElementById("c1").innerHTML="?";
					document.getElementById("c2").innerHTML="?";
					document.getElementById("c3").innerHTML="?";
					document.getElementById("c4").innerHTML="?";
					document.getElementById("STARTBUTTON").innerHTML="INCEPE TESTUL";
					document.getElementById("intrebare").innerHTML="intrebare";
					document.getElementById('STARTBUTTON').style.pointerEvents='auto';
					document.getElementById("c1").style.pointerEvents = "none";
					document.getElementById("c2").style.pointerEvents = "none";
					document.getElementById("c3").style.pointerEvents = "none";
					document.getElementById("c4").style.pointerEvents = "none";
					
				}
		if(i<=9)
		{	
			clock.play();
			document.getElementById("c1").style.pointerEvents = "auto";
			document.getElementById("c2").style.pointerEvents = "auto";
			document.getElementById("c3").style.pointerEvents = "auto";
			document.getElementById("c4").style.pointerEvents = "auto";
			
			ok=0;
			x0=a[i][0];
			x1=a[i][1];
			x2=a[i][2];
			x3=a[i][3];
			x4=a[i][4];
			x5=a[i][5];
			for(var j=1;j<=4;j++)
				{	
					if(a[i][j]==x5)
					{	
						b=j;
					}
				}
			document.getElementById("c0").innerHTML=x0;
			document.getElementById("c1").innerHTML=x1;
			document.getElementById("c2").innerHTML=x2;
			document.getElementById("c3").innerHTML=x3;
			document.getElementById("c4").innerHTML=x4;
			$(".resizeText0").resizeText0();
			$(".resizeText1").resizeText1();
			$(".resizeText2").resizeText2();
			$(".resizeText3").resizeText3();
			$(".resizeText4").resizeText4();
			bara();
			wait();
		}
	}
	function wait(){
		if (ok==0){
	setTimeout(wait, 100);
		} else 
		{	clock.pause();
			clock.currentTime = 0;
			i=i+1;
			setTimeout(function(){verificaNrIntrebari(i);
			document.getElementById("c1").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";
			document.getElementById("c2").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";
			document.getElementById("c3").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";
			document.getElementById("c4").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";},3500);
			
		}
	}
	
	

}
function apasat1(){
	document.getElementById("c1").style.pointerEvents = "none";
	document.getElementById("c2").style.pointerEvents = "none";
	document.getElementById("c3").style.pointerEvents = "none";
	document.getElementById("c4").style.pointerEvents = "none";
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c1");
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
	if(x1===x5)
	{	corect.play();
		corect.volume=0.2;
		cont.style.background="#222 url(imagini/stripecorect.png) repeat";
		setTimeout(corectTimeout11,250);
		setTimeout(corectTimeout12,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/stripeincorect.png) repeat";
		setTimeout(gresitTimeout11,250);
		setTimeout(gresitTimeout12,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/stripecorect.png) repeat";
				
				
			}
		}
	}
		
}

function apasat2(){
	document.getElementById("c1").style.pointerEvents = "none";
	document.getElementById("c2").style.pointerEvents = "none";
	document.getElementById("c3").style.pointerEvents = "none";
	document.getElementById("c4").style.pointerEvents = "none";
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c2");
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
	if(x2===x5)
	{	corect.play();
		corect.volume=0.2;
		cont.style.background="#222 url(imagini/stripecorect.png) repeat";
		setTimeout(corectTimeout21,250);
		setTimeout(corectTimeout22,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/stripeincorect.png) repeat";
		setTimeout(gresitTimeout21,250);
		setTimeout(gresitTimeout22,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/stripecorect.png) repeat";
				
				
			}
		}
	}
		
}

function apasat3(){
	document.getElementById("c1").style.pointerEvents = "none";
	document.getElementById("c2").style.pointerEvents = "none";
	document.getElementById("c3").style.pointerEvents = "none";
	document.getElementById("c4").style.pointerEvents = "none";
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c3");
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
	if(x3===x5)
	{	corect.play();
		corect.volume=0.2;
		cont.style.background="#222 url(imagini/stripecorect.png) repeat";
		setTimeout(corectTimeout31,250);
		setTimeout(corectTimeout32,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/stripeincorect.png) repeat";
		setTimeout(gresitTimeout31,250);
		setTimeout(gresitTimeout32,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/stripecorect.png) repeat";
				
				
			}
		}
	}
		
}

function apasat4(){
	document.getElementById("c1").style.pointerEvents = "none";
	document.getElementById("c2").style.pointerEvents = "none";
	document.getElementById("c3").style.pointerEvents = "none";
	document.getElementById("c4").style.pointerEvents = "none";
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c4");
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
	if(x4===x5)
	{	corect.volume=0.2;
		corect.play();
		cont.style.background="#222 url(imagini/stripecorect.png) repeat";
		setTimeout(corectTimeout41,250);
		setTimeout(corectTimeout42,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/stripeincorect.png) repeat";
		setTimeout(gresitTimeout41,250);
		setTimeout(gresitTimeout42,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/stripecorect.png) repeat";
				
				
			}
		}
	}
		
}



