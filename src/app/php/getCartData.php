<?php
$err_msg = "";
$member_ID = "";
$member_name = "";

try{
    require_once('connect.php');
    if(isset($_POST['member_ID'], $_POST['member_name'])){
        $member_ID = $_POST['member_ID'];
        $member_name = $_POST['member_name'];
        $getCartData = $pdo->prepare("SELECT `shopping_cart_ID`, `product_list`, `total`, `paid`, `date`, `stars` FROM foodplayer.shopping_cart WHERE `member_ID`=:member_ID and `member_name`=:member_name");
        $getCartData->bindValue(':member_ID', $member_ID);
        $getCartData->bindValue(':member_name', $member_name);
        $getCartData -> execute();
        $cartData = $getCartData -> fetchALL(PDO::FETCH_ASSOC);
        echo json_encode($cartData);
    }else{
        echo json_encode('get nothing');
    }
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>