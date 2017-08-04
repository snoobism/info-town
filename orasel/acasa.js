var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var street = new Audio('audio/street.mp3');
var bgmusic = new Audio('audio/bgmusic.mp3');

$.fn.resizeText0 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0"
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
$.fn.resizeText5 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding-top:2%;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText5.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText5.interval)
            clearTimeout($.resizeText5.interval)

        $.resizeText5.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText5();
	    }, 300);
    });
}

$.resizeText5 = {
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
                $.resizeText5.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};

$.fn.resizeText6 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding-top:2%;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText6.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText6.interval)
            clearTimeout($.resizeText6.interval)

        $.resizeText6.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText6();
	    }, 300);
    });
}

$.resizeText6 = {
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
                $.resizeText6.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText7 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding-top:2%;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText7.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText7.interval)
            clearTimeout($.resizeText7.interval)

        $.resizeText7.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText7();
	    }, 300);
    });
}

$.resizeText7 = {
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
                $.resizeText7.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText8 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:2%;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText8.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText8.interval)
            clearTimeout($.resizeText8.interval)

        $.resizeText8.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText8();
	    }, 300);
    });
}

$.resizeText8 = {
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
                $.resizeText8.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText9 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText9.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText9.interval)
clearTimeout($.resizeText9.interval)
$.resizeText9.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText9();}, 300);});};
$.resizeText9 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText9.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
var bula_nr=1;

function next(){
	if(bula_nr==5)
	{
		document.getElementById('bula').style.opacity=0;
		document.getElementById('atentie').style.opacity=0;
		setTimeout(function(){ 
		document.getElementById('andrei').style.left=-0.25*x0+'px';
		setTimeout(function(){
			document.getElementById('andrei').style.display='none';
			document.getElementById('bula').style.display='none';
			document.getElementById('atentie').style.display='none';
			setTimeout(function(){document.getElementById('infotown').style.opacity=1;
			document.body.style.overflow='auto';
			document.body.style.overflowX='hidden';
			},500);
		},1000);
		},1000);
	}else{
	bula_nr++;
	document.getElementById('bula').style.backgroundImage='url("imagini/bubble'+bula_nr+'.png")';
	}
}

window.onload = function(){
	street.play();
	street.volume=0.3;
	bgmusic.play();
	bgmusic.volume=0.5;
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
	
	document.getElementById('andrei').style.opacity=0;
	document.getElementById('andrei').style.height=0.6*y0+'px';
	document.getElementById('andrei').style.width=0.25*x0+'px';
	document.getElementById('bula').style.opacity=0;
	document.getElementById('bula').style.width=0.3*x0+'px';
	document.getElementById('bula').style.height=0.3*y0+'px';
	document.getElementById('bula').style.left=0.15*x0+'px';
	document.getElementById('bula').style.top=0.25*y0+'px';
	document.getElementById('atentie').style.width=0.6*x0+'px';
	document.getElementById('atentie').style.height=0.1*y0+'px';
	$('.resizeText0').resizeText0();
	setTimeout(function(){
		document.getElementById('andrei').style.opacity=1;
	},1000);
	setTimeout(function(){
		document.getElementById('bula').style.opacity=1;
	},2000);
	setTimeout(function(){
		document.getElementById('atentie').style.opacity=1;
	},2500);
	document.getElementById('infotown').style.width=0.6*y0+'px';
	document.getElementById('infotown').style.height=0.6*y0+'px';
	
	document.getElementById('putem').style.height=0.4*y0+'px';
	document.getElementById('putem').style.top=1.2*x0+'px';
	
	document.getElementById('titluaplic').style.width=0.8*x0+'px';
	document.getElementById('titluaplic').style.height=0.1*y0+'px';
	document.getElementById('titluaplic').style.marginLeft=0.25*x0+'px';

	
	document.getElementById("aplic_elem1").style.width=0.5*x0+'px';
	document.getElementById("aplic_elem1").style.height=0.1*y0+'px';
	document.getElementById("aplic_elem1").style.marginLeft=0.25*x0+'px';
		
	document.getElementById("aplic_elem2").style.width=0.5*x0+'px';
	document.getElementById("aplic_elem2").style.height=0.1*y0+'px';
	document.getElementById("aplic_elem2").style.marginLeft=0.25*x0+'px';
		
	document.getElementById("aplic_elem3").style.width=0.5*x0+'px';
	document.getElementById("aplic_elem3").style.height=0.1*y0+'px';
	document.getElementById("aplic_elem3").style.marginLeft=0.25*x0+'px';
	$(".resizeText5").resizeText5();
	$(".resizeText6").resizeText6();
	$(".resizeText7").resizeText7();
	$(".resizeText8").resizeText8();
	$(window).scroll( function(){
    
       
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        });
});

	document.getElementById('spremuzeu').style.width=x0+'px';
	document.getElementById('spremuzeu').style.height=0.3*y0+'px';
	document.getElementById('spune').style.width=0.6*x0+'px';
	document.getElementById('spune').style.height=0.2*y0+'px';
	document.getElementById('spune').style.marginTop=0.05*y0+'px';
	document.getElementById('spune').style.textAlign='center';
	document.getElementById('spune').style.marginLeft=0.2*x0+'px';
	$(".resizeText9").resizeText9();
	
	document.getElementById('muzeu').style.width=0.2*x0+'px';
	document.getElementById('muzeu').style.height=0.2*x0+'px';
	document.getElementById('muzeu').style.marginLeft=0.4*x0+'px';
	
}


