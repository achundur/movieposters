
/**when document is ready, for every a element in tehe class "learn-more-artist",
 * link the click event to the onClick_LearnMore function**/
$(function(){
    console.log("window", window.location.href);
    console.log("title", $("title")[0].text);
    // var currentIndex=0;
    // var pageTitle = $("title")[0].text
    // if (pageTitle == "TESTING timeline"){
    //     currentIndex = 4
    // }
    // $('.js-timeline').Timeline({startItem:currentIndex});
  });
$(document).ready(function() {
    $("a.learn-more-artist").on("click",onClick_LearnMore);
    $("a.back-to-intro").on("click",onClick_BackToIntro);
    $("a.continue-reading").on("click",onClick_ContinueReading);
    $("a.back-to-details").on("click",onClick_BackToDetails);
    $("div[data-adhiti-date]").on("click", onClick_GoToGalleryItem);
    var currentIndex=0;
    // var pageTitle = $("title")[0].text
    // if (pageTitle == "TESTING timeline"){
    //     currentIndex = 4
    // }
    var m = $("meta[name=galleryIndex]");    

    currentIndex = m.attr("content");
    console.log("currentIndex", currentIndex)
    $('.js-timeline').Timeline({startItem:currentIndex});
    
    //console.log( "ready!" );
});

function animateItemDetails(){
    $("#b1").css('visibility','visible').animate({opacity:1.0},800,function(){
        $("#b2").css('visibility','visible').animate({opacity:1.0},800,function(){
            $("#b3").css('visibility','visible').animate({opacity:1.0},800, function(){
                $("#b4").css('visibility','visible').animate({opacity:1.0},800,function(){

                })
            })
        })
    })
}

function hideItemDetails(){
    $("#b1").css({'visibility':'hidden', opacity:0.0});
    $("#b2").css({'visibility':'hidden', opacity:0.0});
    $("#b3").css({'visibility':'hidden', opacity:0.0});
    $("#b4").css({'visibility':'hidden', opacity:0.0});
}


function onClick_LearnMore(event){
    var galleryItem=$(event.target).attr("data-adhiti");
    console.log(galleryItem);
    $("#gItemIntro").attr( "style", "display: none;" );
    $("#gItemDetail").fadeIn(800,"linear", animateItemDetails);
    
    
    // $("#gItemTimeline").attr( "style", "display: none;" );
    
    // $("#gItemDetail").show(3000);
    
    // $("#gItemDetail").fadeIn(2000,"linear",function(){
    //     $("#b1").css('visibility','visible').animate({opacity:1.0},2000,function(){
    //         $("#b2").css('visibility','visible').animate({opacity:1.0},2000,function(){
    //             $("#b3").css('visibility','visible').animate({opacity:1.0},2000, function(){
    //                 $("#b4").css('visibility','visible').animate({opacity:1.0},2000,function(){

    //                 })
    //             })
    //         })
    //     })
    // });

    /*
    $( "#gItemDetail" ).animate({

        left: "+=50",
        height: "toggle"
      }, 5000, function() {
        // Animation complete.
      });   
      */
//https://api.jquery.com/animate/
}


function onClick_BackToIntro(event){
    $("#gItemDetail").attr( "style", "display: none;" );
    // $("#gItemIntro").show(2000); 
    $("#gItemIntro").css('opacity', 0).slideDown('slow').animate(
      { opacity: 1 },
      { queue: false, duration: 'slow' }
    );
    // $("#learn-more").hide();
    // $("#wrapper").css("visibility", "visible").animate(
    //     {position: relative},
    //     {overflow: hidden},
    //     {width: "600px"},
    //     {height: "370px"}, 
    // );

    // $("#learn-more").css("visibility", "visible").animate(
    //     {position: absolute},
    //     {left: -"600px"},
    //     {width: "600px"},
    //     {height: "370px"},
    //     {background: blue},
        // {webkit-animation: slide 0.5s forwards},
        // {webkit-animation-delay: 2s},
        // {animation: slide 0.5 s forwards},
        // {animation-delay: 2s},
    // );
        
    //     {@-webkit-keyframes learn-more {
    //         100% { left: 0; }
    //     }
    // };
        
    //     {@keyframes learn-more {
    //         100% { left: 0; }
    //     }
    // };


    // );

    // .css('visibility','visible').animate({opacity:1.0},1500
    // $("#gItemTimeline").show(700);
}


/**CONTINUE READING */


function onClick_ContinueReading(event){
    console.log("continue reading is working")
    $("#gallery-item").attr( "style", "display: none;" );
    hideItemDetails();
    $("#artist-profile").fadeIn(1000);
}

function onClick_BackToDetails(event){
    console.log("continue reading is working")
    $("#artist-profile").attr( "style", "display: none;" );
    $("#gallery-item").fadeIn(700, function(){
        $("#gItemDetail").fadeIn(800,"linear", animateItemDetails);
    });

}

function onClick_GoToGalleryItem(event){
    console.log("clicked on date");
    var date=$(event.target).attr("data-adhiti-date");
    console.log(date);
}