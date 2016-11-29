/**
 * Created by stas on 09.11.2016.
 */
jQuery(document).ready(function () {
    jQuery('input[name=addtocart]').attr('type','button');
    jQuery('span.addtocart-button').click(function () {
        jQuery('#overlay_stas').fadeIn(400,
            function () {
                jQuery('#modal_stas')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            }
        );
    });

    jQuery("<div id='modal_stas'> " +
        "<button id='modal_close_stas'>×</button>" +
        "<div><p class='stasformtext_stasmodal'>Заполните форму, что бы узнать актуальные цены!</p></div>"+
        "<form id='stas_modal_form' class='form-horizontal' method='post' action='javascript:0'>" +
            "<div class='form-groups_stasmodal'>" +
                "<label class='labelstas_stasmodal' for='name'>Имя:</label>" +
                "<div><input id='name_stasmodal' name='name' required='' type='text' placeholder='Введите Имя*' /></div>" +
             "</div>" +
            "<div class='form-groups_stasmodal'>" +
                "<label class='labelstas_stasmodal' for='email'>Email:</label>" +
                "<div><input id='email_stasmodal' class='' name='email' required='' type='email' placeholder='Введите email*' /></div>" +
            "</div>" +
            "<div class='form-groups_stasmodal'>" +
                "<label class='labelstas_stasmodal' for='textarea'>Текст:</label>" +
                "<div><textarea id='textarea_stasmodal' class='' name='mess' rows='3' placeholder='Какой товар вас интересует?*'></textarea></div>" +
            "</div>" +
            "<div class='form-groups_stasmodal'>" +
                "<div class='stasformbut_stasmodal'><input id='stas_button' type='submit' value='Отправить' /></div>" +
            "</div>" +
        "</form>" +
      "</div>" +
    "<div id='overlay_stas'></div>" +
    "<div id='stas_otpravleno'><button id='otpravleno_close_stas'>×</button>" +
            "<div class='div_otpr'><p class='stas_otpravleno_zagol'>Ваша заявка отправленна!</p>" +
                "<p class='stas_otpravleno_text'>В течении дня менеджер ответит Вам на указанную почту.</p></div>" +
            "<div id='div_ok'><button id='otpr_ok'>ОК</button></div>" +
        "</div>").insertAfter("#main");

    jQuery('#modal_close_stas, #overlay_stas, #otpravleno_close_stas, #div_ok').click(function () {
        jQuery('#modal_stas, #overlay_stas, #stas_otpravleno').css('display', 'none');
    });
    jQuery('#stas_modal_form').submit(function () {
        jQuery.post('/plugins/content/stasmodal/mail.php', {
            name: jQuery('#name_stasmodal').val(),
            email: jQuery('#email_stasmodal').val(),
            mess: jQuery('#textarea_stasmodal').val()
        })
            .done(function() {
                jQuery('#modal_stas').css('display', 'none');
                jQuery('#stas_otpravleno').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
            })
            .fail(function(){
                alert ("Что-то пошло не так. Повторите пожалуйста отправку сообщения или напишите свою заявку нам на почту: info@estudo.ru");
            });
    });
});