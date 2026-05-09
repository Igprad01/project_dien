<?php
$host = getenv('DB_HOST') ?: 'gateway01.ap-southeast-1.prod.alicloud.tidbcloud.com';
$port = getenv('DB_PORT') ?: '4000';
$dbname = getenv('DB_NAME') ?: 'virtual_lab_db';    
$username = getenv('DB_USER') ?: '393n2ZrCGirn4Yu.root'; 
$password = getenv('DB_PASS') !== false ? getenv('DB_PASS') : 'rvtDP41uIv6j6TMZ';

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];


if ($port == '4000') {
    $options[PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT] = false;
}

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8", $username, $password, $options);
} catch(PDOException $e) {
    die("Koneksi database gagal: " . $e->getMessage());
}
?>
