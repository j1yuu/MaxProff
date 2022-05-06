<?php

// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$kind = "Косметический";
if ($_POST['kind'] == "capital") {
    $kind = "Капитальный";
} elseif ($_POST['kind'] == "key") {
    $kind = "Под ключ";
} elseif ($_POST['kind'] == "design") {
    $kind = "Дизайнерский";
};

$type = "Новостройка";
if ($_POST['type'] == "secondary") {
    $type = "Вторичное";
};

$amount = "1";
if ($_POST['amount'] == "two") {
    $amount = "2";
} elseif ($_POST['amount'] == "three") {
    $amount = "3";
} elseif ($_POST['amount'] == "four") {
    $amount = "4";
};

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$squarefrom = $obj['sfrom'];
$squareto = $obj['sto'];
$phone = $obj['mf-tel'];

// Формирование самого письма
$title = "Заголовок письма";

$body = " <h2>Заказ ремонта</h2>
  <tr style='background-color: #f8f8f8;'>
  <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Вид: </b>$kind</td>
  <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Тип: </b>$type</td>
  <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Количество: </b>$amount</td>
  <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>От: </b>$squarefrom</td>
  <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>До: </b>$squareto</td>
  <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Номер телефона: </b>$phone</td>
  </tr>
  ";
$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'o.lover4@bk.ru'; // Логин на почте
    $mail->Password   = '2gAMmLuc3VeEax3fC1uH'; // Пароль 
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->setFrom('o.lover4@bk.ru', 'Константин Кашин'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('ivkash96@mail.ru');
    $mail->addAddress('himbio_eban@mail.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);
