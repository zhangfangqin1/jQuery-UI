$(document).ready(function() {
	$("#Rect1").draggable();
	$("#Rect2").droppable();

	/*绑定事件*/
	$("#Rect2").on("drop", function(event, ui) {
		$("#Rect2").text("drop");
	});
});