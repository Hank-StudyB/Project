/**
 * 
 */
$(function(){
	$("div").each(function(index, element) {
		console.log(index);
		console.log(element);
		console.log($(this).attr("class"));
	});
});