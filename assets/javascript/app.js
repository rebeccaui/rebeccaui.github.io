$(document).ready(function() {
    //When the DOM is ready
    $(".navbar a").click(function(){
        $("body,html").animate({
         scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
        
    });

    $(".footer a").click(function(){
        $("body,html").animate({
         scrollBottom:$("#" + $(this).data('value')).offset().top
        },1000)
        
    });

    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());
});    
