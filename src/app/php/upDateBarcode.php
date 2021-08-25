<?php
$err_msg = "";
$barcode_ID = '';
$member_ID = '';
$mode = '';

try{
    require_once('connect.php');
    if(isset($_POST['barcode_ID'], $_POST['member_ID'], $_POST['mode'])){
        $barcode_ID = $_POST['barcode_ID'];
        $member_ID = $_POST['member_ID'];
        $mode = $_POST['mode'];

        if($mode === 'use'){
            $useBarcode = $pdo -> prepare("UPDATE foodplayer.barcode SET `use`=:use WHERE `ID`=:barcode_ID AND `member_ID`=:member_ID ");
            $useBarcode->bindValue(':use', 'true');
            $useBarcode->bindValue(':barcode_ID', $barcode_ID);
            $useBarcode->bindValue(':member_ID', $member_ID);
    
            if($useBarcode -> execute()){
                $response = ['ID'=>$barcode_ID, 'used'=> 'true'];
                echo json_encode($response);
            }else{
                echo 'faild';
            }
        }

        if($mode === 'expire'){}
    }else{
        echo 'get nothing';
    }
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>