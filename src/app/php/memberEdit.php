<?php
$err_msg = "";
$member_ID = "";
$member_name = '';
$phone = '';
$email = '';
$address= '';


try{
    require_once('connect.php');
    if(isset($_POST['member_ID'], $_POST['member_name'], $_POST['phone'], $_POST['email'], $_POST['address'])){

        $member_ID = $_POST['member_ID'];
        $member_name = $_POST['member_name'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $address = $_POST['address'];

        $newMemberInformation = $pdo -> prepare("UPDATE foodplayer.vip SET `member_name`=:member_name, `phone`=:phone, `email`=:email, `address`=:address WHERE `member_ID` = :member_ID");
        $newMemberInformation->bindValue(':member_name', $member_name);
        $newMemberInformation->bindValue(':member_ID', $member_ID);
        $newMemberInformation->bindValue(':phone', $phone);
        $newMemberInformation->bindValue(':email', $email);
        $newMemberInformation->bindValue(':address', $address);
      

        if($newMemberInformation -> execute()){
             echo json_encode($member_ID);
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