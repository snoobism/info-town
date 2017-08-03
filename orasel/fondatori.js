var y0=window.screen.availHeight;
var x0=window.screen.availWidth;

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
	
	var f=document.getElementsByClassName('coloana');
	for (var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.3*x0+'px';
		f[i].style.marginLeft=0.02*x0+'px';
		f[i].style.marginTop=0.1*y0+'px';
	}
	var g=document.getElementsByClassName('imagine');
	for (var i=0;i<=g.length-1;i++)
	{
		g[i].style.marginLeft=0.01*x0+'px';
		g[i].style.position='relative';
		g[i].style.height=0.5*y0+'px';
		g[i].style.width=0.28*x0+'px';
		
	}
	var h=document.getElementsByClassName('desc');
	for (var i=0;i<=h.length-1;i++)
	{	h[i].style.marginLeft=0.01*x0+'px';
		h[i].style.width=0.28*x0+'px';
		h[i].style.height=0.35*y0+'px';
		h[i].style.background='rgba(0,0,0,0.5)';
		h[i].style.boxShadow='0px 0px 5px black';
		h[i].style.textShadow='0px 0px 15px black';
		h[i].style.overflowY='scroll';
		h[i].style.fontFamily='museo';
		h[i].style.color='white';
		h[i].style.textAlign='center';
		h[i].style.fontSize=0.04*y0+'px';
	}
	var j=document.getElementsByClassName('buton');
	for (var i=0;i<=j.length-1;i++)
	{

		j[i].style.fontSize=0.05*y0+'px';
		j[i].style.boxShadow='0px 0px 5px black';
		j[i].style.textShadow='0px 0px 15px black';
		j[i].style.fontFamily='bebasbold';
		j[i].style.color='white';
		j[i].style.textAlign='center';
		j[i].style.cursor='pointer';
	}
	
	$(".resizeText0").resizeText0();
	$(".resizeText1").resizeText1();
	$(".resizeText2").resizeText2();
	
	j[0].onclick=function (){schimba(1)};
	j[1].onclick=function (){schimba(2)};
	j[2].onclick=function (){schimba(3)};
	
	document.getElementById('descfunct').style.width=0.6*x0+'px';
	document.getElementById('descfunct').style.height=0.3*y0+'px';
	document.getElementById('descfunct').style.marginLeft=0.2*x0+'px';
	document.getElementById('descfunct').style.background='rgba(256,256,256,0.5)';
	document.getElementById('descfunct').style.marginTop=0.05*y0+'px';
	document.getElementById('descfunct').style.boxShadow='0px 0px 15px black';
	
	document.getElementById('imagine_cod').style.objectFit='contain';
	document.getElementById('imagine_cod').style.width=0.2*x0+'px';
	document.getElementById('imagine_cod').style.height=0.28*y0+'px';
	document.getElementById('imagine_cod').style.marginTop=0.01*y0+'px';
	document.getElementById('imagine_cod').style.marginLeft=0.03*x0+'px';
	document.getElementById('explicatie').style.height=0.2*y0+'px';
	document.getElementById('explicatie').style.marginTop=0.025*y0+'px';
	document.getElementById('explicatie').style.marginLeft=0.05*x0+'px';
	document.getElementById('explicatie').style.width=0.3*x0+'px';
	
}
var expl=['','Instrucțiunea IF este o structură ce în urma unei condiții execută o secvență de operații, atunci când afirmația este adevărată, iar opțional o altă secventă de operații în caz contrar','Instrucțiunea WHILE este o structură repetitivă ce execută o secvență de operații atâta timp cât condiția inițială este adevărată','Instrucțiunea FOR este o structură repetitivă care cu ajutorul unei variabile de control repetă o secvență de operații de un numar de ori']
function schimba(i){
	
	document.getElementById('imagine_cod').src='imagini/fond'+i+'.png';
	document.getElementById('explicatie').innerHTML=expl[i];
	$(".resizeText3").resizeText3();
}
