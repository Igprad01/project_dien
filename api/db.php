<?php
$host = getenv('DB_HOST') ?: 'gateway01.ap-southeast-1.prod.alicloud.tidbcloud.com';
$port = getenv('DB_PORT') ?: '4000';
$dbname = getenv('DB_NAME') ?: 'virtual_lab_db';    
$username = getenv('DB_USER') ?: '393n2ZrCGirn4Yu.root'; 
$password = getenv('DB_PASS') !== false ? getenv('DB_PASS') : 'rvtDP41uIv6j6TMZ';

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => true, 
];

// Menggunakan file sertifikat isrgrootx1.pem yang ditaruh di folder utama (root)
$options[PDO::MYSQL_ATTR_SSL_CA] = __DIR__ . '/../isrgrootx1.pem';

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8", $username, $password, $options);
} catch(PDOException $e) {
    // Memberikan output JSON agar frontend Javascript bisa membacanya tanpa error Try-Catch Parser
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'error', 
        'message' => 'Koneksi TiDB Database Galat: ' . $e->getMessage()
    ]);
    exit;
}
?>
