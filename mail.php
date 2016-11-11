<?php
$name=$_POST['name'];
$email=$_POST['email'];
$mess=$_POST['mess'];
if (isset($name))
	{
	$name = substr($name,0,30); //Не может быть более 30 символов
		if (empty($name))
			{
			echo "<center><b>Не указано имя !!!<p>";
			echo "<a href=index.php>Вернуться и правильно заполнить форму.</a>";
			exit;
			}		
	}
else
	{
	$name = "не указано";
	}
if (isset ($email))
	{
	$email = substr($email,0,30); //Не может быть более 30 символов
	if (empty($email))
		{
		echo "<center><b>Не указан e-mail !!!<p>";
		echo "<a href=index.php>Вернуться и правильно заполнить форму.</a>";
		exit;
		}
	}
else
	{
	$email = "не указано";
	}
if (isset ($mess))
	{
	$mess = substr($mess,0,1000); //Не может быть более 1000 символов
	if (empty($mess))
		{
		echo "<center><b>Сообщение не написано !!!<p>";
		echo "<a href=index.php>Вернуться и правильно заполнить форму.</a>";
		exit;
		}
	}
else
{
$mess = "не указано";
}
$i = "не указано";
if ($name == $i AND $email == $i AND $mess == $i)
{
echo "Ошибка ! Скрипту не были переданы параметры !";
exit;
}
$to = "stas@estudo.ru";  /*Мой адрес!*/
$subject = "Сообщение с вашего интернет-сайта";
$subject = iconv("UTF-8", "KOI8-R", "$subject"); /*тут короч с кодировкой прост беда, почта не читает*/
$message = "Имя пославшего: $name \nЭлектронный адрес: $email \nСообщение: $mess";
// Пишу в файл для проверки
$file = 'dokodirivki.txt';
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
mail ($to,$subject,$message) or print "Не могу отправить письмо !!!";
/*echo "<center><b>Спасибо за отправку Вашего сообщения. <a href=index.html>Нажмите</a>, что бы вернуться на главную... <br>Либо перейти на один из наших сайтов: <a href=\"http://www.estudo.ru/\" target=\"_blank\">ESTUDO.RU</a>,  <a href=\"http://xn--h1aaljkbdi.xn--p1ai/\" target=\"_blank\">СИМИСТОР.РФ</a> ";
http://xn--h1aaljkbdi.xn--p1ai/index.php?option=com_content&view=article&id=29 */
header('Location: http://xn--h1aaljkbdi.xn--p1ai/index.php?option=com_content&view=article&id=29/');
exit;
?>