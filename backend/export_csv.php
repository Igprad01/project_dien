<?php
require_once 'db.php';

// Set header agar browser mengunduh sebagai CSV
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=data_siswa.csv');

// Buka output stream (langsung ke browser)
$output = fopen('php://output', 'w');

// Tambahkan header kolom
fputcsv($output, ['ID', 'Nama', 'Email', 'Tanggal Daftar']);

try {
    // Ambil data dari database
    $stmt = $pdo->query("SELECT id, nama, email, created_at FROM users ORDER BY created_at DESC");
    
    // Looping dan masukkan data ke dalam CSV
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        fputcsv($output, [
            $row['id'],
            $row['nama'],
            $row['email'],
            $row['created_at']
        ]);
    }
} catch (PDOException $e) {
    // Mengabaikan error pada CSV
    fputcsv($output, ['Error mengambil data dari database: ' . $e->getMessage()]);
}

fclose($output);
?>
