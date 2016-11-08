

document.addEventListener("DOMContentLoaded",function(e){
	const header = document.getElementById("header")
	header.innerHTML = "<div id='navbar'>"
		+	"<ul>"
			+	'<li><img id="logo" src="img/logo_60x34.png" type="image/png"/></li>'
			+	"<li><a href='om_oss.html'>Om oss</a></li>"
			+	"<li><a href='eplesorter.html'>Eplesorter</a></li>"
			+	"<li><a href='eplepresser.html'>Eplepresser</a></li>"
			+	"<li><a href='pressing.html'>Pressing</a></li>"
			+	"<li><a href='cider.html'>Cider</a></li>"
			+	"<li><a href='kontakt.html'>Kontakt oss</a></li>"
			+	'<li id="fb_logo"><a id="fblink" href="https://www.facebook.com/groups/482042088611960/?fref=ts"><img src="img/_f_logo_online/png/FB-f-Logo__grey_29.png" onmouseover=this.src="img/_f_logo_online/png/FB-f-Logo__blue_29.png" onmouseout=this.src=src="img/_f_logo_online/png/FB-f-Logo__grey_29.png" type="image/png"/></a></li>'
		+	"</ul>"
	+	"</div>"
	+"<img src='img/banner.jpg' type='image/jpg' id='banner'>"
	const footer = document.getElementById("footer")
	footer.innerHTML = "<div class=logo><p>Saft og suse</p></div>"
		+"<div class='footer_text'>"
			+"<h3>About us</h3>"
			+"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nibh ac felis facilisis aliquet vitae mattis erat. .</p>"
		+"</div>"
		+"<div class='footer_text'>"
			+"<h3>Kontakt oss</h3>"
			+"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nibh ac felis facilisis aliquet vitae mattis erat.</p>"
		+"</div>"
		+"<div class='footer_text'>"
			+"<h3>Følg oss</h3>"
		+"</div>"
		+"<div class='footer_text'>"
			+"<h3>Site Map</h3>"
			+"<a>Click here for sitemap</a>"
		+"</div>"
})
