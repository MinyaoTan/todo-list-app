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

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-minus").click(function() {
	$("input[type='text']").slideToggle(300);
	$(this).toggleClass("hide");
	$(".fa-plus").toggleClass("hide");

	$(".fa-plus").fadeIn(0, function() {
		$(".fa-plus").toggleClass("fa-rotate");
	});
});

$(".fa-plus").click(function() {
	$("input[type='text']").slideToggle(300);
	$(this).toggleClass("fa-rotate");

	$(this).fadeOut(300, function() {
		$(this).toggleClass("hide");
		$(".fa-minus").toggleClass("hide");
		$(".fa-minus").css("display", "block");
	});
});

if ($(".fa-plus").hasClass("fa-rotate")) {
	$(".fa-plus").toggleClass("fa-rotate");
}