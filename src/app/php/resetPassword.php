<?php
$err_msg = "";
$member_name = '';
$email = '';
$password="";
$mode = "";

try{
    require_once('connect.php');
    if(isset($_POST['mode'])){
        $mode = $_POST['mode'];

        if($mode === 'checkUser'){
            if(isset($_POST['member_name'], $_POST['email'])){
                $email = $_POST['email'];
                $member_name = $_POST['member_name'];
            
                $getMember = $pdo->prepare("SELECT * FROM foodplayer.vip WHERE  `email` =:email and `member_name` =:member_name");
                $getMember->bindValue(':email', $email);
                $getMember->bindValue(':member_name', $member_name);
                $getMember -> execute();
        
                $Member = $getMember -> fetchALL(PDO::FETCH_ASSOC);
                echo json_encode($Member);
        
            }else{
                echo json_encode('get nothing');
            }
        }

        if($mode === 'resetPassword'){
            if(isset($_POST['member_name'], $_POST['password'])){
                $member_name = $_POST['member_name'];
                $password=$_POST['password'];
        
                $resetPassword= $pdo -> prepare("UPDATE foodplayer.vip SET `password`=:password WHERE `member_name` = :member_name");
                $resetPassword->bindValue(':member_name', $member_name);
                $resetPassword->bindValue(':password', $password);
                if($resetPassword -> execute()){
                    echo json_encode($password);
                }else{
                    echo json_encode('faild');
                }
            }
        }
    }else{
        echo json_encode('Mode undefined');
    }
}catch(PDOException $error){
    $err_msg .= "error!" . $error->getMessage() . "<br>";
    $err_msg .= "on line" . $error->getMessage();
    echo $error;
}

?>