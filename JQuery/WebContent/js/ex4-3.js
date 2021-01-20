/**
 * 
 */
$(function(){
	$("p").css("border", "4px solid red");
	$("#gnb").css("border", "4px solid orange");
	$(".logo").css("border", "4px solid yellow");
	$("#gnb > ul > li").css("border", "4px solid green");
	$("#gnb ul").css("border", "4px solid blue");
	$("#visual + #content").css("border", "4px solid navy");
	$("#visual ~ #footer").css("border", "4px solid purple");
	$("div.util").css("border", "4px solid pink");
	$(".left, .right, #banner").css("border", "4px solid gray");
});