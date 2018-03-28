/*自动补全*/
$(document).ready(function() {
	var autotags = ["iwen", "ime", "html", "css", "javascripts", "java", "android", "ios"];
	$("#tags").autocomplete({
		source:autotags/*此处不能有分号*/
	});
});