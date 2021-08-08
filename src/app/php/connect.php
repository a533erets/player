<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Origin: http://localhost:8100');
error_reporting(E_ALL);

/*Please change those to your local setting*/
$host = 'mysql:host=localhost;debname=foodplayer;chartset=utf8';
$username= 'root';
$password = 'c123789651';

$pdo = new PDO($host, $username, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>