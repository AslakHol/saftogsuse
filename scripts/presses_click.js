function testMap(showText){
	newBox = document.getElementById(showText);
	newBox.style.visibility="visible";
}

//Hides all elements in class 'className' except for the item 'showItem'
function hideAllBut(showItem, className){
	textboxes = document.getElementsByClassName(className);
	for(i=0; i < textboxes.length; i++){
		var elmntID = textboxes[i].id;	document.getElementById(elmntID).style.visibility="hidden";
	}
	visibleBox = document.getElementById(showItem);
	visibleBox.style.visibility="visible";
	
}
function hideItem(elmntID){
	document.getElementById(elmntID).style.visibility="hidden";
}