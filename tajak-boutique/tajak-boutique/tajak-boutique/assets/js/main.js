// ==========================================================
// TAJAK BOUTIQUE - Script utama (dipakai SEMUA halaman)
// ----------------------------------------------------------
// Setiap bagian di bawah hanya berjalan bila elemen yang dibutuhkan
// ada di halaman, jadi file ini aman dipakai di semua halaman.
//
// DAFTAR ISI:
//   1. Pengaturan umum (nomor WhatsApp)
//   2. Menu hamburger & dropdown koleksi
//   3. Slideshow (khusus beranda)
//   4. Render produk di halaman koleksi
//   5. Form newsletter (footer)
//   6. Form konfirmasi transfer
//   7. Penanda gambar yang belum ada
// ==========================================================

// =========================================
// 1. PENGATURAN UMUM
// =========================================
// Nomor WhatsApp toko (format internasional, tanpa "+" dan tanpa spasi)
const NOMOR_WA = '6281958121931';

// Membuat link WhatsApp lengkap dengan pesan otomatis
function buatLinkWhatsApp(pesan) {
  return 'https://wa.me/' + NOMOR_WA + '?text=' + encodeURIComponent(pesan);
}

// Mengubah angka menjadi format Rupiah, contoh 189000 -> "Rp 189.000"
function formatRupiah(angka) {
  return 'Rp ' + Number(angka).toLocaleString('id-ID');
}


// =========================================
// 2. MENU HAMBURGER & DROPDOWN KOLEKSI
// =========================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const dropdowns = document.querySelectorAll('.nav-dropdown');

// Buka / tutup menu utama di HP
function aturMenu(buka) {
  if (!navToggle || !navMenu) return;
  navMenu.classList.toggle('open', buka);
  navToggle.setAttribute('aria-expanded', String(buka));
  navToggle.setAttribute('aria-label', buka ? 'Tutup menu' : 'Buka menu');
}

// Buka / tutup satu dropdown
function aturDropdown(dropdown, buka) {
  const tombol = dropdown.querySelector('.dropdown-toggle');
  dropdown.classList.toggle('open', buka);
  if (tombol) tombol.setAttribute('aria-expanded', String(buka));
}

function tutupSemuaDropdown() {
  dropdowns.forEach((dropdown) => aturDropdown(dropdown, false));
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const sedangTerbuka = navMenu.classList.contains('open');
    aturMenu(!sedangTerbuka);
  });

  // Saat layar dilebarkan ke ukuran desktop, tutup menu HP
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) aturMenu(false);
  });
}

dropdowns.forEach((dropdown) => {
  const tombol = dropdown.querySelector('.dropdown-toggle');
  if (!tombol) return;

  tombol.addEventListener('click', (event) => {
    event.stopPropagation();
    const sedangTerbuka = dropdown.classList.contains('open');
    tutupSemuaDropdown();
    aturDropdown(dropdown, !sedangTerbuka);
    // Di desktop, lepas fokus saat ditutup agar dropdown benar-benar hilang
    if (sedangTerbuka) tombol.blur();
  });
});

// Klik di luar navbar -> tutup dropdown dan menu HP
document.addEventListener('click', (event) => {
  if (!event.target.closest('.navbar')) {
    tutupSemuaDropdown();
    aturMenu(false);
  }
});

// Tombol Esc -> tutup semua
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    tutupSemuaDropdown();
    aturMenu(false);
  }
});


// =========================================
// 3. SLIDESHOW (hanya jalan bila ada elemen .hero)
// =========================================
const hero = document.querySelector('.hero');

if (hero) {
  const slides = hero.querySelectorAll('.slide');
  let slideAktif = 0;

  // Ganti gambar setiap 4 detik
  if (slides.length > 1) {
    setInterval(() => {
      slides[slideAktif].classList.remove('active');
      slideAktif = (slideAktif + 1) % slides.length;
      slides[slideAktif].classList.add('active');
    }, 4000);
  }
}


// =========================================
// 4. RENDER PRODUK DI HALAMAN KOLEKSI
// Grid diisi otomatis dari data di assets/js/produk.js
// sesuai atribut data-kategori pada <div id="produk-grid">.
// =========================================
const produkGrid = document.getElementById('produk-grid');

// Membuat satu kartu produk.
// Sengaja memakai createElement + textContent (bukan innerHTML)
// agar teks produk aman ditampilkan apa adanya.
function buatKartuProduk(produk) {
  const kartu = document.createElement('article');
  kartu.className = 'product-card';

  // --- Foto ---
  const wadahFoto = document.createElement('div');
  wadahFoto.className = 'product-image';

  const foto = document.createElement('img');
  foto.alt = produk.nama;
  foto.loading = 'lazy';
  pasangPenandaGambar(foto);    // pasang sebelum src diisi
  foto.src = produk.gambar;
  wadahFoto.appendChild(foto);

  if (produk.contoh) {
    const label = document.createElement('span');
    label.className = 'badge-contoh';
    label.textContent = 'Data contoh';
    wadahFoto.appendChild(label);
  }

  // --- Isi kartu ---
  const isi = document.createElement('div');
  isi.className = 'product-body';

  const nama = document.createElement('h2');
  nama.className = 'product-name';
  nama.textContent = produk.nama;
  isi.appendChild(nama);

  if (produk.keterangan) {
    const keterangan = document.createElement('p');
    keterangan.className = 'product-note';
    keterangan.textContent = produk.keterangan;
    isi.appendChild(keterangan);
  }

  const harga = document.createElement('p');
  harga.className = 'product-price';
  harga.textContent = formatRupiah(produk.harga);
  isi.appendChild(harga);

  const ukuran = document.createElement('p');
  ukuran.className = 'product-sizes';
  const labelUkuran = document.createElement('strong');
  labelUkuran.textContent = 'Ukuran: ';
  ukuran.appendChild(labelUkuran);
  ukuran.appendChild(document.createTextNode((produk.ukuran || []).join(', ') || '-'));
  isi.appendChild(ukuran);

  // --- Tombol WhatsApp ---
  const pesan =
    'Halo Tajak Boutique, saya ingin memesan:\n' +
    '*' + produk.nama + '*\n' +
    'Harga: ' + formatRupiah(produk.harga) + '\n' +
    'Ukuran: (tulis ukuran yang diinginkan)\n\n' +
    'Apakah stoknya masih tersedia?';

  const tombolWA = document.createElement('a');
  tombolWA.className = 'btn-wa';
  tombolWA.href = buatLinkWhatsApp(pesan);
  tombolWA.target = '_blank';
  tombolWA.rel = 'noopener';
  tombolWA.textContent = 'Pesan via WhatsApp';
  tombolWA.setAttribute('aria-label', 'Pesan ' + produk.nama + ' via WhatsApp');
  isi.appendChild(tombolWA);

  kartu.appendChild(wadahFoto);
  kartu.appendChild(isi);
  return kartu;
}

if (produkGrid) {
  const kategori = produkGrid.dataset.kategori;

  // produk.js harus dimuat SEBELUM main.js
  if (typeof PRODUK === 'undefined') {
    produkGrid.innerHTML = '<p class="empty-state">Data produk gagal dimuat. Pastikan file assets/js/produk.js ada.</p>';
  } else {
    const daftar = PRODUK.filter((produk) => produk.kategori === kategori);
    produkGrid.innerHTML = '';

    if (daftar.length === 0) {
      produkGrid.innerHTML = '<p class="empty-state">Belum ada produk di kategori ini. Silakan cek kembali nanti.</p>';
    } else {
      daftar.forEach((produk) => produkGrid.appendChild(buatKartuProduk(produk)));
    }
  }
}


// =========================================
// 5. FORM NEWSLETTER (footer)
// Validasi email di browser + tampilkan pesan sukses/gagal.
// Catatan: email BELUM disimpan ke mana pun.
// =========================================
const formNewsletter = document.getElementById('newsletter-form');
const inputEmail = document.getElementById('newsletter-email');
const pesanNewsletter = document.getElementById('newsletter-message');

function tampilkanPesan(elemen, teks, jenis) {
  if (!elemen) return;
  elemen.textContent = teks;
  elemen.className = 'form-message ' + jenis;   // jenis: 'success' atau 'error'
}

if (formNewsletter && inputEmail) {
  formNewsletter.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = inputEmail.value.trim();
    const formatEmailBenar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!formatEmailBenar) {
      inputEmail.classList.add('is-invalid');
      tampilkanPesan(pesanNewsletter, 'Format email tidak valid. Contoh: nama@email.com', 'error');
      inputEmail.focus();
      return;
    }

    // TODO (backend PHP): kirim email ke server agar tersimpan di database.
    // Contoh kode nanti (ganti blok "sukses" di bawah dengan ini):
    //
    //   fetch('api/newsletter.php', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //     body: 'email=' + encodeURIComponent(email)
    //   })
    //     .then((respon) => respon.json())
    //     .then((hasil) => {
    //       if (hasil.sukses) {
    //         tampilkanPesan(pesanNewsletter, 'Terima kasih! Email Anda sudah terdaftar.', 'success');
    //         formNewsletter.reset();
    //       } else {
    //         tampilkanPesan(pesanNewsletter, hasil.pesan || 'Gagal mendaftar, coba lagi.', 'error');
    //       }
    //     })
    //     .catch(() => tampilkanPesan(pesanNewsletter, 'Koneksi bermasalah, coba lagi nanti.', 'error'));
    //   return;

    // Sementara: anggap berhasil (hanya di sisi browser)
    inputEmail.classList.remove('is-invalid');
    tampilkanPesan(pesanNewsletter, 'Terima kasih! Anda akan menerima kabar terbaru dari Tajak Boutique.', 'success');
    formNewsletter.reset();
  });

  // Hapus tanda merah & pesan saat pengguna mengetik ulang
  inputEmail.addEventListener('input', () => {
    inputEmail.classList.remove('is-invalid');
    tampilkanPesan(pesanNewsletter, '', '');
  });
}


// =========================================
// 6. FORM KONFIRMASI TRANSFER
// Data form dirangkai menjadi pesan WhatsApp, lalu WhatsApp dibuka.
// =========================================
const formKonfirmasi = document.getElementById('konfirmasi-form');

if (formKonfirmasi) {
  const pesanKonfirmasi = document.getElementById('konfirmasi-message');

  formKonfirmasi.addEventListener('submit', (event) => {
    event.preventDefault();

    // Cek kolom wajib (yang punya atribut required)
    let adaYangKosong = false;
    formKonfirmasi.querySelectorAll('[required]').forEach((kolom) => {
      const kosong = kolom.value.trim() === '';
      kolom.classList.toggle('is-invalid', kosong);
      if (kosong) adaYangKosong = true;
    });

    if (adaYangKosong) {
      tampilkanPesan(pesanKonfirmasi, 'Mohon lengkapi semua kolom yang bertanda *.', 'error');
      return;
    }

    const data = new FormData(formKonfirmasi);
    const jumlah = Number(String(data.get('jumlah')).replace(/\D/g, ''));

    const pesan =
      'Halo Tajak Boutique, saya ingin konfirmasi transfer:\n\n' +
      'Nama: ' + data.get('nama') + '\n' +
      'No. WhatsApp: ' + data.get('telepon') + '\n' +
      'Pesanan: ' + data.get('pesanan') + '\n' +
      'Transfer ke: ' + data.get('bank') + '\n' +
      'Jumlah: ' + formatRupiah(jumlah) + '\n' +
      'Tanggal transfer: ' + data.get('tanggal') + '\n' +
      (data.get('catatan') ? 'Catatan: ' + data.get('catatan') + '\n' : '') +
      '\nBukti transfer saya lampirkan setelah pesan ini.';

    // TODO (backend PHP): simpan konfirmasi + upload foto bukti transfer ke server,
    // misalnya kirim FormData ke 'api/konfirmasi.php' dengan fetch().
    // Sementara, data dikirim lewat WhatsApp.
    window.open(buatLinkWhatsApp(pesan), '_blank', 'noopener');
    tampilkanPesan(pesanKonfirmasi, 'WhatsApp sedang dibuka. Jangan lupa kirim foto bukti transfer di chat tersebut.', 'success');
  });

  formKonfirmasi.addEventListener('input', (event) => {
    event.target.classList.remove('is-invalid');
  });
}


// =========================================
// 7. PENANDA GAMBAR YANG BELUM ADA
// Bila file gambar belum Anda taruh di folder assets/img/,
// kotak gambar menampilkan nama file yang dibutuhkan.
// =========================================
function tandaiGambarKosong(img) {
  const wadah = img.parentElement;
  img.classList.add('img-error');
  if (wadah) {
    wadah.classList.add('img-placeholder');
    wadah.setAttribute('data-file', img.getAttribute('src') || '');
  }
}

function pasangPenandaGambar(img) {
  img.addEventListener('error', () => tandaiGambarKosong(img), { once: true });
}

// Gambar yang ditulis langsung di HTML: bisa saja sudah gagal dimuat sebelum script ini jalan
document.querySelectorAll('img').forEach((img) => {
  if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) {
    tandaiGambarKosong(img);
  } else {
    pasangPenandaGambar(img);
  }
});
