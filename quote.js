$(document).ready(function(){
	$(".submit-quote").click(function(){
	$.get("https://api.github.com/zen", function(data){
		$(".quote").text(data);
	})
})
});
