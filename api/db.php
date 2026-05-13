<?php
// Jika file config.php ada (di local), pakai data di dalamnya. Jika di Vercel, kita akan pakai getenv()
// Load config if exists
$config_file = __DIR__ . '/config.php';
if (file_exists($config_file)) {
    require_once $config_file;
}

// Get config from environment (Vercel) or local config
$host = getenv('DB_HOST') ?: ($db_host_local ?? '');
$port = getenv('DB_PORT') ?: ($db_port_local ?? '4000');
$dbname = getenv('DB_NAME') ?: ($db_name_local ?? '');
$username = getenv('DB_USER') ?: ($db_user_local ?? '');
$password = getenv('DB_PASS') !== false ? getenv('DB_PASS') : ($db_pass_local ?? '');

// Check if host is empty (which causes the 2002 socket error)
if (empty($host)) {
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'error',
        'message' => 'Konfigurasi database tidak ditemukan. Pastikan file api/config.php ada atau environment variable DB_HOST sudah diatur.'
    ]);
    exit;
}

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => true,
];

// SSL Certificate Path
$ssl_ca = realpath(__DIR__ . '/../isrgrootx1.pem');
if ($ssl_ca) {
    $options[PDO::MYSQL_ATTR_SSL_CA] = $ssl_ca;
} else {
    // If realpath fails, try a direct path as fallback
    $options[PDO::MYSQL_ATTR_SSL_CA] = __DIR__ . '/../isrgrootx1.pem';
}

try {
    $dsn = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4";
    $pdo = new PDO($dsn, $username, $password, $options);
} catch(PDOException $e) {
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'error', 
        'message' => 'Koneksi TiDB Database Galat: ' . $e->getMessage()
    ]);
    exit;
}
?>
