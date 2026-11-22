// ==========================================================
// TAJAK BOUTIQUE - Data produk
// ----------------------------------------------------------
// Cukup edit FILE INI untuk menambah / mengubah / menghapus produk.
// Produk otomatis tampil di halaman koleksi sesuai "kategori"-nya.
//
// Nilai "kategori" yang dipakai:
//   "atasan"    -> koleksi-atasan.html
//   "bawahan"   -> koleksi-bawahan.html
//   "tas"       -> koleksi-tas.html
//   "alas-kaki" -> koleksi-alas-kaki.html
//
// Arti setiap kolom:
//   kategori   : salah satu dari 4 nilai di atas
//   nama       : nama produk (dipakai juga di pesan WhatsApp)
//   harga      : angka TANPA titik/Rp, contoh 189000 -> tampil "Rp 189.000"
//   ukuran     : daftar ukuran, contoh ["S", "M", "L"] atau ["All Size"]
//   gambar     : lokasi file foto, taruh fotonya di folder assets/img/produk/
//   keterangan : (opsional) teks singkat, misal bahan. Boleh dihapus.
//   contoh     : true = memunculkan label "DATA CONTOH" di kartu.
//                HAPUS baris ini setelah diganti dengan produk asli.
//
// Tips: salin satu blok { ... }, tempel di bawahnya, lalu ubah isinya.
//       Jangan lupa tanda koma (,) di antara blok.
// ==========================================================

const PRODUK = [

  // ========================================================
  // DATA CONTOH - KATEGORI ATASAN (ganti dengan produk asli)
  // Foto: assets/img/produk/atasan-1.jpg s.d. atasan-5.jpg
  // ========================================================
  {
    kategori: "atasan",
    nama: "Blouse Satin Midnight",
    harga: 189000,
    ukuran: ["S", "M", "L", "XL"],
    gambar: "assets/img/produk/atasan-1.jpg",
    keterangan: "Satin premium, jatuh dan lembut",
    contoh: true
  },
  {
    kategori: "atasan",
    nama: "Kemeja Linen Ivory",
    harga: 215000,
    ukuran: ["S", "M", "L"],
    gambar: "assets/img/produk/atasan-2.jpg",
    keterangan: "Linen adem untuk sehari-hari",
    contoh: true
  },
  {
    kategori: "atasan",
    nama: "Tunik Brokat Emas",
    harga: 265000,
    ukuran: ["M", "L", "XL"],
    gambar: "assets/img/produk/atasan-3.jpg",
    keterangan: "Cocok untuk acara spesial",
    contoh: true
  },
  {
    kategori: "atasan",
    nama: "Atasan Rajut Lengan Balon",
    harga: 159000,
    ukuran: ["All Size"],
    gambar: "assets/img/produk/atasan-4.jpg",
    keterangan: "Rajut halus, muat sampai L",
    contoh: true
  },
  {
    kategori: "atasan",
    nama: "Outer Kimono Motif",
    harga: 199000,
    ukuran: ["All Size"],
    gambar: "assets/img/produk/atasan-5.jpg",
    keterangan: "Rayon motif eksklusif",
    contoh: true
  },

  // ========================================================
  // DATA CONTOH - KATEGORI BAWAHAN (ganti dengan produk asli)
  // Foto: assets/img/produk/bawahan-1.jpg s.d. bawahan-5.jpg
  // ========================================================
  {
    kategori: "bawahan",
    nama: "Celana Kulot Plisket",
    harga: 145000,
    ukuran: ["All Size"],
    gambar: "assets/img/produk/bawahan-1.jpg",
    keterangan: "Pinggang karet, nyaman dipakai",
    contoh: true
  },
  {
    kategori: "bawahan",
    nama: "Rok Satin Midi",
    harga: 175000,
    ukuran: ["S", "M", "L"],
    gambar: "assets/img/produk/bawahan-2.jpg",
    keterangan: "Potongan A-line, panjang 75 cm",
    contoh: true
  },
  {
    kategori: "bawahan",
    nama: "Celana Highwaist Bahan",
    harga: 189000,
    ukuran: ["S", "M", "L", "XL"],
    gambar: "assets/img/produk/bawahan-3.jpg",
    keterangan: "Bahan semi wool, tidak mudah kusut",
    contoh: true
  },
  {
    kategori: "bawahan",
    nama: "Rok Plisket Panjang",
    harga: 155000,
    ukuran: ["All Size"],
    gambar: "assets/img/produk/bawahan-4.jpg",
    keterangan: "Plisket rapi, panjang 90 cm",
    contoh: true
  },
  {
    kategori: "bawahan",
    nama: "Celana Jeans Wide Leg",
    harga: 229000,
    ukuran: ["27", "28", "29", "30", "31", "32"],
    gambar: "assets/img/produk/bawahan-5.jpg",
    keterangan: "Denim tebal, warna tidak mudah pudar",
    contoh: true
  },

  // ========================================================
  // DATA CONTOH - KATEGORI TAS (ganti dengan produk asli)
  // Foto: assets/img/produk/tas-1.jpg s.d. tas-4.jpg
  // ========================================================
  {
    kategori: "tas",
    nama: "Tote Bag Kulit Sintetis",
    harga: 279000,
    ukuran: ["32 x 28 x 12 cm"],
    gambar: "assets/img/produk/tas-1.jpg",
    keterangan: "Muat laptop 13 inci",
    contoh: true
  },
  {
    kategori: "tas",
    nama: "Sling Bag Mini Quilted",
    harga: 189000,
    ukuran: ["20 x 13 x 6 cm"],
    gambar: "assets/img/produk/tas-2.jpg",
    keterangan: "Tali rantai bisa dilepas",
    contoh: true
  },
  {
    kategori: "tas",
    nama: "Clutch Pesta Mutiara",
    harga: 225000,
    ukuran: ["22 x 12 cm"],
    gambar: "assets/img/produk/tas-3.jpg",
    keterangan: "Hiasan mutiara sintetis",
    contoh: true
  },
  {
    kategori: "tas",
    nama: "Shoulder Bag Anyaman",
    harga: 249000,
    ukuran: ["30 x 20 x 10 cm"],
    gambar: "assets/img/produk/tas-4.jpg",
    keterangan: "Anyaman pandan buatan perajin lokal",
    contoh: true
  },

  // ========================================================
  // DATA CONTOH - KATEGORI ALAS KAKI (ganti dengan produk asli)
  // Foto: assets/img/produk/alas-kaki-1.jpg s.d. alas-kaki-5.jpg
  // ========================================================
  {
    kategori: "alas-kaki",
    nama: "Flat Shoes Pita",
    harga: 165000,
    ukuran: ["36", "37", "38", "39", "40"],
    gambar: "assets/img/produk/alas-kaki-1.jpg",
    keterangan: "Sol empuk anti licin",
    contoh: true
  },
  {
    kategori: "alas-kaki",
    nama: "Heels Block 5 cm",
    harga: 219000,
    ukuran: ["36", "37", "38", "39"],
    gambar: "assets/img/produk/alas-kaki-2.jpg",
    keterangan: "Hak kotak, stabil untuk kerja",
    contoh: true
  },
  {
    kategori: "alas-kaki",
    nama: "Sandal Selop Kulit",
    harga: 139000,
    ukuran: ["37", "38", "39", "40"],
    gambar: "assets/img/produk/alas-kaki-3.jpg",
    keterangan: "Kulit sapi asli",
    contoh: true
  },
  {
    kategori: "alas-kaki",
    nama: "Sneakers Putih Klasik",
    harga: 259000,
    ukuran: ["36", "37", "38", "39", "40", "41"],
    gambar: "assets/img/produk/alas-kaki-4.jpg",
    keterangan: "Mudah dipadukan dengan outfit apa pun",
    contoh: true
  },
  {
    kategori: "alas-kaki",
    nama: "Mules Mutiara",
    harga: 189000,
    ukuran: ["36", "37", "38", "39"],
    gambar: "assets/img/produk/alas-kaki-5.jpg",
    keterangan: "Aksen mutiara di bagian depan",
    contoh: true
  }

];
