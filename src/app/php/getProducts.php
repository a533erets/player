<?php
$err_msg = "";

try{
    require_once('connect.php');
    $getUser = $pdo->prepare("SELECT * FROM foodPlayer.products");
    $getUser -> execute();
    $USERS = $getUser -> fetchALL(PDO::FETCH_ASSOC);
    echo json_encode($USERS);
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>