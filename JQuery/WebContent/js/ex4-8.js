/**
 * 
 */
$(function(){
	$("input:text").css("background", "red");
	$("input:password").css("background", "orange");
	$(":button").css("background", "yellow");
	$("input:checked + label").css("background", "green");
	$("option:selected").css("color", "blue");
	$("textarea:disabled").css("background", "pink");
});