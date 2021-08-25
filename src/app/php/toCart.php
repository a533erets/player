<?php
$err_msg = "";
$cartID = uniqid();
$userName = '';
$userID = '';
$theCart = '';
$total = '';
$payment = "";
$paid = 'false';
$today = date("Y-m-d H:i:s");
$stars = 0;
$bonus = '';

try{
    require_once('connect.php');
    if(isset($_POST['userName'], $_POST['userID'], $_POST['theCart'], $_POST['total'], $_POST['payment'], $_POST['bonus'])){
        $userID = $_POST['userID'];
        $userName = $_POST['userName'];
        $theCart = $_POST['theCart'];
        $total = $_POST['total'];
        $payment = $_POST['payment'];
        $bonus = $_POST['bonus'];

        $newCart = $pdo -> prepare("INSERT INTO foodplayer.shopping_cart (`shopping_cart_ID`, `member_ID`, `member_name`, `product_list`, `total`, `payment_method`, `paid`, `date`, `stars`) VALUES (:shopping_cart_ID, :member_ID, :member_name, :product_list, :total, :payment_method, :paid, :date, :stars)");
        $newCart->bindValue(':shopping_cart_ID', $cartID);
        $newCart->bindValue(':member_ID', $userID);
        $newCart->bindValue(':member_name', $userName);
        $newCart->bindValue(':product_list', $theCart);
        $newCart->bindValue(':total', $total);
        $newCart->bindValue(':payment_method', $payment);
        $newCart->bindValue(':paid', $paid);
        $newCart->bindValue(':date', $today);
        $newCart->bindValue(':stars', $stars);

        $upDateBonus = $pdo -> prepare("UPDATE foodplayer.vip SET `bonus`= bonus + :bonus WHERE `member_ID`=:member_ID");
        $upDateBonus->bindValue(':bonus', $bonus);
        $upDateBonus->bindValue(':member_ID', $userID);

        if($newCart -> execute() AND $upDateBonus -> execute()){
            $response = ['cartID'=> $cartID, 'bonus'=> $bonus];
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