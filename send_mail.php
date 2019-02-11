<?php
$name = htmlspecialchars($_POST['name']);
$tel = htmlspecialchars($_POST['tel']);
$form = htmlspecialchars($_POST['form']);

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$to = 'evn88@ya.ru';
$subject = 'Сообщение с сайта [Перезвонить]';

$message = '
    <html>
    <head>
        <title>Сообщение с сайта</title>
    </head>
    <body>
        <h1>'.$name.'</h1> 
        <p>просит перезвонить по номеру: <a href="tel:'.$tel.'">'.$tel.'</a></p>
    </body>
    </html> 
';

if($name && $tel){
    $response = [
        "message" => $message,
        "errmsg" => false
    ];

    mail($to, $subject, $message, $headers);
}
else {
    $response = [
        "message" => "ошибка",
        "errmsg" => true
    ];
}
echo json_encode($response);
?>