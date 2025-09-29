export const templates = {
  // ----------------------
  // PERKULIAHAN & KELAS
  // ----------------------
  "1a_izin_absen": {
    inputs: [
      {
        name: "sapaanDosen",
        label: "Sapaan Dosen",
        type: "select",
        options: ["Bapak", "Ibu"],
        placeholder: "-- Pilih Sapaan --",
      },
      { name: "namaDosen", label: "Nama Dosen", type: "text" },
      { name: "namaMahasiswa", label: "Nama Mahasiswa", type: "text" },
      { name: "nimJurusan", label: "NIM & Jurusan", type: "text" },
      { name: "matkul", label: "Nama Mata Kuliah", type: "text" },
      { name: "hariTanggal", label: "Tanggal Izin", type: "text" },
      {
        name: "alasan",
        label: "Alasan Izin",
        type: "select",
        options: [
          "Sakit",
          "Keperluan Keluarga Mendesak",
          "Tugas/Acara Kampus Lainnya",
        ],
        placeholder: "-- Pilih Alasan --",
      },
    ],
    prompt: (i, style) => `
    Anda adalah seorang mahasiswa yang bertanggung jawab dan memahami etika.
    Tuliskan draf pesan WhatsApp kepada ${i.sapaanDosen} ${i.namaDosen} dari mahasiswa bernama ${i.namaMahasiswa} (${i.nimJurusan}).
    
    Konteks: Mahasiswa ini berhalangan hadir pada kelas '${i.matkul}' tanggal ${i.hariTanggal} karena ${i.alasan}. Pesan ini bertujuan untuk memberitahukan ketidakhadiran secara formal dan penuh tanggung jawab.

    Struktur pesan 4 paragraf yang diinginkan:
    1.  Salam pembuka (Assalamu’alaikum Wr. Wb. + permohonan maaf).
    2.  Perkenalkan diri secara singkat.
    3.  Sampaikan inti pesan: memberitahukan izin tidak dapat hadir dengan menyebutkan alasannya.
    4.  Tambahkan kalimat yang menunjukkan itikad baik, seperti "Apabila diperlukan, saya siap melampirkan surat keterangan."
    5.  Penutup: Terima kasih. Wassalamu’alaikum Wr. Wb. ${i.sapaanDosen}

    Terapkan gaya bahasa: ${
      style === "formal"
        ? "Sangat formal dan baku. Nada serius dan bertanggung jawab."
        : style === "semi-formal"
          ? "Sopan, jelas, dan to the point, tanpa terlalu kaku."
          : "Bahasa yang wajar, namun tetap menunjukkan rasa hormat dan keseriusan."
    }
    `,
  },

  "1b_konfirmasi_jadwal_pj": {
    inputs: [
      {
        name: "sapaanDosen",
        label: "Sapaan Dosen",
        type: "select",
        options: ["Bapak", "Ibu"],
        placeholder: "-- Pilih Sapaan --",
      },
      { name: "namaDosen", label: "Nama Dosen", type: "text" },
      { name: "namaPJ", label: "Nama Anda (PJ Kelas)", type: "text" },
      { name: "matkul", label: "Nama Mata Kuliah", type: "text" },
      { name: "hariTanggal", label: "Hari & Tanggal", type: "text" },
      { name: "jam", label: "Jam", type: "text" },
      { name: "ruangan", label: "Ruangan", type: "text" },
    ],
    prompt: (i, style) => `
    Anda adalah Penanggung Jawab (PJ) kelas yang sangat diplomatis dan hati-hati dalam berkomunikasi.
    Tuliskan draf pesan WhatsApp kepada ${i.sapaanDosen} ${i.namaDosen} dari ${i.namaPJ}, PJ mata kuliah '${i.matkul}'.
    
    Konteks: Sebagai perwakilan teman-teman sekelas, Anda perlu memastikan jadwal kuliah agar tidak ada miskomunikasi.

  
Struktur pesan 4 paragraf yang diinginkan:
    1.  Salam pembuka (Assalamu’alaikum Wr. Wb. + permohonan maaf).
    2.  Perkenalkan diri sebagai PJ kelas.
    3.  Inti pesan: Lakukan konfirmasi jadwal pada ${i.hariTanggal}, pukul ${i.jam} di ${i.ruangan}. Gunakan bahasa yang sangat halus, seperti "ingin memastikan kembali" atau "mohon konfirmasinya", BUKAN "mengingatkan". Tujuannya agar tidak terkesan menggurui.
    4.  Penutup: Terima kasih. Wassalamu’alaikum Wr. Wb. ${i.sapaanDosen}

    Terapkan gaya bahasa: ${
      style === "formal"
        ? "Formal, diplomatis, dan sangat berhati-hati dalam pemilihan kata."
        : style === "semi-formal"
          ? "Sopan dan profesional, namun terasa ramah sebagai perwakilan kelas."
          : "Bahasa yang akrab namun tetap menjaga batas hormat antara PJ dan dosen."
    }
    `,
  },
  "1c_klarifikasi_tugas": {
    inputs: [
      {
        name: "sapaanDosen",
        label: "Sapaan Dosen",
        type: "select",
        options: ["Bapak", "Ibu"],
        placeholder: "-- Pilih Sapaan --",
      },
      { name: "namaDosen", label: "Nama Dosen", type: "text" },
      { name: "namaMahasiswa", label: "Nama Mahasiswa", type: "text" },
      { name: "nimJurusan", label: "NIM & Jurusan", type: "text" },
      { name: "matkul", label: "Nama Mata Kuliah", type: "text" },
      { name: "pertanyaan", label: "Pertanyaan/Klarifikasi", type: "text" },
    ],
    prompt: (i, style) => `
    Anda adalah seorang mahasiswa teladan yang pandai menyusun kata-kata.
    Tuliskan sebuah draf pesan WhatsApp kepada ${i.sapaanDosen} ${i.namaDosen} dari mahasiswa bernama ${i.namaMahasiswa} (${i.nimJurusan}).
    
    Konteks: Mahasiswa ini merasa sedikit bingung mengenai materi atau tugas '${i.pertanyaan}' di mata kuliah '${i.matkul}' dan ingin bertanya dengan sangat sopan.

    Struktur pesan 4 paragraf yang diinginkan:
    1. Salam pembuka (Assalamu’alaikum Wr. Wb. + permohonan maaf). dan permohonan maaf yang tulus karena mengganggu waktu ${i.sapaanDosen}.
    2.  Perkenalkan diri dengan jelas.
    3.  Sampaikan inti pertanyaan dengan bahasa yang rendah hati, misalnya diawali dengan "izin bertanya" atau "mohon pencerahannya".
    4. Penutup: Terima kasih. Wassalamu’alaikum Wr. Wb. ${i.sapaanDosen}

    Terapkan gaya bahasa: ${
      style === "formal"
        ? "Sangat formal dan baku. Gunakan kalimat yang lengkap dan terstruktur."
        : style === "semi-formal"
          ? "Sopan dan bersahabat, namun tetap menjaga jarak profesional. Sedikit lebih luwes."
          : "Bahasa sehari-hari yang tetap sangat sopan, seolah berbicara kepada senior yang dihormati."
    }
    `,
  },

  // ----------------------
  // ADMINISTRASI AKADEMIK
  // ----------------------
  "2a_konsultasi_pa": {
    inputs: [
      {
        name: "sapaanDosen",
        label: "Sapaan Dosen",
        type: "select",
        options: ["Bapak", "Ibu"],
        placeholder: "-- Pilih Sapaan --",
      },
      { name: "namaDosenPA", label: "Nama Dosen PA", type: "text" },
      { name: "namaMahasiswa", label: "Nama Mahasiswa", type: "text" },
      { name: "nimJurusan", label: "NIM & Jurusan", type: "text" },
      { name: "topik", label: "Topik Konsultasi", type: "text" },
    ],
    prompt: (i, style) => `
    Anda adalah mahasiswa yang sedang membutuhkan bimbingan akademik dari Dosen Pembimbing Akademik (PA).
    Tuliskan draf pesan WhatsApp kepada ${i.sapaanDosen} ${i.namaDosenPA} dari mahasiswa perwaliannya, ${i.namaMahasiswa} (${i.nimJurusan}).
    
    Konteks: Mahasiswa ini perlu berdiskusi mengenai '${i.topik}' dan ingin meminta waktu dosen.

Struktur pesan 4 paragraf yang diinginkan:
    1.  Salam pembuka (Assalamu’alaikum Wr. Wb. + permohonan maaf).
    2.  Perkenalkan diri sebagai mahasiswa perwalian.
    3.  Sampaikan niat untuk memohon waktu bimbingan. Penting: tanyakan ketersediaan waktu ${i.sapaanDosen} secara fleksibel, jangan menyodorkan jadwal.
    4.  Penutup: Terima kasih. Wassalamu’alaikum Wr. Wb. ${i.sapaanDosen}

       Terapkan gaya bahasa: ${
         style === "formal"
           ? "Sangat formal dan baku. Gunakan kalimat yang lengkap dan terstruktur."
           : style === "semi-formal"
             ? "Sopan dan bersahabat, namun tetap menjaga jarak profesional. Sedikit lebih luwes."
             : "Bahasa sehari-hari yang tetap sangat sopan, seolah berbicara kepada senior yang dihormati."
       }
    `,
  },

  "2b_minta_rekomendasi": {
    inputs: [
      {
        name: "sapaanDosen",
        label: "Sapaan Dosen",
        type: "select",
        options: ["Bapak", "Ibu"],
        placeholder: "-- Pilih Sapaan --",
      },
      { name: "namaDosen", label: "Nama Dosen", type: "text" },
      { name: "namaMahasiswa", label: "Nama Mahasiswa", type: "text" },
      { name: "nimJurusan", label: "NIM & Jurusan", type: "text" },
      {
        name: "keperluan",
        label: "Keperluan (Beasiswa/Magang/etc)",
        type: "text",
      },
    ],
    prompt: (i, style) => `
    Anda adalah mahasiswa yang sangat menghormati dosen dan hendak meminta bantuan penting.
    Tuliskan draf pesan WhatsApp kepada ${i.sapaanDosen} ${i.namaDosen} dari mahasiswa bernama ${i.namaMahasiswa} (${i.nimJurusan}).
    
    Konteks: Mahasiswa ini dengan segala kerendahan hati ingin memohon surat rekomendasi untuk keperluan '${i.keperluan}'. Ini adalah permintaan besar yang membutuhkan kesediaan waktu dosen.

    Struktur pesan 4 paragraf yang diinginkan:
    1.  Salam pembuka (Assalamu’alaikum Wr. Wb. + permohonan maaf).
    2.  Perkenalkan diri.
    3.  Sampaikan permohonan dengan bahasa yang halus dan penuh penghargaan.
    4.  Tunjukkan proaktivitas dengan menawarkan kesiapan untuk mengirimkan dokumen pendukung (seperti CV atau transkrip) untuk memudahkan ${i.sapaanDosen}.
    5.  Penutup: Terima kasih. Wassalamu’alaikum Wr. Wb. ${i.sapaanDosen}.

       Terapkan gaya bahasa: ${
         style === "formal"
           ? "Sangat formal dan baku. Gunakan kalimat yang lengkap dan terstruktur."
           : style === "semi-formal"
             ? "Sopan dan bersahabat, namun tetap menjaga jarak profesional. Sedikit lebih luwes."
             : "Bahasa sehari-hari yang tetap sangat sopan, seolah berbicara kepada senior yang dihormati."
       }
    `,
  },
  "2c_minta_invite_grup": {
    inputs: [
      {
        name: "sapaanDosen",
        label: "Sapaan Dosen",
        type: "select",
        options: ["Bapak", "Ibu"],
        placeholder: "-- Pilih Sapaan --",
      },
      { name: "namaDosen", label: "Nama Dosen", type: "text" },
      { name: "namaMahasiswa", label: "Nama Mahasiswa", type: "text" },
      { name: "nimJurusan", label: "NIM & Jurusan", type: "text" },
      { name: "matkul", label: "Nama Mata Kuliah", type: "text" },
    ],
    prompt: (i, style) => `
    Anda adalah mahasiswa baru atau mahasiswa yang baru mengambil mata kuliah dan ingin memastikan tidak ketinggalan informasi.
    Tuliskan draf pesan WhatsApp kepada ${i.sapaanDosen} ${i.namaDosen} dari mahasiswa bernama ${i.namaMahasiswa} (${i.nimJurusan}).
    
    Konteks: Mahasiswa ini adalah peserta kelas '${i.matkul}' namun belum tergabung dalam grup WhatsApp kelas, sehingga khawatir akan tertinggal informasi penting.

Struktur pesan 4 paragraf yang diinginkan:
    1.  Salam pembuka (Assalamu’alaikum Wr. Wb. + permohonan maaf).
    2.  Perkenalkan diri sebagai mahasiswa mata kuliah tersebut.
    3.  Sampaikan inti pesan: dengan sopan memohon izin untuk dimasukkan ke dalam grup WhatsApp mata kuliah '${i.matkul}'.
    4.  Tutup dengan ucapan terima kasih atas bantuan dan perhatian dari ${i.sapaanDosen}.

    Terapkan gaya bahasa: ${
      style === "formal"
        ? "Sangat formal dan baku, menunjukkan keseriusan dalam mengikuti perkuliahan."
        : style === "semi-formal"
          ? "Sopan, ramah, dan to the point."
          : "Bahasa yang santai namun tetap jelas menunjukkan rasa hormat."
    }
    `,
  },

  // ----------------------
  // BIMBINGAN SKRIPSI/TA
  // ----------------------
  "3a_kontak_awal": {
    inputs: [
      {
        name: "sapaanDosen",
        label: "Sapaan Dosen",
        type: "select",
        options: ["Bapak", "Ibu"],
        placeholder: "-- Pilih Sapaan --",
      },
      { name: "namaDosen", label: "Nama Dosen Pembimbing", type: "text" },
      { name: "namaMahasiswa", label: "Nama Mahasiswa", type: "text" },
      { name: "nimJurusan", label: "NIM & Jurusan", type: "text" },
      { name: "judulSkripsi", label: "Judul/Topik Skripsi", type: "text" },
    ],
    prompt: (i, style) => `
    Anda adalah mahasiswa yang baru memulai perjalanan skripsi dan antusias untuk bimbingan.
    Tuliskan draf pesan WhatsApp kepada ${i.sapaanDosen} ${i.namaDosen} dari ${i.namaMahasiswa} (${i.nimJurusan}).
    
    Konteks: Ini adalah pesan pertama kepada dosen pembimbing yang baru ditunjuk. Tujuannya adalah untuk memperkenalkan diri secara resmi dan memulai proses bimbingan.

Struktur pesan 4 paragraf yang diinginkan:
    1.  Salam pembuka (Assalamu’alaikum Wr. Wb. + permohonan maaf).
    2.  Perkenalkan diri dan sebutkan bahwa ${i.sapaanDosen} adalah dosen pembimbing skripsinya.
    3.  Sebutkan judul skripsi ('${i.judulSkripsi}') dan sampaikan keinginan untuk memulai proses bimbingan.
    4.  Mohon arahan dan tanyakan ketersediaan waktu ${i.sapaanDosen} untuk pertemuan perdana.
    5.  Tutup dengan ucapan terima kasih atas kesediaan ${i.sapaanDosen} untuk membimbing. Wassalamu’alaikum Wr. Wb.

       Terapkan gaya bahasa: ${
         style === "formal"
           ? "Sangat formal dan baku. Gunakan kalimat yang lengkap dan terstruktur."
           : style === "semi-formal"
             ? "Sopan dan bersahabat, namun tetap menjaga jarak profesional. Sedikit lebih luwes."
             : "Bahasa sehari-hari yang tetap sangat sopan, seolah berbicara kepada senior yang dihormati."
       }}.
    `,
  },

  "3b_jadwal_bimbingan": {
    inputs: [
      {
        name: "sapaanDosen",
        label: "Sapaan Dosen",
        type: "select",
        options: ["Bapak", "Ibu"],
        placeholder: "-- Pilih Sapaan --",
      },
      { name: "namaDosen", label: "Nama Dosen Pembimbing", type: "text" },
      { name: "namaMahasiswa", label: "Nama Mahasiswa", type: "text" },
      { name: "nimJurusan", label: "NIM & Jurusan", type: "text" },
      { name: "progresTerakhir", label: "Progres/Topik Bahasan", type: "text" },
    ],
    prompt: (i, style) => `
    Anda adalah mahasiswa bimbingan yang ingin melaporkan progres dan meminta arahan lebih lanjut.
    Tuliskan draf pesan WhatsApp kepada ${i.sapaanDosen} ${i.namaDosen} dari mahasiswa bimbingannya, ${i.namaMahasiswa}.
    
    Konteks: Mahasiswa ini ingin menjadwalkan sesi bimbingan rutin untuk membahas progres terkini, yaitu '${i.progresTerakhir}'.

Struktur pesan 4 paragraf yang diinginkan:
    1.  Salam pembuka (Assalamu’alaikum Wr. Wb. + permohonan maaf).
    2.  Sebutkan identitas sebagai mahasiswa bimbingan.
    3.  Sampaikan keinginan untuk bimbingan terkait progres terbaru.
    4.  Tanyakan ketersediaan waktu ${i.sapaanDosen} dengan sangat fleksibel.
    5.   Penutup: Terima kasih. Wassalamu’alaikum Wr. Wb. ${i.sapaanDosen}

       Terapkan gaya bahasa: ${
         style === "formal"
           ? "Sangat formal dan baku. Gunakan kalimat yang lengkap dan terstruktur."
           : style === "semi-formal"
             ? "Sopan dan bersahabat, namun tetap menjaga jarak profesional. Sedikit lebih luwes."
             : "Bahasa sehari-hari yang tetap sangat sopan, seolah berbicara kepada senior yang dihormati."
       }
    `,
  },

  "3c_minta_ttd": {
    inputs: [
      {
        name: "sapaanDosen",
        label: "Sapaan Dosen",
        type: "select",
        options: ["Bapak", "Ibu"],
        placeholder: "-- Pilih Sapaan --",
      },
      {
        name: "namaDosen",
        label: "Nama Dosen Pembimbing/Penguji",
        type: "text",
      },
      { name: "namaMahasiswa", label: "Nama Mahasiswa", type: "text" },
      { name: "nimJurusan", label: "NIM & Jurusan", type: "text" },
      { name: "dokumen", label: "Nama Dokumen", type: "text" },
    ],
    prompt: (i, style) => `
    Anda adalah mahasiswa yang berada di tahap akhir sebuah proses dan memerlukan validasi formal.
    Tuliskan draf pesan WhatsApp kepada ${i.sapaanDosen} ${i.namaDosen} dari mahasiswa ${i.namaMahasiswa}.
    
    Konteks: Mahasiswa ini perlu meminta tanda tangan untuk dokumen penting, yaitu '${i.dokumen}'.

Struktur pesan 4 paragraf yang diinginkan:
    1.  Salam pembuka (Assalamu’alaikum Wr. Wb. + permohonan maaf).
    2.  Perkenalkan diri.
    3.  Sampaikan dengan hormat permohonan untuk meminta tanda tangan.
    4.  Tanyakan kapan dan di mana sekiranya bisa bertemu ${i.sapaanDosen} untuk keperluan tersebut.
    5.   Penutup: Terima kasih. Wassalamu’alaikum Wr. Wb. ${i.sapaanDosen}

       Terapkan gaya bahasa: ${
         style === "formal"
           ? "Sangat formal dan baku. Gunakan kalimat yang lengkap dan terstruktur."
           : style === "semi-formal"
             ? "Sopan dan bersahabat, namun tetap menjaga jarak profesional. Sedikit lebih luwes."
             : "Bahasa sehari-hari yang tetap sangat sopan, seolah berbicara kepada senior yang dihormati."
       }
    `,
  },
};
