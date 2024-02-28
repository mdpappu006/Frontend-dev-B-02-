$(document).ready(function(){

    // $(".h2").hover(function(){
    //     $(".h2").css("background", "red");
    // });


    // $("input").blur(function(){
    //     $(this).css("background", "red");
    // });


    // Without Animation Effect

//     $(".s").on("click",function(){
//         $(".item").show();
//     });

//    $(".h").on("click",function(){
//         $(".item").hide();
//     });



  // Animation Effect
//    $(".s").on("click",function(){
//         $("img").show(2000);
//     });


    //  Toggle

//    $(".display").on("click",function(){
//         $("img").toggle(2000);
//     });


    //  fadeIn

   $(".display").on("click",function(){
        $("img").fadeToggle();
        $("img").fadeToggle("slow");
        $("img").fadeToggle(3000);
      
    });




});