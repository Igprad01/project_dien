<?php
// Jika file config.php ada (di local), pakai data di dalamnya. Jika di Vercel, kita akan pakai getenv()
if (file_exists(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php';
}

$host = getenv('DB_HOST') ?: ($db_host_local ?? '');
$port = getenv('DB_PORT') ?: ($db_port_local ?? '4000');
$dbname = getenv('DB_NAME') ?: ($db_name_local ?? '');    
$username = getenv('DB_USER') ?: ($db_user_local ?? ''); 
$password = getenv('DB_PASS') !== false ? getenv('DB_PASS') : ($db_pass_local ?? '');

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
