/**
 * Created by stas on 09.11.2016.
 */
$(document).ready(function () {
    $('input[name=addtocart]').attr('type','button');
    $('span.addtocart-button').click(function () {
        $('#overlay_stas').fadeIn(400,
            function () {
                $('#modal_stas')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            }
        );
    });
    $('#modal_close_stas, #overlay_stas').click(function () {
        $('#modal_stas, #overlay_stas').css('display', 'none');
    });
    $("<div id='modal_stas'> " +
        "<span id='modal_close_stas'>X</span>" +
        "<div><p class='stasformtext_stas_modal'>Заполните форму, что бы узнать актуальные цены!</p></div>"+
        "<form class='form-horizontal' method='post' action='http://xn--h1aaljkbdi.xn--p1ai/mail.php'>" +
            "<div class='form-groups_stas_modal'>" +
                "<label class='labelstas_stas_modal' for='name'>Имя:</label>" +
                "<div><input name='name' required='' type='text' placeholder='Введите Имя*' /></div>" +
             "</div>" +
            "<div class='form-groups_stas_modal'>" +
                "<label class='labelstas_stas_modal' for='email'>Email:</label>" +
                "<div><input id='email' class='' name='email' required='' type='email' placeholder='Введите email*' /></div>" +
            "</div>" +
            "<div class='form-groups_stas_modal'>" +
                "<label class='labelstas_stas_modal' for='textarea'>Текст:</label>" +
                "<div><textarea id='textarea' class='' name='mess' rows='3' placeholder='Какой товар вас интересует?*'></textarea></div>" +
            "</div>" +
            "<div class='form-groups_stas_modal'>" +
                "<div class='stasformbut_stas_modal'><input type='submit' value='Отправить' /></div>" +
            "</div>" +
        "</form>" +
      "</div>" +
    "<div id='overlay_stas'></div>").insertAfter("#main");
});