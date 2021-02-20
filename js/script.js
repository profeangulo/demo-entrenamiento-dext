$(document).ready(function(){
    // Menú Responsive
    $('aside#menu-movil').css('left','-290px');
    $('#cerrar').hide();

    $('#abrir').click(function(){
        $('aside#menu-movil').animate({
            left: 0
        },300,'easeOutExpo');
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
    });

    $('#cerrar').click(function(){
        $('aside#menu-movil').animate({
            left: -290
        },300,'easeOutExpo');
        $('#abrir').show();
        $('#cerrar').hide();
    });
});