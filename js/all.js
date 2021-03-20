$(document).ready(function () {
	// JQ header滾動,新增class 陰影 //
    $(window).scroll(function() {
        if($(this).scrollTop() > 65) {
			$("header").addClass("header-shadow");
		} else {
			$("header").removeClass("header-shadow");
		}
    })
});