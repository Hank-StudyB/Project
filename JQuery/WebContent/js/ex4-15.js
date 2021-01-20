/**
 * 
 */
$(function(){
	console.log($("#m1").text());
	$("#m1").text("responsive web");
	$("#m2 > div").text(function(index, text){
		return "div 요소의 텍스트는" + text + ", index는" + index;
	});
});