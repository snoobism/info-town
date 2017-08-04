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







var om=[],poza=[],bara=[],cont_exp=[],afis=[],cont_but=[],buton1=[],buton2=[],buton3=[];
var poza_om=['imagini/andrei.png','imagini/mihai.png',"imagini/matei.png",'imagini/dan.png','imagini/dimitri.png','imagini/ion.png'];
var descriere=[
[],
['<p>Andrei <span class="red">"Cout"</span> Vorbărescu este un membru activ al comunității ce nu uită niciodată să-și <span class="hl">afișeze</span> părerile. De fiecare dată când are loc o dezbatere în oraș el are mereu <span class="hl">ultimul cuvânt</span></p>','<p>Mihai <span class="red">"Cin"</span> Atribescu este o persoană ce are calități de lider deoarece este în stare să <span  class="hl">atribuie</span> activități diferitelor persoane din oraș.</p>','<p>Matei <span class="red">"Interschimbatul"</span> Sucilă este un cetățean ce în ultima vreme și-a ajutat mătușa să care bagaje de greutăți diferite în două plase. Una dintre plase incepuse să se rupă, însă el le-a <span class="hl">schimbat</span> între ele.</p>',"<p>Dan <span class='red'>CMMDC</span> Tâmplaru este un om practic și ajută diverșii vecini la lucrările de tâmplărie. Îi place <span class='hl'>să scadă</span> mărimile scândurilor până când vede dacă au sau nu ceva în <span class='hl'>comun</span></p>","<p>Dimitri <span class='red'>'Prim'</span> este doctorul orașului de câțiva ani. Acesta este specialist în boli contagioase și dacă găsește cel puțin <span class='hl'> un semn rău </span> atunci te trimite afară și spre farmacie</p>",'<p>Ion<span class=red>"Palindrom"</span> este un antreprenor ce și-a deschis o afacere în INFO TOWN. Este obsedat de <span class="hl">simetrie</span> și îi place ca lucrurile să fie <span class="hl"> luate de la capăt</span> în revizie pentru orice eventualitate</p>'],
["<p><span class='red'>cout</span><span class='green'><<</span><span class='hl'>'Salut, eu sunt Andrei!'</span>;</p>","<span class='red'>cin</span><span class='green'>>></span>x;","<p>sol<span class='hl'>=</span>plasa_rupta;</p><p>plasa_rupta<span class='hl'>=</span>plasa_buna;</p><p>plasă_buna<span class='hl'>=</span>sol;</p>",'<p><span class="red">while</span>( a!=b ){</p><p><span class="red">if</span> (a>b)</p><p>a=a-b;</p><p><span class="red">else</p><p>b=b-a;</p><p>}</p>',"<p><span class='hl'>int</span> n,c<span class='hl'>=</span>0;</p><p><span class='red'>cin</span>>>n;</p><p><span color='red'>for</span><span class='hl'>(var i=2;i<=n;i++)</span>{</p><p><span class='red'>if</span><span class='hl'>(n%i==0)</p><p>c++;}</p><p><span class='red'>if</span><span class='hl'>(c==0)</span><span class='red'>cout</span><<<span class='hl'>'Este prim'</span>;</p>","<p><span class='hl'>int</span> n,copie,invers=0;</p><p><span class='red'>cin</span><span class='green'>>></span>n;</p><p>copie=n;</p><span class='red'>while</span> <span class='hl'>(n!=0)</span>{</p><p>invers=invers*10+n%10;</p><p>n=n/10</p><p>}</p><p><span class='red'>if</span><span class='hl'> (invers==copie)</span></p><p><span class='red'>cout</span><span class='green'><<</span><span class='hl'>'Numărul e palindrom'</span></p>"],
["<p><span class='red'>Cout</span> este o instrucțiune ce permite <span class='hl'>afișarea</span> textului sau a unei variabile la alegere.</p>","<p><span class='red'>Cin</span> este o instrucțiune ce permite <span class='hl'>introducerea</span> unei valori într-o variabilă.</p>","<span class='red'>Interschimbarea</span> este o metodă prin care putem <span class='hl'>schimba valorile</span> a două variabile prin <span class='hl'>introducerea unei variabile intermediare</span> în care putem depozita una dintre valori</p>"
,"<p><span class='red'>Calcularea celui mai mare divizor comun</span> se poate realiza prin <span class='hl'>scăderea repetată</span> a numerelor pe care dorim să le aflăm până când acestea <span class='hl'>devin egale</span>, valoare pe care o are și  cel mai mare divizor comun</p>","<p>Pentru <span class='red'>a verifica dacă un număr este prim</span> trebuie să vedem dacă <span class='hl'>împărțirea</span> lui cu un număr mai mic ca el și mai mare ca 1 dă 0</p>","<p>Pentru a determina dacă <span class='red'>un număr este palindrom</span> trebuie mai întâi să creăm o <span class='hl'>copie</span> a numărului original, după care determinăm <span class='hl'>inversul</span> lui. Dacă inversul este <span class='hl'> același </span> cu numărul, atunci e palindrom."]
];

var ombg=['url(imagini/loc1bg.jpg)','url(imagini/loc2bg.jpg)','url(imagini/loc3bg.jpg)','url(imagini/loc4bg.jpg)','url(imagini/loc5bg.jpg)','url(imagini/log5bg.jpg)'];


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
	for(var i=0;i<=5;i++)
	{
		om[i]=document.createElement('div');
		om[i].className='bg';
		om[i].style.backgroundImage=ombg[i];
		om[i].style.padding='2%';
		om[i].style.marginTop='1%';
		om[i].style.display='block';
		om[i].style.width='100%';
		om[i].style.height=0.4*y0+'px';
		om[i].style.borderBottom='3px solid #004280';
		om[i].style.opacity=0;
		om[i].style.transition='0.5s all';
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
		bara[i].style.width=0.07*x0+'px';
		document.getElementById('om'+i).appendChild(bara[i]);
		 cont_exp[i]=document.createElement('div');
		cont_exp[i].style.display='inline-block';
		cont_exp[i].style.height=0.39*y0+'px';
		cont_exp[i].style.width=0.58*x0+'px';
		cont_exp[i].id='contexp'+i;
		cont_exp[i].style.verticalAlign='top';
		document.getElementById('om'+i).appendChild(cont_exp[i]);
		 afis[i]=document.createElement('div');
		afis[i].style.display='block';
		afis[i].style.width=0.59*x0+'px';
		afis[i].style.height=0.28*y0+'px';
		afis[i].id='afis'+i;
		afis[i].style.overflowY='scroll';
		afis[i].style.background='rgba(0,0,0,0.7)';
		afis[i].className='resizeText'+i;
		afis[i].style.textAlign='center';
		afis[i].style.fontFamily='museo';
		afis[i].style.fontSize=0.06*y0+'px';
		afis[i].style.color='white';
		afis[i].style.textShadow='0px 0px 5px black';
		afis[i].style.boxShadow='0px 0px 15px black';
		document.getElementById('contexp'+i).appendChild(afis[i]);
		 cont_but[i]=document.createElement('div');
		cont_but[i].style.display='block';
		cont_but[i].style.marginTop=0.01*y0+'px';
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
		buton1[i].style.boxShadow='0px 0px 15px rgba(00,42,80,1)';
		buton1[i].style.fontSize=0.05*y0+'px';
		buton1[i].style.background='rgba(00,42,80,0.8)';
		buton1[i].style.cursor='pointer';
		buton1[i].id='buton1'+i;
		document.getElementById('contbut'+i).appendChild(buton1[i]);
		 buton2[i]=document.createElement('div');
		buton2[i].style.display='inline-block';
		buton2[i].style.boxShadow='0px 0px 15px rgba(00,42,80,1)';
		buton2[i].style.width=0.15*x0+'px';
		buton2[i].style.marginLeft=0.03*x0+'px';
		buton2[i].style.height=0.09*y0+'px';
		buton2[i].style.fontFamily='bebasbold';
		buton2[i].style.textAlign='center';
		buton2[i].innerHTML='info';
		buton2[i].style.color='white';
		buton2[i].style.textShadow='0px 0px 5px black';
		buton2[i].style.background='rgba(00,42,80,0.8)';
		buton2[i].id='buton2'+i;
		buton2[i].style.fontSize=0.05*y0+'px';
		buton2[i].style.cursor='pointer';
		document.getElementById('contbut'+i).appendChild(buton2[i]);
		 buton3[i]=document.createElement('div');
		buton3[i].style.display='inline-block';
		buton3[i].style.width=0.15*x0+'px';
		buton3[i].style.boxShadow='0px 0px 15px rgba(00,42,80,1)';
		buton3[i].style.cursor='pointer';
		buton3[i].style.marginLeft=0.03*x0+'px';
		buton3[i].style.height=0.09*y0+'px';
		buton3[i].innerHTML='explicatie';
		buton3[i].style.fontSize=0.05*y0+'px';
		buton3[i].style.fontFamily='bebasbold';
		buton3[i].style.textAlign='center';
		buton3[i].style.color='white';
		buton3[i].style.textShadow='0px 0px 5px black';
		buton3[i].style.background='rgba(00,42,80,0.8)';
		buton3[i].id='buton3'+i;
		document.getElementById('contbut'+i).appendChild(buton3[i]);
	}
	document.getElementById('buton10').onclick=function(){schimba(1,0)};
	document.getElementById('buton20').onclick=function(){schimba(2,0)};
	document.getElementById('buton30').onclick=function(){schimba(3,0)};
	document.getElementById('buton11').onclick=function(){schimba(1,1)};
	document.getElementById('buton21').onclick=function(){schimba(2,1)};
	document.getElementById('buton31').onclick=function(){schimba(3,1)};
	document.getElementById('buton12').onclick=function(){schimba(1,2)};
	document.getElementById('buton22').onclick=function(){schimba(2,2)};
	document.getElementById('buton32').onclick=function(){schimba(3,2)};
		document.getElementById('buton13').onclick=function(){schimba(1,3)};
	document.getElementById('buton23').onclick=function(){schimba(2,3)};
	document.getElementById('buton33').onclick=function(){schimba(3,3)};
	document.getElementById('buton14').onclick=function(){schimba(1,4)};
	document.getElementById('buton24').onclick=function(){schimba(2,4)};
	document.getElementById('buton34').onclick=function(){schimba(3,4)};
	document.getElementById('buton15').onclick=function(){schimba(1,5)};
	document.getElementById('buton25').onclick=function(){schimba(2,5)};
	document.getElementById('buton35').onclick=function(){schimba(3,5)};var k=0;
	setInterval(function(){
		
		document.getElementById('om'+k).style.opacity=1;;
		k++;
	},500);
}
function schimba(i,j){
		document.getElementById('buton'+1+''+j).style.background='rgba(00,42,80,0.8)';
		document.getElementById('buton'+2+''+j).style.background='rgba(00,42,80,0.8)';
		document.getElementById('buton'+3+''+j).style.background='rgba(00,42,80,0.8)';
		document.getElementById('buton'+i+''+j).style.background='rgba(00,42,80,1)';
		document.getElementById('afis'+j).innerHTML=descriere[i][j];
	
	}