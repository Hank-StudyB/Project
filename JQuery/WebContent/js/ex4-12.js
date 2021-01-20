/**
 * 
 */
$(function(){
	var city = ["서울","대구","대전","부산"];
	$.each(city, function(index, value) {
		console.log(index + ":" + value);
	});
	var subjectInfo = {
		subject : "html",
		grade : 1,
		days : 20
	};
	$.each(subjectInfo, function(key, value) {
		console.log(key + ":" + value);
	});
});