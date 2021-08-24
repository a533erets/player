<?php
$err_msg = "";
$member_ID = "";
$ID = '';
$use ='false';
$name = '';
try{
    require_once('connect.php');
    if(isset($_POST['ID'],  $_POST['use'], $_POST['name'], $_POST['member_ID'])){
        $ID = $_POST['ID'];
        $use = $_POST['use'];
        $name = $_POST['name'];
        $member_ID = $_POST['member_ID'];
        
        $newBarcode = $pdo -> prepare("INSERT INTO foodplayer.barcode (`ID`, `member_ID`, `use`, `name`) VALUES (:ID, :member_ID, :use, :name)");
        $newBarcode->bindValue(':ID', $ID);
        $newBarcode->bindValue(':member_ID', $member_ID);
        $newBarcode->bindValue(':use', $use);
        $newBarcode->bindValue(':name', $name);

        $whoseBarcode = $pdo -> prepare("UPDATE foodplayer.vip SET `barcode`= concat(`barcode`, :barcode) WHERE `member_ID`=:member_ID ");
        $whoseBarcode->bindValue(':barcode', $ID);
        $whoseBarcode->bindValue(':member_ID', $member_ID);

        if($newBarcode -> execute()  AND $whoseBarcode -> execute()){
            $response = ['ID'=> $ID, 'used'=> $use, 'name'=> $name, 'member_ID'=> $member_ID];
            echo json_encode($response);
        }else{
            echo 'faild';
        }
    }else{
        echo 'get nothing';
    }
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>