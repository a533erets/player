<?php
$err_msg = "";
$member_ID = uniqid();
$member_name = '';
$phone = '';
$email = '';
$address= '';


try{
    require_once('connect.php');
    if(isset($_POST['name'], $_POST['userID'], $_POST['phone'], $_POST['email'], $_POST['address'])){
        // echo $_POST['userName'];
        // echo $_POST['userID'];
        // echo $_POST['theCart'];
        $member_ID = $_POST['userID'];
        $member_name = $_POST['name'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $address = $_POST['address'];

        $newMemberInformation = $pdo -> prepare("INSERT INTO foodplayer.vip (`member_name`, `member_ID`, `phone`, `email`, `address`) VALUES (:name, :member_ID, :phone, :email, :address)");
        $newCart->bindValue(':member_name', $name);
        $newCart->bindValue(':member_ID', $member_ID);
        $newCart->bindValue(':phone', $phone);
        $newCart->bindValue(':email', $email);
        $newCart->bindValue(':address', $address);
      

        // if($newCart -> execute()){
        //     echo 'success';
        // }else{
        //     echo 'faild';
        // }
    }else{
        echo 'get nothing';
    }
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>