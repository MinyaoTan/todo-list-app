// Check off specific todos by clicking
$("li").on("click", function() {
	$(this).toggleClass("completed");
})

// Click on X to delete todo
$("span").on("click", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
})