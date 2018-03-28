var valueSpan, Slider;
$(document).ready(function() {
	//$("#slider").slider();
	Slider = $("#slider");
	valueSpan = $("#span");

	/* //change事件获取当前进度条拖动的值,鼠标滑动之后
	Slider.slider({
		change: function(event, ui) {
			valueSpan.text(slider.slider("option", "value"));
		}
	});*/
	Slider.slider({
		slide:function(event, ui) {
			valueSpan.text(Slider.slider("option", "value"));
		}
	})

});