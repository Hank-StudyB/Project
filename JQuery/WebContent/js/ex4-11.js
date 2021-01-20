/**
 * 
 */
$(function(){
	$("#m1 > div").add("#m1 > p").css("border", "2px solid red");
	$("#m2").children("p").addBack().css("border", "2px solid orange");
	$("#m3").find("span").css("border", "2px solid yellow").end().find("em").css("border", "2px solid green");
	if($("#m4").children().is("p")){
		console.log("p 요소가 존재합니다.");
	}
});