/**
 * Created by stas on 09.11.2016.
 */
$(document).ready(function() {
    $('.addtocart-button').click(function(){
        $('#overlay_stas').fadeIn(400,
            function(){
                $('#modal_stas')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            }
        );
    });
    $('#modal_close_stas, #overlay_stas').click( function(){
        $('#modal_stas')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay_stas').fadeOut(400);
                }
            );
    });
    $( "<div id='modal_stas'>    <span id='modal_close_stas'>X</span><form></form></div><div id='overlay_stas'></div>" ).insertAfter("#main");
});