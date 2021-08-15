<?php
$err_msg = "";
$cartID = "";
$paid = "";
$stars = "";

try{
    require_once('connect.php');
    if(isset($_POST['cartID'], $_POST['paid'], $_POST['stars'])){
        $cartID = $_POST['cartID'];
        $paid = $_POST['paid'];
        $stars = $_POST['stars'];

        $upDateCart = $pdo -> prepare("UPDATE foodPlayer.shopping_cart SET `paid`=:paid, `stars`=:stars WHERE `shopping_cart_ID` = :ID");
        $upDateCart->bindValue(':ID', $cartID);
        $upDateCart->bindValue(':paid', $paid);
        $upDateCart->bindValue(':stars', $stars);

        if($upDateCart -> execute()){
            // echo 'success';
            echo json_encode($paid);
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