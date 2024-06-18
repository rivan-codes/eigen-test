# Company Website

Ini adalah proyek website sederhana menggunakan Laravel untuk menampilkan informasi perusahaan dan memiliki fitur admin untuk mengelola informasi tersebut.

## Fitur Utama
- Halaman Homepage untuk menampilkan informasi perusahaan.
- Halaman Admin untuk mengedit informasi perusahaan.
- Fitur tambahan: Segitiga Siku-siku Generator.

## Instalasi

### Persyaratan
Pastikan Anda telah menginstal PHP, Composer, dan telah menyiapkan database MySQL.

### Langkah-langkah Instalasi
1. Clone repositori ini ke dalam direktori lokal:
2. Install dependencies menggunakan Composer:
composer install
3. Salin file `.env.example` ke `.env` dan sesuaikan konfigurasi database:
cp .env.example .env
php artisan key
4. Buat database kosong dengan nama yang sesuai di MySQL.
5. Konfigurasi `.env` dengan detail database Anda:
6. Lakukan migrasi database untuk membuat tabel yang diperlukan:
php artisan migrate
7. (Opsional) Jalankan seeder untuk memasukkan data default perusahaan:
php artisan db --class=CompanySeeder
8. Serve aplikasi menggunakan server lokal:

9. Buka browser dan akses `http://localhost:8000` untuk melihat website.

## Penggunaan

### Halaman Homepage
- Informasi perusahaan seperti nama, logo, tagline, dan alamat ditampilkan.
- Navigasi menu untuk mengarahkan ke Halaman Admin.

### Halaman Admin
- Form untuk mengedit informasi perusahaan.
- Upload logo, ubah nama, tagline, dan alamat perusahaan.

### Fitur Tambahan: Segitiga Siku-siku Generator
- Akses URL `/triangle/{x}` untuk menghasilkan segitiga siku-siku dengan karakter 'o'.
- Sisi luar segitiga berwarna merah, sisi dalam berwarna hitam.

Contoh:
- `/triangle/5` akan menghasilkan:
 ```
 o
 oo
 ooo
 oooo
 ooooo
 ```
