<?php
// Load config if exists
$config_file = __DIR__ . '/config.php';
if (file_exists($config_file)) {
    require_once $config_file;
}

// Get config from environment (Vercel) or local config variables
// Default values are set to the TiDB credentials provided by the user
$host = getenv('DB_HOST') ?: ($db_host_local ?? 'gateway01.ap-southeast-1.prod.alicloud.tidbcloud.com');
$port = getenv('DB_PORT') ?: ($db_port_local ?? '4000');
$dbname = getenv('DB_NAME') ?: ($db_name_local ?? 'virtual_lab_db');
$username = getenv('DB_USER') ?: ($db_user_local ?? '393n2ZrCGirn4Yu.root');
$password = getenv('DB_PASS') !== false ? getenv('DB_PASS') : ($db_pass_local ?? 'rvtDP41uIv6j6TMZ');

// Validate if we have the minimum required config
if (empty($host) || empty($dbname) || empty($username)) {
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'error',
        'message' => 'Konfigurasi database tidak lengkap. Pastikan host, database, dan username sudah diatur.'
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
