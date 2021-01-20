/**
 * 
 */
$(function(){
	var city = ["서울","대구","대전","부산"];
	var newCity = $.map(city, function(value, index){
		if(index < 2){
			return value;
		}
	});
	console.log(newCity.toString());
});