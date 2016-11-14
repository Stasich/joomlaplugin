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

    $("<div id='modal_stas'> " +
        "<span id='modal_close_stas'>X</span>" +
        "<div><p class='stasformtext_stasmodal'>Заполните форму, что бы узнать актуальные цены!</p></div>"+
        "<form class='form-horizontal' method='post' action='/plugins/content/stasmodal/mail.php'>" +
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
    "<div id='overlay_stas'></div>").insertAfter("#main");

    $('#modal_close_stas, #overlay_stas').click(function () {
        $('#modal_stas, #overlay_stas').css('display', 'none');
    });
    $('#stas_button').click(function () {
        $.post('/plugins/content/stasmodal/mail.php', {
            name: $('#name_stasmodal').val(),
            email: $('#email_stasmodal').val(),
            mess: $('#textarea_stasmodal').val()
        })
            .done(function() {
                $('#modal_stas, #overlay_stas').css('display', 'none');
                alert( "Ваша заявка отправленна! В течении дня менеджер ответит Вам на указанную почту." );
            })
            .fail(function(){
                alert ("Что-то пошло не так. Повторите пожалуйста отправку сообщения или напишите свою заявку нам на почту: info@estudo.ru");
            });
    });
});