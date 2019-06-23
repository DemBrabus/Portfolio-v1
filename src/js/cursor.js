var cursor = $(".cursor"),
	follower = $(".follower"),
    link = $(".link");

var posX = 0,
	posY = 0;

var mouseX = 0,
	mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		TweenMax.set(follower, {
			css: {    
				left: posX - 14,
				top: posY - 14
			}
		});

		TweenMax.set(cursor, {
			css: {    
				left: mouseX,
				top: mouseY
			}
		});
	}
});

$(document).on("mousemove", function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
});

$(link).on("mouseenter", function() {
	cursor.addClass("active");
	follower.addClass("active");
});
$(link).on("mouseleave", function() {
	cursor.removeClass("active");
	follower.removeClass("active");
});