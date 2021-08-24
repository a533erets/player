<?php
$err_msg = "";
$member_ID= uniqid();
$member_name = '';
$phone = '';
$email= '';
$address = '';
$password ='';
$bonus = 0;
$barcode = '';


try{
    require_once('connect.php');
    if(isset($_POST['member_name'], $_POST['phone'], $_POST['email'], $_POST['address'], $_POST['password'])){
        $member_name = $_POST['member_name'];
       
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $password = $_POST['password'];

      
        $newMember = $pdo -> prepare("INSERT INTO foodplayer.vip (`member_ID`, `email`, `member_name`, `address`, `password`, `phone`, `bonus`, `barcode`) VALUES (:member_ID,:email, :member_name, :address, :password, :phone, :bonus, :barcode)");
        $newMember->bindValue(':member_ID', $member_ID);
        $newMember->bindValue(':email', $email);
        $newMember->bindValue(':member_name', $member_name);
        $newMember->bindValue(':address', $address);
        $newMember->bindValue(':password', $password);
        $newMember->bindValue(':phone', $phone);
        $newMember->bindValue(':bonus', $bonus);
        $newMember->bindValue(':barcode', $barcode);

        if($newMember -> execute()){
          $response = array('0'=>array('member_ID'=>$member_ID,'member_name'=>$member_name,'password'=>$password,'email'=>$email,'phone'=>$phone,'address'=>$address,'bonus'=>$bonus,'barcode'=>$barcode));
            echo json_encode($response);
        }else{
            echo json_encode('faild');
        }
    }else{
        echo json_encode('get nothing');
    }
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>