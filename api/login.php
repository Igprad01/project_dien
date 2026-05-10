<?php
session_start();
require_once 'db.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if($input) {
        $nama = trim($input['nama'] ?? '');
        $email = trim($input['email'] ?? '');
    } else {
        $nama = trim($_POST['nama'] ?? '');
        $email = trim($_POST['email'] ?? '');
    }

    if (empty($nama) || empty($email)) {
        echo json_encode(['status' => 'error', 'message' => 'Nama dan email tidak boleh kosong.']);
        exit;
    }

    try {
        $stmt = $pdo->prepare("SELECT id, nama, email FROM users WHERE email = :email");
        $stmt->execute(['email' => $email]);
        $user = $stmt->fetch();

        if (!$user) {
            // 1. Simpan ke SQL
            $stmtInsert = $pdo->prepare("INSERT INTO users (nama, email, created_at) VALUES (:nama, :email, NOW())");
            $stmtInsert->execute(['nama' => $nama, 'email' => $email]);
            $userId = $pdo->lastInsertId();
            
            $user = [
                'id' => $userId,
                'nama' => $nama,
                'email' => $email
            ];

            // 2. Data disimpan ke SQL (CSV akan disediakan via endpoint terpisah)
            
            // 3. Simpan data ke Google Spreadsheet (Webhook)
            // Ganti URL_WEBHOOK_DISINI dengan URL Web App dari Google Apps Script Anda (jika di-hosting Vercel, bisa dari env variable)
            $webhook_url = getenv('SPREADSHEET_WEBHOOK_URL') ?: 'URL_WEBHOOK_DISINI';
            
            if ($webhook_url !== 'URL_WEBHOOK_DISINI') {
                $ch = curl_init($webhook_url);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_POST, true);
                curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
                    'nama' => $nama,
                    'email' => $email,
                    'tanggal' => date('Y-m-d H:i:s')
                ]));
                // Timeout di set 3 detik agar login tidak terlalu lama muter-muter (loading) saat nge-hit API Google
                curl_setopt($ch, CURLOPT_TIMEOUT, 3);
                curl_exec($ch);
                curl_close($ch);
            }
        }

        $_SESSION['user_id'] = $user['id'];
        $_SESSION['nama'] = $user['nama'];
        $_SESSION['email'] = $user['email'];

        echo json_encode(['status' => 'success', 'message' => 'Berhasil masuk!', 'data' => [
            'nama' => $user['nama'],
            'email' => $user['email']
        ]]);
        
    } catch(PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Terjadi kesalahan sistem: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Metode request tidak valid.']);
}
?>