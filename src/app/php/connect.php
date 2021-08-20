<?php 
header('Access-Control-Allow-Origin: http://localhost:8100');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Authorization');
error_reporting(E_ALL);

/*Please change those to your local setting*/
$host = 'mysql:host=localhost;debname=foodplayer;chartset=utf8';
$username= 'root';
$password = '1234';
// $password = 'poi98799';

$pdo = new PDO($host, $username, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>