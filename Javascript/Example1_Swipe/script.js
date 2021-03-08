$(document).on("swiperight", "ul li .listview__item", function (e) {
    $(this).prevAll("span").addClass("show");
    $(this).off("click").blur();
    $(this).css({
        transform: "translateX(50px)"
    }).one("transform transitionend", function () {
        $(this).one("swipeleft", function () {
            $(this).prevAll("span").removeClass("show");
            $(this).css({
                transform: "translateX(0px)"
            }).blur();
        });
    });
});