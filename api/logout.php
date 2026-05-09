<?php
session_start();

// Hapus semua session
session_unset();
session_destroy();

header('Content-Type: application/json');
echo json_encode(['status' => 'success', 'message' => 'Berhasil logout.']);
?>
