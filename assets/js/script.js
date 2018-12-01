// Check off specific todos by clicking
$("ul").on("click", "li",  function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

// Push enter on keyboard to add new item
$("input[type='text']").keypress(function(event) {
	let todoText = $(this).val();

	if (event.which === 13 && todoText !== "") {
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// Click ADD to add new item
$(".add").click(function() {
	let todoText = $("input[type='text']").val();

	if (todoText !== "") {
		$("input[type='text']").val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

// Click minus to hide input box
$(".fa-minus").click(function() {
	$("input[type='text']").slideToggle(300);
	$(this).toggleClass("hide");
	$(".fa-plus").toggleClass("hide");

	$(".fa-plus").fadeIn(0, function() {
		$(".fa-plus").toggleClass("fa-rotate");
	});
});

// Click plus to show input box
$(".fa-plus").click(function() {
	$("input[type='text']").slideToggle(300);
	$(this).toggleClass("fa-rotate");

	$(this).fadeOut(300, function() {
		$(this).toggleClass("hide");
		$(".fa-minus").toggleClass("hide");
		$(".fa-minus").css("display", "block");
	});
});

// Always remove fa-rotate class after minus/plus is clicked
if ($(".fa-plus").hasClass("fa-rotate")) {
	$(".fa-plus").toggleClass("fa-rotate");
}
