<?php
$err_msg = "";

try{
    require_once('connect.php');
    $getProducts = $pdo->prepare("SELECT * FROM foodPlayer.products");
    $getProducts -> execute();
    $Products = $getProducts -> fetchALL(PDO::FETCH_ASSOC);
    echo json_encode($Products);
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>