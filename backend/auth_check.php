<?php
session_start();

header('Content-Type: application/json');

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        'status' => 'success', 
        'logged_in' => true, 
        'user' => [
            'nama' => $_SESSION['nama'],
            'email' => $_SESSION['email']
        ]
    ]);
} else {
    echo json_encode([
        'status' => 'error', 
        'logged_in' => false, 
        'message' => 'Belum login.'
    ]);
}
?>
