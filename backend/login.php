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