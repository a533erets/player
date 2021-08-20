<?php
$err_msg = "";
$member_ID = "";
$ID = 'ID';
$image = 'image';
$use ='use';
try{
    require_once('connect.php');
    if(isset($_POST['ID'], $_POST['image'], $_POST['use'])){
        $ID = $_POST['ID'];
        $image = $_POST['image'];
        $use = $_POST['use'];
        
        $q = $pdo -> prepare("INSERT INTO foodPlayer.barcode (`ID`, `image`, `use`) VALUES (:ID, :image, :use)");
        $q->bindValue(':ID', $ID);
        $q->bindValue(':image', $image);
        $q->bindValue(':use', $use);

        if($q -> execute()){
            echo json_encode($ID);
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