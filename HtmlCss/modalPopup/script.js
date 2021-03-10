// document.addEventListener('click', function(event) {
//     if (event.target.matches('.modal__open-btn')){
//         document.getElementById('modal').style.display="block";
//     }
//     if (event.target.matches('.modal__close-btn')){
//         document.getElementById('modal').style.display="none";
//     }

// });

$(".modal__open-btn").click(function(){
    $("#modal").attr("style", "display:block");
    $(this).addClass("active");
    $(this).removeClass("inactive");
});

$(".modal__close-btn").click(function(){
    $("#modal").attr("style", "display:none");
    $(this).addClass("inactive");
    $(this).removeClass("active");
});      