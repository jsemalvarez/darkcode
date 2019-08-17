window.addEventListener("load",function(){
	/*
	$(".txtb input").on("focus",function(){
		$(this).addClass("focus");
	})

	$(".txtb input").on("blur",function(){
		if($(this).val() == "");
		$(this).removeClass("focus");
	})
	*/
	const username = document.getElementById("username");
	const password = document.getElementById("password");

	addOrRemoveFocusClass(username);
	addOrRemoveFocusClass(password);	

})

function addOrRemoveFocusClass(element){

	element.addEventListener("focus",function(){
		element.classList.add("focus");
	});

	element.addEventListener("blur",function() {
		if(element.value == "") element.classList.remove("focus");		
	}, true);

}