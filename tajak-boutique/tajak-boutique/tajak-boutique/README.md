# Tajak Boutique

Website katalog Tajak Boutique (UMKM). Website statis murni: HTML, CSS, dan JavaScript biasa,
tanpa framework dan tanpa library. Bisa dibuka langsung (klik dua kali file `.html`) maupun lewat Live Server.

## Struktur folder

```
tajak-boutique/
├── index.html                 # Beranda (slideshow + kategori)
├── koleksi-atasan.html        # Halaman koleksi (produk dari produk.js)
├── koleksi-bawahan.html
├── koleksi-tas.html
├── koleksi-alas-kaki.html
├── tentang-kami.html          # Halaman informasi
├── kontak.html
├── cara-pemesanan.html
├── panduan-ukuran.html
├── konfirmasi-transfer.html   # Form -> dikirim ke WhatsApp
├── galeri.html
├── testimoni.html
├── syarat-ketentuan.html
├── kebijakan-pengiriman.html
├── kebijakan-retur.html
├── README.md
└── assets/
    ├── css/style.css          # Semua tampilan (warna & font di bagian :root)
    ├── js/produk.js           # DATA PRODUK -> edit file ini untuk tambah/ubah produk
    ├── js/main.js             # Menu, slideshow, render produk, form
    └── img/
        ├── slide-1.jpg, slide-2.jpg, slide-3.jpg
        ├── tentang-kami.jpg
        ├── kategori/   (atasan.jpg, bawahan.jpg, tas.jpg, alas-kaki.jpg)
        ├── produk/     (atasan-1.jpg ... alas-kaki-5.jpg)
        └── galeri/     (galeri-1.jpg ... galeri-6.jpg)
```

## Cara membuka di VS Code

1. **File → Open Folder** → pilih folder `tajak-boutique`.
2. Buka tab Extensions (`Ctrl+Shift+X`), cari **Live Server** (oleh Ritwick Dey), klik **Install**.
3. Klik kanan `index.html` → **Open with Live Server**. Browser terbuka di `http://127.0.0.1:5500`
   dan otomatis refresh setiap kali file disimpan.

## Hal yang sering diubah

| Ingin mengubah…                  | Edit file / bagian                                         |
|----------------------------------|------------------------------------------------------------|
| Tambah / ubah / hapus produk     | `assets/js/produk.js` (hapus `contoh: true` di produk asli) |
| Warna & font                     | `assets/css/style.css` bagian 1 (`:root`)                  |
| Nomor WhatsApp untuk tombol pesan| `assets/js/main.js` bagian 1 (`NOMOR_WA`)                  |
| Teks halaman informasi           | Cari komentar `<!-- GANTI ISI INI -->` di file HTML        |
| Gambar                           | Cari komentar `<!-- GAMBAR: ... -->` di file HTML          |

Bila sebuah gambar belum ada, kotaknya menampilkan tulisan **"Foto belum ada: (nama file)"**
supaya Anda tahu file apa yang perlu ditaruh.

## Header & footer ditulis ulang di setiap file

**Kelebihan**
- Bisa dibuka tanpa server (klik dua kali file HTML pun jalan).
- Sederhana: tidak ada proses build, apa yang ditulis itulah yang tampil.
- Baik untuk SEO karena menu & footer langsung ada di HTML.

**Kekurangan**
- Mengubah menu/footer harus dilakukan di 15 file.
  Tips: pakai **Find & Replace di semua file** VS Code (`Ctrl+Shift+H`).
- Rawan lupa satu file sehingga tampilan antar halaman jadi tidak sama.

**Alternatif: memuat header/footer dengan `fetch()`**
Simpan header di `partials/header.html` dan footer di `partials/footer.html`, lalu di tiap halaman
cukup tulis `<div id="header"></div>` dan `<div id="footer"></div>`, kemudian:

```js
fetch('partials/header.html')
  .then((res) => res.text())
  .then((html) => { document.getElementById('header').innerHTML = html; });
```

Kekurangannya: hanya jalan lewat server (Live Server / hosting), **tidak** jalan bila file dibuka
langsung (`file://`), menu sedikit "berkedip" saat dimuat, dan tanda menu aktif harus diatur ulang
dengan JavaScript. Alternatif lain saat sudah memakai PHP: `<?php include 'header.php'; ?>`.

## Yang masih perlu dikerjakan

- Siapkan semua gambar (lihat daftar di atas / komentar `GAMBAR:` di HTML).
- Ganti produk contoh di `assets/js/produk.js` dengan produk asli.
- Ganti semua bagian `GANTI ISI INI`, terutama **nomor rekening** di `konfirmasi-transfer.html`
  dan testimoni (pakai testimoni asli pelanggan).
- Form newsletter baru validasi di browser, belum tersimpan → sambungkan ke backend PHP
  (lihat komentar `TODO` di `assets/js/main.js` bagian 5).
