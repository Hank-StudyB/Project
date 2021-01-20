/**
 * 
 */
$(function(){
	$("#m1").children().css("border", "2px solid red");
	$("#m2").children().children("span").css("border", "2px solid orange");
	$("#m3 span").closest("div").css("border", "2px solid yellow");
	$("#m4 > span.m").nextUntil("em").css("border", "2px solid green");
	$("#m5 > span").filter(".m").css("border", "2px solid blue");
	$("#m6 > div").has("span").css("border", "2px solid navy");
});