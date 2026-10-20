// 1. Pilih tombol berdasarkan ID-nya (pastikan namanya sama persis dengan di HTML)
const tombolSapa = document.getElementById('sapaButton');

// 2. Tambahkan 'event listener' untuk mendeteksi saat tombol diklik oleh pengguna
tombolSapa.addEventListener('click', function() {
  // 3. Jalankan perintah ini (munculkan jendela pesan kecil/alert) ketika tombol diklik
  alert('Halo! Terima kasih sudah berkunjung!');
});
