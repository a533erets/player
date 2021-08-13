<?php
$err_msg = "";
$ID = '123';
$image = '123';
$use = '123';
echo '123';
try{
    require_once('connect.php');
    if(isset($_POST['ID'], $_POST['image'], $_POST['use'])){
        // echo $_POST['ID'];
        // echo $_POST['image'];
        // echo $_POST['use'];
        $ID = $_POST['ID'];
        $image = $_POST['image'];
        $use = $_POST['use'];

        $newCart = $pdo -> prepare("INSERT INTO foodPlayer.shopping_cart (`ID`, `image`, `use`) VALUES (:ID, :image, :use)");
        $newCart->bindValue(':ID', $ID);
        $newCart->bindValue(':image', $image);
        $newCart->bindValue(':use', $use);

        if($newCart -> execute()){
            echo 'success';
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