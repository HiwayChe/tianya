function seeLouzhuFunc() {
	var titleDivs = document.getElementsByClassName("atl-info");
	for (var i = 0; i < titleDivs.length; i++) {
		if (titleDivs[i].innerHTML.indexOf("楼主") == -1) {
			titleDivs[i].parentElement.parentElement.style.display = "none";
		}
	}
};

function showImageFunc() {
	var commentDivs = document.getElementsByClassName("atl-item");
	for (var i = 0; i < commentDivs.length; i++) {
		var images = commentDivs[i].getElementsByTagName("img");
		for (var j = 0; j < images.length; j++) {
			var image = images[j];
			if (image.getAttribute("original")) {
				image.setAttribute("src", image.getAttribute("original"));
			}
		}
	}
};

function expandCommentFunc() {
	var comments = document.getElementsByClassName("ir-list");
	for (var i = 0; i < comments.length; i++) {
		var lis = comments[i].getElementsByTagName("li");
		for (var j = 0; j < lis.length; j++) {
			lis[j].style.display = "";
		}
	}
}

function gotoTianya(){
	window.location.href = "http://bbs.tianya.cn/";
}

function reset(){
	var commentDivs = document.getElementsByClassName("atl-item");
	for(var i=0; i<commentDivs.length; i++){
		commentDivs[i].style.display="";
	}
}

seeLouzhuFunc();
showImageFunc();
expandCommentFunc();