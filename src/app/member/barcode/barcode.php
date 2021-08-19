<?php
header('Access-Control-Allow-Origin: http://localhost:8100');
// header('Content-Type: application/json');
include 'barcode128.php';
// echo '<center><div style="height: 30%; width: 50%;">';
// echo '<p>'.bar128(stripcslashes($_POST['generate'])).'</p>';
// echo '<p>'.bar128(stripcslashes(rand())).'</p>';
$aa = bar128(stripcslashes(rand()));
// $bb = '<center><div style="height: 30%; width: 50%;"><p>'.$aa.'</p></div></center>';
echo $aa;

// echo '</div></center>';
?>