/*获取值*/
$(document).ready(function() {
	$("#input").spinner();
	$("#input").spinner("value", "10");
	$("#btn").on("click", function() {
		alert($("#input").spinner("value"));
	});
});