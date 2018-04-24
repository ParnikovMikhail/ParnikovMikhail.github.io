<?php
//Принимаем постовые данные
$name =$_POST['username'];
$phone =$_POST['phone'];
//Тут указываем на какой ящик посылать письмо
$to = "nikita1bogdan@gmail.com";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Подписка по e-mail";
// Сообщение письма
$message = "
Имя: ".htmlspecialchars($name)."<br />
Телефон: ".htmlspecialchars($phone);
// Отправляем письмо при помощи функции mail();
$headers = "From: zakaz@ecovata93.ru\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
exit();
?>
