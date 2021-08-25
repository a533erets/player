<?php
$err_msg = "";
$member_ID = '';

try{
    if(isset($_POST['member_ID'])){
        $member_ID = $_POST['member_ID'];
        require_once('connect.php');
        $getbarcode = $pdo->prepare("SELECT * FROM foodplayer.barcode WHERE `member_ID`=:member_ID");
        $getbarcode->bindValue(':member_ID', $member_ID);
        $getbarcode -> execute();
        $barcode = $getbarcode -> fetchALL(PDO::FETCH_ASSOC);
        echo json_encode($barcode);
    }
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>
