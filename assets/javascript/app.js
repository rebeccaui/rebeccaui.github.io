$(document).ready(function() {
    
    //When the DOM is ready
    $(".navbar-nav a").click(function(e){
        $("body,html").animate({
         scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
    });

    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });

    $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
    });

    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });
      

    $(".footer a").click(function(){
        $("body,html").animate({
         scrollBottom:$("#" + $(this).data('value')).offset().top
        },1000)
    });

    var n = new Date().getFullYear();

    // function toRoman(n) {
    //     var r = '',
    //         decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    //         roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    //     for (var i = 0; i < decimals.length; i++) {
    //         while (n >= decimals[i]) {
    //             r += roman[i];
    //             n -= decimals[i];
    //         }
    //     }
    //         return r;
    //         console.log(r);
    //         console.log(n);
            // Get the current year for the copyright
            $('#year').text(n);
    //}

});