function testMap(showText){
	newBox = document.getElementById(showText);
	newBox.style.visibility="visible";
	alert("wohoo");
}
function hideItem(item){
	document.getElementById(item).style.visibility="hidden";
}
document.getElementById("testMap").addEventListener("click", testMap("testText"));
//hideItem("testText");