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

    var n = new Date().getFullYear();

    function toRoman(n) {
        var r = '',
            decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        for (var i = 0; i < decimals.length; i++) {
            while (n >= decimals[i]) {
                r += roman[i];
                n -= decimals[i];
            }
        }
            return r;
            console.log(r);
            console.log(n);
            // Get the current year for the copyright
            $('#year').text(n);
    }


});    
