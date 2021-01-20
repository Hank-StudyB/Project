/**
 * 
 */
$(function(){
	$(".list1 > li[class='list_1']").css("border", "2px solid red");
	$(".list1 > li[class!='list_1']").css("border", "2px solid orange");
	$(".list2 > li[class~='list']").css("background", "yellow");
	$(".list2 > li[class*='list']").css("border", "2px solid green");
	$(".list3 > li[class|='list']").css("border", "2px solid blue");
	$(".list4 > li[class^='list']").css("border", "2px solid navy");
	$(".list4 > li[class$='bg']").css("background", "purple");
});