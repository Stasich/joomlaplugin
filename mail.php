<?php

/** @link:http://stackoverflow.com/questions/9154719/check-whether-post-value-is-empty */

if ("" == trim($_POST['name'])) {
    echo "<b>Не указано имя !!!</b>"
        . "<a href=index.php>Вернуться и правильно заполнить форму.</a>";
    exit;
}

if ("" == trim($_POST['email'])) {
    echo "<b>Не указан e-mail !!!</b>"
        . "<a href=index.php>Вернуться и правильно заполнить форму.</a>";
    exit;
}

if ("" == trim($_POST['mess'])) {
    echo "<b>Сообщение не написано !!!</b>"
        . "<a href=index.php>Вернуться и правильно заполнить форму.</a>";
    exit;
}

$name = substr($_POST['name'], 0, 30); //Не может быть более 30 символов
$email = substr($_POST['email'], 0, 30); //Не может быть более 30 символов
$mess = substr($_POST['mess'], 0, 1000); //Не может быть более 1000 символов

$to = "stas@estudo.ru";  /** Мой адрес!*/
$subject = "Сообщение с вашего интернет-сайта";
$subject = iconv("UTF-8", "KOI8-R", "$subject"); /*тут короч с кодировкой прост беда, почта не читает*/
$message = "Имя пославшего: $name \nЭлектронный адрес: $email \nСообщение: $mess";
// Пишу в файл для проверки
//$file = 'dokodirivki.txt';
// текст который добавлю
$text = "$message \n";
file_put_contents($file, $text, FILE_APPEND | LOCK_EX);
$message = iconv("UTF-8", "KOI8-R", "$message");
// Пишу в файл
$file = 'huiysoria.txt';
// текст который добавлю
$text = "$message \n";
file_put_contents($file, $text, FILE_APPEND | LOCK_EX);
// отправляю в почту
mail($to, $subject, $message) or print "Не могу отправить письмо !!!";
/*echo "<center><b>Спасибо за отправку Вашего сообщения. <a href=index.html>Нажмите</a>, что бы вернуться на главную... <br>Либо перейти на один из наших сайтов: <a href=\"http://www.estudo.ru/\" target=\"_blank\">ESTUDO.RU</a>,  <a href=\"http://xn--h1aaljkbdi.xn--p1ai/\" target=\"_blank\">СИМИСТОР.РФ</a> ";
http://xn--h1aaljkbdi.xn--p1ai/index.php?option=com_content&view=article&id=29 */
header('Location: http://xn--h1aaljkbdi.xn--p1ai/index.php?option=com_content&view=article&id=29/');
