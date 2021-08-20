<?php
$err_msg = "";
$account = '';
$phone = '';
$password = '';

try{
    require_once('connect.php');
    if(isset($_POST['account'], $_POST['password'])){
        $account = $_POST['account'];
        $password = $_POST['password'];
        $getMember = $pdo->prepare("SELECT * FROM foodplayer.vip WHERE `email` = :account or `phone` =:account and `password` =:password");
        $getMember->bindValue(':account', $account);
        $getMember->bindValue(':password', $password);
        $getMember -> execute();
        $Member = $getMember -> fetchALL(PDO::FETCH_ASSOC);
        echo json_encode($Member);
        // if($Member){
        //     echo json_encode($Member);
        // }else{
        //     echo 'faild';
        // }
    }else{
        echo json_encode('get nothing');
    }
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>