<?php
$err_msg = "";

try{
    require_once('connect.php');
    $getbarcode = $pdo->prepare("SELECT * FROM foodplayer.barcode");
    $getbarcode -> execute();
    $barcode = $getbarcode -> fetchALL(PDO::FETCH_ASSOC);
    echo json_encode($barcode);
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>
