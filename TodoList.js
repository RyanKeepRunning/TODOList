
$("input").on("keypress", function(event){
	if(event.which === 13){
		var aaa = $(this).val();
		$("ul").append("<li>"+"<span><i class=\"fas fa-trash-alt\"></i></span> "+aaa+"</li>");
	}
});

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	});
});

$("ul").on("click","li",function(){
	$(this).toggleClass("deleted");
});

$(".fa-plus").on("click",function(){
	$("input").fadeToggle(500);
})