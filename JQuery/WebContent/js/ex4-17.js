/**
 * 
 */
$(function(){
	$("#m1 > div").addClass("box");
	$("#m2 > div").addClass(function(index){
		return "circle" + index;
	});
});