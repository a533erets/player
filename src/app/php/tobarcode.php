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
        
        $q = $pdo -> prepare("INSERT INTO foodPlayer.barcode (`ID`, `member_ID`, `use`, `name`) VALUES (:ID, :member_ID, :use, :name)");
        $q->bindValue(':ID', $ID);
        $q->bindValue(':member_ID', $member_ID);
        $q->bindValue(':use', $use);
        $q->bindValue(':name', $name);

        if($q -> execute()){
            $response = ['ID'=> $ID, 'used'=> $use, 'name'=> $name];
            echo json_encode($response);
        }else{
            echo 'faild';
        }

        if(isset($_POST['member_ID'])){
            $member_ID = $_POST['member_ID'];
            $q = $pdo -> prepare("UPDATE foodplay.vip SET `barcode`=:barcode WHERE `member_ID`=:member_ID ");
            $q->bindValue(':barcode', $ID);
            $q->bindValue(':member_ID', $member_ID);

            if($q -> execute()){
                echo json_encode($member_ID);
            }else{
                echo 'faild';
            }
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