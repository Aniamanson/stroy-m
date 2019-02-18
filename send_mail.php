<?php
foreach($_POST as $key => $val){
    $arr[$key] = htmlspecialchars($val);
}

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$to = 'evn88@ya.ru';
$subject = 'Сообщение с сайта Строй-М';

function datalist($e){
    foreach($e as $key => $val){
        if($key !== "name" and $key !== "phone")
        $data .= '<li><b>'.$key.':</b> '.$val.'</li>'; 
    };
    return $data;
};

$message = '
    <html>
    <head>
        <title>Сообщение с сайта Строй-М</title>
    </head>
    <body>
        <h1>Сообщение от '.$arr['name'].'</h1> 
        <p>Телефон: <a href="tel:'.$arr['phone'].'">'.$arr['phone'].'</a></p>
        <p>Другие данные с сайта:</p>
        <ul>'.datalist($arr).'</ul>
    </body>
    </html> 
';


if($arr['name'] && $arr['phone'] && count($arr)>0){
    $response = [
        "message" => $message,
        "errmsg" => false
    ];

    mail($to, $subject, $message, $headers);
}
else {
    $response = [
        "message" => "ошибка данных",
        "errmsg" => true
    ];
}
echo json_encode($response);
?>