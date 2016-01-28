document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("seeLouzhu").addEventListener("click", function(){
		chrome.tabs.executeScript({
			code:'seeLouzhuFunc()'
		});
	});

	document.getElementById("showImage").addEventListener("click", function(){
		chrome.tabs.executeScript({
			code:'showImageFunc()'
		});
	});

	document.getElementById("expandComment").addEventListener("click", function(){
		chrome.tabs.executeScript({
			code:'expandCommentFunc()'
		});
	});
	
	document.getElementById("all").addEventListener("click", function() {
		chrome.tabs.executeScript({
			code:'seeLouzhuFunc();showImageFunc();expandCommentFunc()'
		});
	});
	
	document.getElementById("link").addEventListener("click", function(){
		chrome.tabs.executeScript({
			code:'gotoTianya()'
		});
	});
	
	document.getElementById("reset").addEventListener("click", function(){
		chrome.tabs.executeScript({
			code:'reset()'
		});
	})
	
});

