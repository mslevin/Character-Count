var boxes = document.getElementsByTagName("textarea");
for (var i = 0; i < boxes.length; i++) {
	boxes[i].onkeyup = function() {
		textCount(this);
	}
}

function textCount(box) {
	var num = box.value.length - box.value.replace(/[^\s]/g, "").length
	var text = document.createTextNode("Character count: " + num)
	if (document.getElementById(box.name)) {
		document.getElementById(box.name).innerHTML = "Character count: " + num
	}
	else {
		var par = box.parentNode
		var p = document.createElement("p")
		p.id = box.name;
		p.appendChild(text)
		box.parentNode.insertBefore(p, box)
	}
}