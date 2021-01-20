/**
 * 
 */
$(function(){
	$("#m1 > span:first-child").css("border", "2px solid red");
	$("#m1 > span:last-child").css("border", "2px solid red");
	$("#m2 > span:first-of-type").css("border", "2px solid orange");
	$("#m2 > span:last-of-type").css("border", "2px solid orange");
	$("#m3 > span:nth-child(1)").css("border", "2px solid yellow");
	$("#m3 > span:nth-last-child(1)").css("border", "2px solid yellow");
	$("#m4 > span:nth-of-type(1)").css("border", "2px solid green");
	$("#m4 > span:nth-last-of-type(1)").css("border", "2px solid green");
	$("#m5 > sapn:only-child").css("border", "2px solid blue");
	$("#m6 > span:only-of-type").css("border", "2px solid navy");
});