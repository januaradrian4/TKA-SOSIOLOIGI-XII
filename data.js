// ============================================================
// TKA SOSIOLOGI — DATA.JS
// HAQI PSIKO UI
// Versi Materi Lengkap & Terstruktur (32 Topik + Quick Check 4 Opsi)
// ============================================================

const TKA_DATA = {

  // ==========================================================
  // META
  // ==========================================================

  meta: {
    title: "TKA Sosiologi",
    subtitle: "HAQI PSIKO UI — Interactive Study Hub",
    description:
      "Modul belajar Sosiologi SMA yang disusun secara sistematis berdasarkan indikator TKA. Materi mencakup konsep dasar, interaksi sosial, kelompok sosial, penelitian sosial, konflik, ketidaksetaraan, perubahan sosial, globalisasi, serta strategi mengerjakan soal berbasis kasus.",
    materialCount: 32,
    flashcardCount: 54,
    questionCount: 32,
    sourceNote:
      "Materi disusun sebagai bahan belajar berdasarkan kisi-kisi TKA Sosiologi."
  },


  // ==========================================================
  // SECTIONS
  // ==========================================================

  sections: [
    {
      id: "A",
      title: "Konsep Dasar Sosiologi",
      description: "Memahami pengertian, objek kajian, ciri ilmu sosiologi, nilai, norma, dan fenomena sosial.",
      materials: [1, 2]
    },
    {
      id: "B",
      title: "Interaksi dan Proses Sosial",
      description: "Mempelajari interaksi sosial, kontak, komunikasi, proses asosiatif dan disosiatif.",
      materials: [3, 4, 5]
    },
    {
      id: "C",
      title: "Kelompok Sosial dan Masyarakat Multikultural",
      description: "Mempelajari kelompok sosial, jenis kelompok, keberagaman, toleransi, inklusivitas, dan hubungan antarkelompok.",
      materials: [6, 7, 8]
    },
    {
      id: "D",
      title: "Konflik, Integrasi, dan Perdamaian",
      description: "Menganalisis penyebab konflik, bentuk konflik, penyelesaian konflik, integrasi, dan pembangunan perdamaian.",
      materials: [9, 10, 11]
    },
    {
      id: "E",
      title: "Penelitian Sosial",
      description: "Mempelajari seluruh proses penelitian sosial dari perumusan masalah sampai interpretasi data.",
      materials: [12, 13, 14, 15, 16, 17, 18]
    },
    {
      id: "F",
      title: "Ketidaksetaraan dan Permasalahan Sosial",
      description: "Menganalisis ketimpangan, stratifikasi, diskriminasi, marginalisasi, kesetaraan, dan masalah sosial.",
      materials: [19, 20, 21, 22, 23]
    },
    {
      id: "G",
      title: "Perubahan Sosial",
      description: "Memahami konsep, bentuk, faktor pendorong, faktor penghambat, serta dampak perubahan sosial.",
      materials: [24, 25, 26, 27]
    },
    {
      id: "H",
      title: "Globalisasi dan Sikap Kritis",
      description: "Menganalisis globalisasi, dampaknya, masalah sosial akibat globalisasi, literasi digital, dan penguatan budaya lokal.",
      materials: [28, 29, 30, 31, 32]
    }
  ],


  // ==========================================================
  // MATERIALS
  // ==========================================================

  materials: [

    // 1. PENGERTIAN SOSIOLOGI
    {
      id: 1,
      section: "A",
      sectionTitle: "Konsep Dasar Sosiologi",
      title: "Pengertian, Objek, dan Ruang Lingkup Sosiologi",
      overview: "Sosiologi adalah ilmu yang mempelajari masyarakat, hubungan sosial, pola interaksi, proses sosial, struktur sosial, serta perubahan yang terjadi dalam kehidupan masyarakat.",
      learningGoal: [
        "Memahami pengertian sosiologi.",
        "Membedakan objek material dan objek formal.",
        "Memahami hubungan individu dan masyarakat.",
        "Mengidentifikasi fenomena sosial.",
        "Membedakan masalah sosial dan fenomena sosial."
      ],
      topics: [
        {
          title: "Pengertian Sosiologi",
          content: "Sosiologi berasal dari kata socius yang berarti kawan atau masyarakat dan logos yang berarti ilmu atau pengetahuan. Secara sederhana, sosiologi adalah ilmu yang mempelajari kehidupan masyarakat serta hubungan sosial yang terjadi di dalamnya."
        },
        {
          title: "Sosiologi Tidak Sekadar Mempelajari Orang",
          content: "Sosiologi tidak hanya bertanya tentang siapa yang melakukan suatu tindakan, tetapi juga mengapa tindakan tersebut terjadi, bagaimana hubungan sosial memengaruhinya, bagaimana masyarakat memberikan respons, serta apa dampaknya terhadap kehidupan sosial."
        },
        {
          title: "Objek Material",
          content: "Objek material sosiologi adalah masyarakat dan berbagai fenomena yang terjadi di dalam masyarakat, seperti kemiskinan, konflik, urbanisasi, perubahan gaya hidup, ketimpangan, dan perubahan sosial."
        },
        {
          title: "Objek Formal",
          content: "Objek formal adalah sudut pandang sosiologi dalam melihat masyarakat, terutama hubungan sosial, interaksi, proses sosial, struktur sosial, serta pola hubungan antarmanusia."
        },
        {
          title: "Individu dan Masyarakat",
          content: "Individu dan masyarakat memiliki hubungan timbal balik. Masyarakat memengaruhi individu melalui nilai, norma, budaya, pendidikan, dan lingkungan. Sebaliknya, tindakan individu juga dapat memengaruhi perubahan masyarakat."
        },
        {
          title: "Fenomena Sosial",
          content: "Fenomena sosial adalah gejala atau peristiwa yang terjadi dalam kehidupan masyarakat dan berkaitan dengan hubungan sosial. Contohnya adalah bullying, urbanisasi, kemiskinan, perubahan gaya hidup, konflik antarkelompok, dan penggunaan media sosial."
        },
        {
          title: "Masalah Sosial",
          content: "Masalah sosial adalah kondisi sosial yang dianggap mengganggu kehidupan masyarakat, bertentangan dengan nilai yang berlaku, dan membutuhkan penyelesaian. Contohnya kemiskinan, pengangguran, kriminalitas, diskriminasi, dan konflik."
        }
      ],
      keywords: ["sosiologi", "masyarakat", "objek material", "objek formal", "fenomena sosial", "masalah sosial"],
      tkaFocus: "Jika diberikan sebuah kasus, tentukan konsep sosiologi yang paling tepat dengan melihat hubungan sosial, penyebab sosial, pola interaksi, dan dampaknya.",
      warning: "Jangan hanya melihat peristiwa secara umum. Soal TKA biasanya meminta konsep sosial yang menjelaskan mengapa dan bagaimana suatu fenomena terjadi.",
      example: "Banyak siswa mulai berkomunikasi melalui grup chat sehingga interaksi tatap muka berkurang. Kasus tersebut dapat dianalisis sebagai fenomena sosial karena menunjukkan perubahan pola hubungan sosial.",
      quickCheck: {
        question: "Apa fokus utama sosiologi?",
        options: [
          "Mempelajari struktur dan fungsi tubuh manusia.",
          "Mempelajari masyarakat dan hubungan, proses, serta pola sosial yang terjadi di dalamnya.",
          "Mempelajari pergerakan benda, energi, dan gaya.",
          "Mempelajari perubahan zat dan reaksi kimia."
        ],
        answerIndex: 1,
        explanation: "Sosiologi berfokus pada masyarakat, hubungan sosial, proses sosial, pola interaksi, struktur sosial, dan perubahan sosial."
      }
    },

    // 2. NILAI DAN NORMA
    {
      id: 2,
      section: "A",
      sectionTitle: "Konsep Dasar Sosiologi",
      title: "Nilai Sosial, Norma Sosial, dan Keteraturan Sosial",
      overview: "Nilai dan norma merupakan unsur penting yang mengatur perilaku manusia agar kehidupan masyarakat memiliki keteraturan.",
      topics: [
        {
          title: "Nilai Sosial",
          content: "Nilai sosial adalah anggapan masyarakat mengenai sesuatu yang dianggap baik, benar, penting, berharga, atau pantas. Nilai menjadi dasar dalam menentukan apakah suatu tindakan dianggap baik atau buruk."
        },
        {
          title: "Contoh Nilai Sosial",
          content: "Kejujuran, tanggung jawab, gotong royong, keadilan, kesopanan, solidaritas, dan toleransi merupakan contoh nilai sosial."
        },
        {
          title: "Norma Sosial",
          content: "Norma sosial adalah aturan atau pedoman perilaku yang digunakan masyarakat untuk mengatur tindakan anggotanya. Norma biasanya berasal dari nilai yang dianggap penting."
        },
        {
          title: "Hubungan Nilai dan Norma",
          content: "Nilai merupakan sesuatu yang dianggap penting atau baik, sedangkan norma merupakan aturan perilaku yang dibuat berdasarkan nilai tersebut. Misalnya nilai kejujuran dapat diwujudkan melalui norma larangan berbohong."
        },
        {
          title: "Norma Berdasarkan Tingkat Kekuatan",
          content: "Norma dapat dibedakan menjadi cara (usage), kebiasaan (folkways), tata kelakuan (mores), dan adat istiadat (custom). Semakin tinggi tingkatnya, semakin kuat sanksi sosial yang biasanya diberikan."
        },
        {
          title: "Fungsi Norma",
          content: "Norma berfungsi mengatur perilaku, menciptakan keteraturan, menjadi pedoman bertindak, serta memberikan batas mengenai perilaku yang dapat diterima masyarakat."
        },
        {
          title: "Sanksi Sosial",
          content: "Pelanggaran norma dapat menimbulkan sanksi. Sanksi dapat berupa teguran, celaan, pengucilan, hukuman sosial, maupun hukuman formal sesuai jenis norma yang dilanggar."
        }
      ],
      keywords: ["nilai sosial", "norma sosial", "keteraturan", "sanksi", "usage", "folkways", "mores", "custom"],
      tkaFocus: "Bedakan sesuatu yang dianggap baik atau penting dengan aturan konkret yang mengatur perilaku.",
      warning: "Nilai dan norma saling berhubungan tetapi bukan istilah yang sama.",
      quickCheck: {
        question: "Apa perbedaan nilai dan norma?",
        options: [
          "Nilai merupakan hukuman, sedangkan norma merupakan penghargaan.",
          "Nilai hanya berlaku untuk individu, sedangkan norma hanya berlaku untuk kelompok.",
          "Nilai adalah sesuatu yang dianggap baik atau penting, sedangkan norma adalah aturan perilaku berdasarkan nilai tersebut.",
          "Nilai merupakan aturan tertulis, sedangkan norma merupakan kebiasaan pribadi."
        ],
        answerIndex: 2,
        explanation: "Nilai merupakan anggapan mengenai sesuatu yang baik, benar, penting, atau berharga. Norma merupakan aturan atau pedoman perilaku yang bersumber dari nilai tersebut."
      }
    },

    // 3. INTERAKSI SOSIAL
    {
      id: 3,
      section: "B",
      sectionTitle: "Interaksi dan Proses Sosial",
      title: "Interaksi Sosial",
      overview: "Interaksi sosial adalah hubungan timbal balik antara individu dengan individu, individu dengan kelompok, atau kelompok dengan kelompok.",
      topics: [
        {
          title: "Pengertian",
          content: "Interaksi sosial terjadi ketika terdapat hubungan timbal balik dan respons antara pihak-pihak yang berinteraksi."
        },
        {
          title: "Syarat Interaksi Sosial",
          content: "Dua syarat utama interaksi sosial adalah kontak sosial dan komunikasi."
        },
        {
          title: "Kontak Sosial",
          content: "Kontak sosial adalah hubungan awal yang memungkinkan terjadinya interaksi. Kontak dapat bersifat primer maupun sekunder."
        },
        {
          title: "Kontak Primer",
          content: "Kontak primer terjadi ketika pihak yang berinteraksi bertemu atau berhubungan secara langsung. Contohnya berbicara tatap muka."
        },
        {
          title: "Kontak Sekunder",
          content: "Kontak sekunder berlangsung melalui perantara atau media. Contohnya komunikasi melalui WhatsApp, telepon, email, atau perantara seseorang."
        },
        {
          title: "Komunikasi",
          content: "Komunikasi merupakan proses penyampaian pesan dan pemberian respons sehingga pihak yang berinteraksi dapat memahami makna pesan."
        },
        {
          title: "Faktor Pendorong Interaksi",
          content: "Interaksi dapat dipengaruhi oleh imitasi, sugesti, identifikasi, dan simpati."
        },
        {
          title: "Interaksi Digital",
          content: "Interaksi melalui media digital tetap termasuk interaksi sosial selama terdapat hubungan dan respons antarpihak."
        }
      ],
      keywords: ["interaksi sosial", "kontak sosial", "kontak primer", "kontak sekunder", "komunikasi", "imitasi", "sugesti", "identifikasi", "simpati"],
      tkaFocus: "Cari bukti adanya hubungan timbal balik, kontak, komunikasi, dan respons.",
      warning: "Berada di tempat yang sama tidak otomatis berarti terjadi interaksi sosial.",
      quickCheck: {
        question: "Apa dua syarat utama interaksi sosial?",
        options: [
          "Kontak sosial dan komunikasi.",
          "Nilai sosial dan stratifikasi sosial.",
          "Konflik sosial dan integrasi sosial.",
          "Mobilitas sosial dan perubahan sosial."
        ],
        answerIndex: 0,
        explanation: "Dua syarat utama interaksi sosial adalah kontak sosial dan komunikasi."
      }
    },

    // 4. PROSES SOSIAL
    {
      id: 4,
      section: "B",
      sectionTitle: "Interaksi dan Proses Sosial",
      title: "Proses Sosial Asosiatif dan Disosiatif",
      overview: "Proses sosial menggambarkan hubungan dan tindakan sosial yang terjadi dalam masyarakat.",
      topics: [
        {
          title: "Proses Asosiatif",
          content: "Proses asosiatif merupakan proses sosial yang cenderung mengarah pada kerja sama, penyatuan, atau terciptanya keteraturan."
        },
        {
          title: "Kerja Sama",
          content: "Kerja sama adalah usaha bersama antara individu atau kelompok untuk mencapai tujuan tertentu."
        },
        {
          title: "Akomodasi",
          content: "Akomodasi merupakan proses penyesuaian untuk mengurangi atau menyelesaikan pertentangan."
        },
        {
          title: "Asimilasi",
          content: "Asimilasi adalah proses peleburan kebudayaan yang terjadi melalui interaksi yang intensif sehingga perbedaan kebudayaan semakin berkurang dan menghasilkan pola budaya baru."
        },
        {
          title: "Akulturasi",
          content: "Akulturasi adalah proses masuknya unsur budaya baru ke dalam budaya yang sudah ada tanpa menghilangkan seluruh unsur budaya lama."
        },
        {
          title: "Proses Disosiatif",
          content: "Proses disosiatif merupakan proses sosial yang dapat mengarah pada persaingan atau pertentangan."
        },
        {
          title: "Persaingan",
          content: "Persaingan adalah proses ketika individu atau kelompok berlomba mendapatkan sesuatu tanpa menggunakan kekerasan secara langsung."
        },
        {
          title: "Kontravensi",
          content: "Kontravensi berada di antara persaingan dan konflik. Bentuknya dapat berupa penolakan, provokasi, rumor, sindiran, atau tindakan menunjukkan ketidaksukaan."
        },
        {
          title: "Konflik",
          content: "Konflik merupakan pertentangan terbuka akibat adanya perbedaan kepentingan, nilai, tujuan, atau sumber daya."
        }
      ],
      keywords: ["kerja sama", "akomodasi", "asimilasi", "akulturasi", "persaingan", "kontravensi", "konflik"],
      tkaFocus: "Identifikasi tindakan utama dalam kasus kemudian tentukan bentuk proses sosialnya.",
      warning: "Ingat cepat: asimilasi = melebur, akulturasi = bercampur tetapi unsur lama tetap ada.",
      quickCheck: {
        question: "Apa perbedaan asimilasi dan akulturasi?",
        options: [
          "Asimilasi hanya terjadi dalam konflik, sedangkan akulturasi hanya terjadi dalam kerja sama.",
          "Asimilasi menekankan peleburan budaya, sedangkan akulturasi mempertahankan unsur budaya asli.",
          "Asimilasi berarti persaingan, sedangkan akulturasi berarti konflik.",
          "Asimilasi hanya terjadi antarindividu, sedangkan akulturasi hanya terjadi antarkelompok."
        ],
        answerIndex: 1,
        explanation: "Asimilasi menekankan peleburan unsur kebudayaan sehingga perbedaan semakin berkurang. Akulturasi merupakan masuknya unsur budaya baru tanpa menghilangkan seluruh unsur budaya lama."
      }
    },

    // 5. GEJALA SOSIAL DAN URBANISASI
    {
      id: 5,
      section: "B",
      sectionTitle: "Interaksi dan Proses Sosial",
      title: "Gejala Sosial dan Urbanisasi",
      overview: "Gejala sosial merupakan fenomena yang muncul dalam masyarakat. Urbanisasi menjadi salah satu contoh penting yang sering digunakan dalam soal berbasis kasus.",
      topics: [
        {
          title: "Gejala Sosial",
          content: "Gejala sosial adalah peristiwa atau kondisi yang muncul akibat hubungan manusia dalam masyarakat dan memiliki dampak terhadap kehidupan sosial."
        },
        {
          title: "Ciri Gejala Sosial",
          content: "Gejala sosial terjadi dalam masyarakat, berkaitan dengan hubungan sosial, memiliki penyebab tertentu, dan dapat menghasilkan dampak positif maupun negatif."
        },
        {
          title: "Urbanisasi",
          content: "Urbanisasi adalah perpindahan penduduk dari wilayah desa menuju wilayah kota."
        },
        {
          title: "Faktor Pendorong",
          content: "Faktor pendorong berasal dari daerah asal, misalnya terbatasnya lapangan pekerjaan, rendahnya pendapatan, fasilitas pendidikan yang terbatas, atau keterbatasan lahan."
        },
        {
          title: "Faktor Penarik",
          content: "Faktor penarik berasal dari daerah tujuan, misalnya peluang kerja lebih banyak, fasilitas pendidikan lebih baik, layanan kesehatan, dan peluang ekonomi."
        },
        {
          title: "Dampak Urbanisasi bagi Desa",
          content: "Urbanisasi dapat mengurangi kepadatan penduduk desa, tetapi juga dapat menyebabkan berkurangnya tenaga produktif."
        },
        {
          title: "Dampak Urbanisasi bagi Kota",
          content: "Urbanisasi dapat menambah tenaga kerja dan aktivitas ekonomi, tetapi jika tidak diimbangi dengan lapangan kerja dan fasilitas dapat meningkatkan kepadatan, kemacetan, pengangguran, dan permukiman kumuh."
        }
      ],
      keywords: ["gejala sosial", "urbanisasi", "faktor pendorong", "faktor penarik", "desa", "kota"],
      tkaFocus: "Bedakan faktor pendorong dan penarik serta analisis dampak urbanisasi bagi desa dan kota.",
      warning: "Pendorong = membuat seseorang meninggalkan daerah asal. Penarik = membuat seseorang tertarik menuju daerah tujuan.",
      quickCheck: {
        question: "Apa perbedaan push factor dan pull factor?",
        options: [
          "Push factor berasal dari daerah tujuan, sedangkan pull factor berasal dari daerah asal.",
          "Push factor hanya berkaitan dengan pendidikan, sedangkan pull factor hanya berkaitan dengan pekerjaan.",
          "Push factor mendorong seseorang meninggalkan daerah asal, sedangkan pull factor menarik seseorang menuju daerah tujuan.",
          "Push factor selalu berdampak positif, sedangkan pull factor selalu berdampak negatif."
        ],
        answerIndex: 2,
        explanation: "Push factor berasal dari daerah asal dan mendorong seseorang pergi. Pull factor berasal dari daerah tujuan dan membuat seseorang tertarik datang."
      }
    },

    // 6. KELOMPOK SOSIAL
    {
      id: 6,
      section: "C",
      sectionTitle: "Kelompok Sosial dan Masyarakat Multikultural",
      title: "Pengertian dan Syarat Kelompok Sosial",
      overview: "Kelompok sosial adalah kumpulan manusia yang memiliki hubungan sosial, interaksi, kesadaran keanggotaan, dan unsur bersama tertentu.",
      topics: [
        { title: "Pengertian", content: "Kelompok sosial adalah kumpulan individu yang saling berinteraksi dan memiliki kesadaran sebagai bagian dari kelompok." },
        { title: "Syarat Kelompok Sosial", content: "Kelompok sosial memiliki interaksi, kesadaran sebagai anggota, tujuan atau kepentingan bersama, norma, pola hubungan, serta identitas tertentu." },
        { title: "Interaksi Berkelanjutan", content: "Kelompok sosial tidak hanya terdiri atas orang-orang yang kebetulan berada di tempat sama. Anggotanya memiliki hubungan yang relatif berkelanjutan." },
        { title: "Tujuan Bersama", content: "Kesamaan tujuan atau kepentingan dapat menjadi dasar pembentukan kelompok." },
        { title: "Norma Kelompok", content: "Kelompok biasanya memiliki aturan atau kebiasaan yang mengatur perilaku anggotanya." },
        { title: "Identitas Kelompok", content: "Identitas membuat seseorang merasa menjadi bagian dari kelompok tertentu dan membedakan kelompok tersebut dari kelompok lain." },
        { title: "Kelompok Semu", content: "Kerumunan atau massa dapat disebut kelompok semu karena hubungan antaranggota biasanya sementara dan tidak memiliki struktur kelompok yang kuat." }
      ],
      keywords: ["kelompok sosial", "interaksi", "tujuan bersama", "norma", "identitas", "keanggotaan"],
      tkaFocus: "Cari bukti interaksi berkelanjutan, kesadaran anggota, tujuan, norma, dan identitas.",
      quickCheck: {
        question: "Apa unsur penting kelompok sosial?",
        options: [
          "Hanya adanya banyak orang dalam satu tempat.",
          "Interaksi, kesadaran sebagai anggota, tujuan atau kepentingan, norma, dan identitas.",
          "Kesamaan usia dan tempat tinggal saja.",
          "Adanya persaingan antara semua anggota."
        ],
        answerIndex: 1,
        explanation: "Kelompok sosial ditandai oleh adanya interaksi, kesadaran keanggotaan, tujuan atau kepentingan bersama, norma, pola hubungan, dan identitas kelompok."
      }
    },

    // 7. JENIS KELOMPOK SOSIAL
    {
      id: 7,
      section: "C",
      sectionTitle: "Kelompok Sosial dan Masyarakat Multikultural",
      title: "Jenis-Jenis Kelompok Sosial",
      overview: "Kelompok sosial dapat dibedakan berdasarkan kedekatan hubungan, struktur, keanggotaan, identitas, dan dasar pembentukannya.",
      topics: [
        { title: "Kelompok Primer", content: "Kelompok primer memiliki hubungan dekat, personal, informal, dan emosional. Contohnya keluarga dan sahabat dekat." },
        { title: "Kelompok Sekunder", content: "Kelompok sekunder memiliki hubungan yang lebih formal, impersonal, dan berorientasi pada tujuan tertentu. Contohnya organisasi dan perusahaan." },
        { title: "Kelompok Formal", content: "Kelompok formal memiliki struktur, aturan, pembagian tugas, dan tujuan yang jelas." },
        { title: "Kelompok Informal", content: "Kelompok informal terbentuk secara lebih spontan dan hubungan antaranggota tidak terlalu diatur oleh struktur formal." },
        { title: "In-group", content: "In-group adalah kelompok yang dianggap sebagai kelompok sendiri atau kelompok 'kami'." },
        { title: "Out-group", content: "Out-group adalah kelompok yang dianggap sebagai kelompok luar atau 'mereka'." },
        { title: "Reference Group", content: "Reference group adalah kelompok yang dijadikan acuan oleh seseorang dalam membentuk sikap, perilaku, nilai, atau gaya hidup." },
        { title: "Membership Group", content: "Membership group adalah kelompok tempat seseorang secara nyata menjadi anggota." },
        { title: "Paguyuban", content: "Paguyuban atau gemeinschaft menekankan hubungan yang erat, pribadi, kekeluargaan, dan emosional." },
        { title: "Patembayan", content: "Patembayan atau gesellschaft menekankan hubungan yang lebih rasional, formal, dan berorientasi kepentingan." }
      ],
      keywords: ["primer", "sekunder", "formal", "informal", "in-group", "out-group", "reference group", "membership group", "paguyuban", "patembayan"],
      tkaFocus: "Perhatikan kata kunci hubungan, tujuan, struktur, dan keanggotaan.",
      quickCheck: {
        question: "Apa kata kunci kelompok primer?",
        options: [
          "Hubungan dekat, personal, emosional, dan kekeluargaan.",
          "Hubungan formal dan berorientasi pada tujuan organisasi.",
          "Hubungan sementara tanpa adanya ikatan antaranggotanya.",
          "Hubungan berdasarkan kepentingan ekonomi semata."
        ],
        answerIndex: 0,
        explanation: "Kelompok primer ditandai hubungan yang dekat, personal, informal, dan emosional."
      }
    },

    // 8. MULTIKULTURALISME
    {
      id: 8,
      section: "C",
      sectionTitle: "Kelompok Sosial dan Masyarakat Multikultural",
      title: "Masyarakat Multikultural dan Keberagaman",
      overview: "Masyarakat multikultural merupakan masyarakat yang terdiri atas berbagai kelompok dengan latar belakang budaya dan identitas yang beragam.",
      topics: [
        { title: "Masyarakat Multikultural", content: "Masyarakat multikultural memiliki keberagaman etnis, agama, bahasa, budaya, kelas sosial, dan identitas." },
        { title: "Pluralisme", content: "Pluralisme merupakan pandangan yang mengakui keberadaan berbagai kelompok berbeda dalam masyarakat." },
        { title: "Multikulturalisme", content: "Multikulturalisme menekankan pengakuan, penghargaan, dan kesetaraan berbagai budaya." },
        { title: "Toleransi", content: "Toleransi berarti menghargai perbedaan dan memberikan ruang bagi pihak lain untuk menjalankan identitasnya tanpa harus menyamakan semua identitas." },
        { title: "Inklusivitas", content: "Inklusivitas berarti melibatkan dan memberikan kesempatan kepada semua pihak, termasuk kelompok minoritas atau kelompok yang berbeda." },
        { title: "Primordialisme", content: "Primordialisme merupakan kecenderungan mengutamakan ikatan yang dianggap melekat sejak lahir, seperti suku, agama, atau daerah asal." },
        { title: "Etnosentrisme", content: "Etnosentrisme adalah kecenderungan menilai budaya lain menggunakan budaya sendiri sebagai standar dan menganggap budaya sendiri lebih unggul." },
        { title: "Partikularisme", content: "Partikularisme adalah kecenderungan mengutamakan kepentingan kelompok tertentu dibanding kepentingan masyarakat secara lebih luas." }
      ],
      keywords: ["multikulturalisme", "pluralisme", "toleransi", "inklusivitas", "primordialisme", "etnosentrisme", "partikularisme"],
      tkaFocus: "Tentukan apakah tindakan dalam kasus menghargai keberagaman atau justru mendiskriminasi kelompok tertentu.",
      quickCheck: {
        question: "Apa inti inklusivitas?",
        options: [
          "Membatasi kelompok tertentu agar tidak ikut dalam kehidupan masyarakat.",
          "Menyamakan seluruh identitas budaya agar tidak ada perbedaan.",
          "Mengutamakan kelompok mayoritas dalam semua keputusan.",
          "Semua pihak dilibatkan dan diberi kesempatan secara adil."
        ],
        answerIndex: 3,
        explanation: "Inklusivitas berarti melibatkan dan memberikan kesempatan kepada semua pihak, termasuk kelompok minoritas."
      }
    },

    // 9. BENTUK KONFLIK
    {
      id: 9,
      section: "D",
      sectionTitle: "Konflik, Integrasi, dan Perdamaian",
      title: "Bentuk dan Jenis Konflik Sosial",
      overview: "Konflik sosial merupakan pertentangan antara pihak-pihak yang memiliki perbedaan kepentingan, nilai, tujuan, atau sumber daya.",
      topics: [
        { title: "Konflik Antarindividu", content: "Konflik terjadi antara dua individu atau lebih karena perbedaan kepentingan, pendapat, atau tujuan." },
        { title: "Konflik Antarkelompok", content: "Konflik terjadi antara dua kelompok atau lebih yang memiliki kepentingan berbeda." },
        { title: "Konflik Antarkelas", content: "Konflik dapat muncul antara kelompok sosial yang memiliki posisi atau kepentingan berbeda dalam struktur sosial." },
        { title: "Konflik Politik", content: "Konflik politik berkaitan dengan perebutan kekuasaan, kebijakan, atau kepentingan politik." },
        { title: "Konflik Budaya", content: "Konflik budaya dapat muncul karena perbedaan nilai, norma, identitas, atau praktik budaya." },
        { title: "Konflik Horizontal", content: "Konflik horizontal terjadi antara pihak-pihak yang kedudukannya relatif sejajar." },
        { title: "Konflik Vertikal", content: "Konflik vertikal terjadi antara pihak yang memiliki perbedaan kedudukan atau kekuasaan." },
        { title: "Konflik Kepentingan", content: "Konflik kepentingan terjadi ketika pihak-pihak memiliki tujuan atau kepentingan yang bertentangan terhadap sesuatu." }
      ],
      keywords: ["konflik", "horizontal", "vertikal", "antarindividu", "antarkelompok", "kepentingan"],
      tkaFocus: "Identifikasi pihak yang berkonflik, hubungan kekuasaan, serta sumber pertentangannya.",
      quickCheck: {
        question: "Apa yang membedakan konflik horizontal dan konflik vertikal?",
        options: [
          "Konflik horizontal terjadi karena perbedaan budaya, sedangkan konflik vertikal karena perbedaan agama.",
          "Konflik horizontal hanya terjadi antarindividu, sedangkan konflik vertikal hanya terjadi antarkelompok.",
          "Konflik horizontal terjadi antara pihak yang kedudukannya relatif sejajar, sedangkan konflik vertikal melibatkan pihak dengan perbedaan kedudukan atau kekuasaan.",
          "Konflik horizontal selalu menggunakan kekerasan, sedangkan konflik vertikal tidak pernah menggunakan kekerasan."
        ],
        answerIndex: 2,
        explanation: "Konflik horizontal terjadi antara pihak-pihak yang kedudukannya relatif sejajar. Konflik vertikal terjadi ketika terdapat perbedaan kedudukan, status, atau kekuasaan."
      }
    },

    // 10. PENYEBAB KONFLIK
    {
      id: 10,
      section: "D",
      sectionTitle: "Konflik, Integrasi, dan Perdamaian",
      title: "Penyebab Konflik Sosial",
      overview: "Konflik dapat muncul karena perbedaan kepentingan, nilai, budaya, akses sumber daya, ketimpangan, dan komunikasi.",
      topics: [
        { title: "Perbedaan Kepentingan", content: "Konflik dapat terjadi ketika dua pihak memiliki tujuan atau kebutuhan yang tidak dapat dicapai secara bersamaan." },
        { title: "Perbedaan Nilai", content: "Nilai yang berbeda dapat menyebabkan pihak-pihak memiliki pandangan berbeda mengenai tindakan yang dianggap benar atau salah." },
        { title: "Perbedaan Budaya", content: "Perbedaan budaya, kebiasaan, bahasa, dan identitas dapat menjadi sumber konflik jika tidak dikelola dengan toleransi." },
        { title: "Perebutan Sumber Daya", content: "Tanah, air, pekerjaan, kekayaan, atau sumber daya lain yang terbatas dapat diperebutkan oleh kelompok berbeda." },
        { title: "Ketimpangan", content: "Ketimpangan akses terhadap kekuasaan, ekonomi, pendidikan, dan kesempatan dapat menimbulkan rasa tidak adil." },
        { title: "Komunikasi Buruk", content: "Kesalahpahaman, informasi yang tidak lengkap, atau komunikasi yang buruk dapat memperbesar konflik." },
        { title: "Diskriminasi", content: "Perlakuan yang tidak adil terhadap kelompok tertentu dapat menghasilkan rasa dirugikan dan memicu pertentangan." }
      ],
      keywords: ["kepentingan", "nilai", "budaya", "sumber daya", "ketimpangan", "komunikasi", "diskriminasi"],
      tkaFocus: "Cari akar masalah konflik, bukan hanya bentuk pertengkaran yang terlihat.",
      quickCheck: {
        question: "Mengapa perebutan sumber daya dapat menimbulkan konflik?",
        options: [
          "Karena semua sumber daya selalu tersedia dalam jumlah tidak terbatas.",
          "Karena beberapa pihak memiliki kepentingan terhadap sumber daya yang sama.",
          "Karena sumber daya tidak pernah berhubungan dengan kebutuhan masyarakat.",
          "Karena konflik hanya dapat terjadi akibat perbedaan budaya."
        ],
        answerIndex: 1,
        explanation: "Sumber daya tertentu bersifat terbatas sehingga beberapa pihak dapat memiliki kepentingan terhadap sumber daya yang sama."
      }
    },

    // 11. PENYELESAIAN KONFLIK
    {
      id: 11,
      section: "D",
      sectionTitle: "Konflik, Integrasi, dan Perdamaian",
      title: "Akomodasi dan Penyelesaian Konflik",
      overview: "Penyelesaian konflik bertujuan mengurangi pertentangan dan menciptakan hubungan sosial yang lebih stabil.",
      topics: [
        { title: "Akomodasi", content: "Akomodasi adalah proses penyesuaian yang digunakan untuk mengurangi atau menyelesaikan konflik." },
        { title: "Negosiasi", content: "Negosiasi adalah proses perundingan langsung antara pihak-pihak yang berkonflik untuk mencapai kesepakatan." },
        { title: "Mediasi", content: "Mediasi menggunakan pihak ketiga yang bersifat membantu dan tidak memiliki kewenangan untuk membuat keputusan yang mengikat." },
        { title: "Arbitrase", content: "Arbitrase menggunakan pihak ketiga yang memiliki kewenangan untuk memberikan keputusan terhadap pihak yang bersengketa." },
        { title: "Konsiliasi", content: "Konsiliasi mempertemukan pihak yang berkonflik agar dapat mencapai kesepakatan dan memperbaiki hubungan." },
        { title: "Kompromi", content: "Kompromi terjadi ketika pihak yang bertikai sama-sama mengurangi tuntutan untuk mencapai kesepakatan." },
        { title: "Adjudikasi", content: "Adjudikasi adalah penyelesaian konflik melalui lembaga pengadilan." },
        { title: "Koersi", content: "Koersi adalah penyelesaian konflik menggunakan paksaan atau kekuatan." }
      ],
      keywords: ["akomodasi", "mediasi", "arbitrase", "negosiasi", "konsiliasi", "kompromi", "adjudikasi", "koersi"],
      tkaFocus: "Cari kata kunci mengenai siapa yang membantu, siapa yang memutuskan, dan apakah terdapat paksaan.",
      quickCheck: {
        question: "Apa perbedaan mediasi dan arbitrase?",
        options: [
          "Mediasi dan arbitrase sama-sama tidak melibatkan pihak ketiga.",
          "Mediator membantu pihak berkonflik tanpa memutuskan, sedangkan arbiter memiliki kewenangan memberikan keputusan.",
          "Mediator selalu memberikan keputusan yang mengikat, sedangkan arbiter hanya memberikan saran.",
          "Mediasi menggunakan pengadilan, sedangkan arbitrase selalu menggunakan negosiasi langsung."
        ],
        answerIndex: 1,
        explanation: "Dalam mediasi, pihak ketiga membantu tetapi tidak membuat keputusan mengikat. Dalam arbitrase, pihak ketiga memiliki kewenangan memutuskan."
      }
    },

    // 12. PENGERTIAN PENELITIAN
    {
      id: 12,
      section: "E",
      sectionTitle: "Penelitian Sosial",
      title: "Pengertian dan Tujuan Penelitian Sosial",
      overview: "Penelitian sosial adalah proses sistematis untuk memperoleh, mengolah, dan menganalisis data mengenai fenomena sosial.",
      topics: [
        { title: "Pengertian Penelitian", content: "Penelitian merupakan kegiatan sistematis yang dilakukan untuk memperoleh pengetahuan atau menjawab pertanyaan tertentu menggunakan data." },
        { title: "Penelitian Sosial", content: "Penelitian sosial berfokus pada fenomena, hubungan, perilaku, struktur, dan perubahan dalam kehidupan masyarakat." },
        { title: "Rumusan Masalah", content: "Rumusan masalah adalah pertanyaan utama yang ingin dijawab melalui penelitian." },
        { title: "Tujuan Penelitian", content: "Tujuan penelitian menjelaskan apa yang hendak diketahui atau dicapai melalui penelitian dan harus sesuai dengan rumusan masalah." },
        { title: "Kesimpulan", content: "Kesimpulan merupakan jawaban terhadap rumusan masalah berdasarkan hasil analisis data." },
        { title: "Kualitatif", content: "Pendekatan kualitatif berfokus pada makna, pengalaman, persepsi, proses, dan pemahaman mendalam." },
        { title: "Kuantitatif", content: "Pendekatan kuantitatif menggunakan data yang dapat diukur dan biasanya dinyatakan dalam angka." }
      ],
      keywords: ["penelitian sosial", "rumusan masalah", "tujuan", "kesimpulan", "kualitatif", "kuantitatif"],
      tkaFocus: "Hubungkan rumusan masalah, tujuan, metode, hasil, dan kesimpulan.",
      quickCheck: {
        question: "Apa hubungan rumusan masalah dan kesimpulan?",
        options: [
          "Kesimpulan harus menjawab rumusan masalah berdasarkan hasil penelitian.",
          "Kesimpulan harus selalu berisi pendapat pribadi peneliti.",
          "Rumusan masalah dibuat setelah kesimpulan selesai ditulis.",
          "Kesimpulan tidak perlu berkaitan dengan data penelitian."
        ],
        answerIndex: 0,
        explanation: "Rumusan masalah berisi pertanyaan yang ingin dijawab, sedangkan kesimpulan merupakan jawaban terhadap rumusan tersebut berdasarkan hasil penelitian."
      }
    },

    // 13. SISTEMATIKA PENELITIAN
    {
      id: 13,
      section: "E",
      sectionTitle: "Penelitian Sosial",
      title: "Sistematika Penelitian Sosial",
      overview: "Penelitian memiliki tahapan yang saling berhubungan mulai dari menemukan masalah hingga membuat kesimpulan.",
      topics: [
        { title: "Latar Belakang", content: "Menjelaskan kondisi, fenomena, alasan, dan urgensi mengapa suatu masalah perlu diteliti." },
        { title: "Identifikasi Masalah", content: "Menguraikan berbagai masalah yang ditemukan dari fenomena yang diamati." },
        { title: "Rumusan Masalah", content: "Mengubah masalah menjadi pertanyaan penelitian yang lebih spesifik." },
        { title: "Tujuan", content: "Menjelaskan hasil yang ingin dicapai melalui penelitian." },
        { title: "Manfaat", content: "Menjelaskan kegunaan penelitian bagi ilmu pengetahuan, masyarakat, pemerintah, atau pihak terkait." },
        { title: "Kajian Teori", content: "Berisi konsep dan teori yang digunakan sebagai dasar untuk memahami masalah." },
        { title: "Metode", content: "Menjelaskan pendekatan, desain, populasi, sampel, teknik pengumpulan data, serta cara analisis." },
        { title: "Pengumpulan Data", content: "Data dikumpulkan melalui teknik seperti observasi, wawancara, kuesioner, atau dokumentasi." },
        { title: "Analisis Data", content: "Data diolah dan dianalisis untuk menemukan pola, hubungan, atau makna." },
        { title: "Kesimpulan", content: "Kesimpulan menjawab rumusan masalah berdasarkan hasil penelitian." },
        { title: "Saran", content: "Saran berisi rekomendasi yang dapat diberikan berdasarkan hasil penelitian." }
      ],
      keywords: ["latar belakang", "identifikasi", "rumusan masalah", "tujuan", "manfaat", "teori", "metode", "data", "analisis", "kesimpulan", "saran"],
      tkaFocus: "Susun tahapan penelitian yang diacak menjadi urutan yang logis.",
      quickCheck: {
        question: "Apa urutan sederhana penelitian?",
        options: [
          "Kesimpulan → data → masalah → analisis → metode.",
          "Metode → kesimpulan → rumusan masalah → data → masalah.",
          "Masalah → rumusan masalah → tujuan → metode → data → analisis → kesimpulan.",
          "Data → kesimpulan → tujuan → rumusan masalah → masalah."
        ],
        answerIndex: 2,
        explanation: "Secara sederhana, penelitian dimulai dari masalah, kemudian dirumuskan menjadi pertanyaan, ditentukan tujuan dan metode, dikumpulkan serta dianalisis datanya, lalu dibuat kesimpulan."
      }
    },

    // 14. PENDEKATAN PENELITIAN
    {
      id: 14,
      section: "E",
      sectionTitle: "Penelitian Sosial",
      title: "Pendekatan Kuantitatif, Kualitatif, dan Mixed Method",
      overview: "Pendekatan penelitian menentukan bagaimana peneliti memperoleh dan memahami data.",
      topics: [
        { title: "Kuantitatif", content: "Pendekatan kuantitatif menggunakan data angka dan pengukuran. Hasilnya dapat berupa persentase, rata-rata, tabel, grafik, atau analisis statistik." },
        { title: "Kualitatif", content: "Pendekatan kualitatif bertujuan memahami makna, pengalaman, persepsi, dan proses sosial secara mendalam." },
        { title: "Mixed Method", content: "Mixed method menggabungkan pendekatan kuantitatif dan kualitatif dalam satu penelitian." },
        { title: "Contoh Kuantitatif", content: "Penelitian mengenai persentase siswa yang menggunakan media sosial lebih dari lima jam sehari." },
        { title: "Contoh Kualitatif", content: "Penelitian mengenai pengalaman siswa ketika mengalami tekanan akibat penggunaan media sosial." },
        { title: "Contoh Mixed Method", content: "Peneliti mengukur jumlah siswa yang mengalami masalah tertentu kemudian melakukan wawancara untuk memahami pengalaman mereka." }
      ],
      keywords: ["kuantitatif", "kualitatif", "mixed method", "angka", "makna", "pengalaman"],
      tkaFocus: "Lihat jenis data dan tujuan penelitian sebelum menentukan pendekatan.",
      quickCheck: {
        question: "Apa ciri utama pendekatan kualitatif?",
        options: [
          "Menggunakan angka dan analisis statistik sebagai fokus utama.",
          "Memahami makna, pengalaman, persepsi, dan proses sosial secara mendalam.",
          "Hanya menggunakan data dari dokumen resmi pemerintah.",
          "Selalu menggunakan eksperimen untuk menguji hubungan sebab-akibat."
        ],
        answerIndex: 1,
        explanation: "Pendekatan kualitatif berfokus pada pemahaman mendalam terhadap makna, pengalaman, persepsi, dan proses sosial."
      }
    },

    // 15. METODE DAN TEKNIK PENGUMPULAN DATA
    {
      id: 15,
      section: "E",
      sectionTitle: "Penelitian Sosial",
      title: "Teknik Pengumpulan Data",
      overview: "Teknik pengumpulan data harus dipilih sesuai tujuan penelitian dan karakteristik informasi yang dibutuhkan.",
      topics: [
        { title: "Observasi", content: "Observasi dilakukan dengan mengamati fenomena atau perilaku secara langsung maupun menggunakan alat tertentu." },
        { title: "Wawancara", content: "Wawancara dilakukan dengan mengajukan pertanyaan kepada informan atau responden untuk memperoleh informasi." },
        { title: "Kuesioner", content: "Kuesioner menggunakan daftar pertanyaan tertulis yang diberikan kepada responden." },
        { title: "Dokumentasi", content: "Dokumentasi menggunakan sumber yang sudah tersedia seperti arsip, foto, video, catatan, laporan, atau dokumen resmi." },
        { title: "Observasi Cocok untuk", content: "Mengamati perilaku, aktivitas, kondisi lingkungan, atau proses yang terjadi secara langsung." },
        { title: "Wawancara Cocok untuk", content: "Menggali pengalaman, pendapat, alasan, persepsi, dan pengalaman pribadi." },
        { title: "Kuesioner Cocok untuk", content: "Mengumpulkan jawaban dari banyak responden secara relatif efisien dan terstruktur." }
      ],
      keywords: ["observasi", "wawancara", "kuesioner", "dokumentasi", "data"],
      tkaFocus: "Pilih teknik berdasarkan informasi yang ingin diperoleh.",
      quickCheck: {
        question: "Teknik apa yang tepat untuk menggali pengalaman pribadi secara mendalam?",
        options: [
          "Observasi karena peneliti hanya perlu melihat perilaku dari luar.",
          "Dokumentasi karena seluruh pengalaman pribadi selalu tersedia dalam arsip.",
          "Wawancara karena peneliti dapat menggali pengalaman, alasan, dan persepsi secara langsung.",
          "Kuesioner tertutup karena tidak membutuhkan jawaban dari responden."
        ],
        answerIndex: 2,
        explanation: "Wawancara cocok untuk menggali pengalaman, pendapat, alasan, persepsi, dan pengalaman pribadi secara lebih mendalam."
      }
    },

    // 16. SAMPLING
    {
      id: 16,
      section: "E",
      sectionTitle: "Penelitian Sosial",
      title: "Populasi, Sampel, dan Teknik Sampling",
      overview: "Sampling digunakan ketika peneliti tidak meneliti seluruh populasi tetapi mengambil sebagian anggota yang mewakili populasi.",
      topics: [
        { title: "Populasi", content: "Populasi adalah seluruh objek atau subjek yang menjadi sasaran penelitian." },
        { title: "Sampel", content: "Sampel adalah sebagian anggota populasi yang dipilih untuk diteliti." },
        { title: "Simple Random Sampling", content: "Setiap anggota populasi memiliki kesempatan yang relatif sama untuk dipilih secara acak." },
        { title: "Stratified Sampling", content: "Populasi dibagi berdasarkan strata atau lapisan tertentu sebelum sampel dipilih." },
        { title: "Cluster Sampling", content: "Populasi dibagi menjadi kelompok atau cluster, kemudian kelompok tertentu dipilih sebagai sampel." },
        { title: "Area Sampling", content: "Sampel ditentukan berdasarkan wilayah geografis tertentu." },
        { title: "Purposive Sampling", content: "Responden dipilih berdasarkan kriteria tertentu yang sesuai dengan tujuan penelitian." },
        { title: "Contoh Purposive", content: "Peneliti memilih siswa yang pernah menjadi korban bullying karena penelitian memang membahas pengalaman korban bullying." }
      ],
      keywords: ["populasi", "sampel", "simple random", "stratified", "cluster", "area", "purposive"],
      tkaFocus: "Cari kata kunci seperti acak, strata, kelompok, wilayah, atau kriteria tertentu.",
      quickCheck: {
        question: "Sampling berdasarkan kriteria tertentu disebut?",
        options: [
          "Simple random sampling karena seluruh anggota dipilih secara acak.",
          "Stratified sampling karena populasi dibagi berdasarkan strata.",
          "Cluster sampling karena peneliti memilih kelompok tertentu.",
          "Purposive sampling karena responden dipilih berdasarkan kriteria yang sesuai dengan tujuan penelitian."
        ],
        answerIndex: 3,
        explanation: "Purposive sampling memilih responden berdasarkan kriteria tertentu yang dianggap sesuai dengan tujuan penelitian."
      }
    },

    // 17. VARIABEL DAN INDIKATOR
    {
      id: 17,
      section: "E",
      sectionTitle: "Penelitian Sosial",
      title: "Variabel, Indikator, dan Instrumen Penelitian",
      overview: "Variabel dan indikator membantu peneliti mengubah konsep abstrak menjadi sesuatu yang dapat diamati atau diukur.",
      topics: [
        { title: "Variabel", content: "Variabel adalah sesuatu yang menjadi objek pengamatan atau pengukuran dalam penelitian." },
        { title: "Variabel Independen", content: "Variabel independen atau variabel bebas merupakan variabel yang dianggap memengaruhi variabel lain." },
        { title: "Variabel Dependen", content: "Variabel dependen atau variabel terikat merupakan variabel yang dipengaruhi atau menjadi hasil yang diamati." },
        { title: "Indikator", content: "Indikator adalah ukuran atau tanda yang digunakan untuk menjabarkan variabel agar dapat diamati atau diukur." },
        { title: "Contoh", content: "Jika variabelnya adalah interaksi sosial, indikatornya dapat berupa frekuensi komunikasi, intensitas pertemuan, atau frekuensi kerja sama." },
        { title: "Instrumen", content: "Instrumen adalah alat yang digunakan untuk mengumpulkan data, seperti kuesioner, pedoman wawancara, atau lembar observasi." }
      ],
      keywords: ["variabel", "variabel bebas", "variabel terikat", "indikator", "instrumen"],
      tkaFocus: "Bedakan variabel sebagai konsep yang diteliti dengan indikator sebagai ukuran yang menjabarkan konsep tersebut.",
      quickCheck: {
        question: "Apa fungsi indikator?",
        options: [
          "Menghapus variabel dari penelitian agar penelitian lebih sederhana.",
          "Menjabarkan variabel menjadi ukuran atau tanda yang dapat diamati atau diukur.",
          "Menggantikan seluruh data yang dikumpulkan peneliti.",
          "Menentukan kesimpulan penelitian sebelum data dianalisis."
        ],
        answerIndex: 1,
        explanation: "Indikator berfungsi menjabarkan variabel menjadi ukuran atau tanda yang dapat diamati maupun diukur dalam penelitian."
      }
    },

    // 18. INTERPRETASI DATA
    {
      id: 18,
      section: "E",
      sectionTitle: "Penelitian Sosial",
      title: "Membaca dan Menginterpretasikan Data",
      overview: "Interpretasi data membutuhkan kemampuan membaca angka, tabel, grafik, persentase, tren, dan perbandingan.",
      topics: [
        { title: "Membaca Tabel", content: "Perhatikan judul, kategori, satuan, angka, nilai tertinggi, nilai terendah, dan perubahan antarperiode." },
        { title: "Membaca Grafik", content: "Perhatikan sumbu, kategori, nilai, pola naik atau turun, serta perbandingan." },
        { title: "Persentase", content: "Persentase menunjukkan proporsi suatu bagian terhadap keseluruhan." },
        { title: "Tren", content: "Tren adalah kecenderungan perubahan data dari waktu ke waktu." },
        { title: "Kesimpulan Berdasarkan Data", content: "Kesimpulan harus sesuai dengan informasi yang benar-benar ditunjukkan data." },
        { title: "Jangan Overclaim", content: "Jika data hanya menunjukkan bahwa partisipasi meningkat, kita tidak boleh langsung menyimpulkan penyebab peningkatan tanpa bukti." }
      ],
      keywords: ["tabel", "grafik", "persentase", "tren", "data", "interpretasi"],
      tkaFocus: "Pilih kesimpulan yang paling aman dan langsung didukung oleh data.",
      quickCheck: {
        question: "Apa prinsip utama membaca data?",
        options: [
          "Menentukan penyebab setiap perubahan data meskipun tidak terdapat bukti.",
          "Memilih kesimpulan yang paling sesuai dengan data dan tidak melampaui informasi yang tersedia.",
          "Mengabaikan satuan dan kategori karena angka sudah cukup.",
          "Menganggap nilai tertinggi selalu menunjukkan penyebab utama suatu fenomena."
        ],
        answerIndex: 1,
        explanation: "Interpretasi data harus didasarkan pada informasi yang benar-benar tersedia."
      }
    },

    // 19. KETIDAKSETARAAN
    {
      id: 19,
      section: "F",
      sectionTitle: "Ketidaksetaraan dan Permasalahan Sosial",
      title: "Faktor Penyebab Ketidaksetaraan Sosial",
      overview: "Ketidaksetaraan terjadi ketika akses terhadap sumber daya, kesempatan, kekuasaan, atau hak tidak terbagi secara adil.",
      topics: [
        { title: "Ketidaksetaraan Ekonomi", content: "Perbedaan pendapatan, kekayaan, kepemilikan aset, dan kesempatan ekonomi." },
        { title: "Ketidaksetaraan Pendidikan", content: "Perbedaan akses terhadap sekolah, kualitas pendidikan, fasilitas, guru, teknologi, dan kesempatan belajar." },
        { title: "Ketidaksetaraan Kesehatan", content: "Perbedaan akses terhadap fasilitas kesehatan, tenaga medis, obat, dan layanan kesehatan." },
        { title: "Ketidaksetaraan Informasi", content: "Tidak semua kelompok memiliki akses terhadap informasi yang sama." },
        { title: "Diskriminasi", content: "Perlakuan berbeda terhadap individu atau kelompok berdasarkan identitas tertentu dapat menciptakan ketidaksetaraan." },
        { title: "Eksklusi Sosial", content: "Eksklusi terjadi ketika kelompok tertentu tidak mendapatkan kesempatan untuk berpartisipasi atau memperoleh akses dalam kehidupan sosial." },
        { title: "Stratifikasi Sosial", content: "Stratifikasi adalah pelapisan masyarakat ke dalam tingkatan sosial berdasarkan ukuran tertentu seperti ekonomi, kekuasaan, pendidikan, atau prestise." }
      ],
      keywords: ["ketidaksetaraan", "ekonomi", "pendidikan", "kesehatan", "informasi", "diskriminasi", "eksklusi", "stratifikasi"],
      tkaFocus: "Cari bentuk akses atau kesempatan yang tidak sama.",
      quickCheck: {
        question: "Apakah ketidaksetaraan hanya berkaitan dengan uang?",
        options: [
          "Ya, karena ketidaksetaraan hanya dapat diukur melalui pendapatan.",
          "Tidak, tetapi ketidaksetaraan hanya berkaitan dengan pendidikan.",
          "Tidak. Ketidaksetaraan juga dapat berupa akses pendidikan, kesehatan, informasi, kekuasaan, dan kesempatan.",
          "Ya, karena semua bentuk ketidaksetaraan pada akhirnya selalu merupakan masalah ekonomi."
        ],
        answerIndex: 2,
        explanation: "Ketidaksetaraan tidak hanya berkaitan dengan ekonomi. Perbedaan akses terhadap pendidikan, kesehatan, informasi, kekuasaan, dan kesempatan juga merupakan bentuk ketidaksetaraan."
      }
    },

    // 20. DAMPAK KETIDAKSETARAAN
    {
      id: 20,
      section: "F",
      sectionTitle: "Ketidaksetaraan dan Permasalahan Sosial",
      title: "Dampak Ketidaksetaraan Sosial",
      overview: "Ketidaksetaraan yang berlangsung terus-menerus dapat menghasilkan berbagai masalah sosial.",
      topics: [
        { title: "Kesenjangan Sosial", content: "Kesenjangan terjadi ketika terdapat jarak yang besar dalam kondisi kehidupan atau akses sumber daya antarkelompok." },
        { title: "Kemiskinan", content: "Ketimpangan akses terhadap pendidikan, pekerjaan, modal, dan sumber daya dapat memperbesar risiko kemiskinan." },
        { title: "Marginalisasi", content: "Marginalisasi adalah proses ketika kelompok tertentu terdorong ke posisi yang kurang menguntungkan dalam masyarakat." },
        { title: "Eksklusi", content: "Kelompok tertentu dapat kehilangan akses terhadap layanan, kesempatan, dan partisipasi sosial." },
        { title: "Konflik", content: "Ketidakadilan yang dirasakan dapat memunculkan rasa tidak puas dan konflik sosial." },
        { title: "Kecemburuan Sosial", content: "Perbedaan kondisi yang dianggap tidak adil dapat menghasilkan kecemburuan sosial." },
        { title: "Hambatan Mobilitas", content: "Akses pendidikan, pekerjaan, dan sumber daya yang tidak merata dapat menghambat seseorang meningkatkan status sosial." }
      ],
      keywords: ["kesenjangan", "kemiskinan", "marginalisasi", "eksklusi", "konflik", "mobilitas"],
      tkaFocus: "Hubungkan bentuk ketidaksetaraan dengan dampak sosial yang mungkin ditimbulkannya.",
      quickCheck: {
        question: "Bagaimana ketidaksetaraan dapat memengaruhi mobilitas sosial?",
        options: [
          "Ketidaksetaraan selalu membuat semua orang lebih mudah meningkatkan status sosial.",
          "Ketidaksetaraan dapat menghambat mobilitas karena akses pendidikan, pekerjaan, dan sumber daya tidak merata.",
          "Ketidaksetaraan tidak pernah berhubungan dengan kesempatan seseorang.",
          "Ketidaksetaraan hanya memengaruhi hubungan antarnegara dan tidak memengaruhi individu."
        ],
        answerIndex: 1,
        explanation: "Ketidaksetaraan akses terhadap pendidikan, pekerjaan, modal, dan sumber daya dapat membuat sebagian kelompok memiliki kesempatan yang lebih kecil."
      }
    },

    // 21. KESETARAAN
    {
      id: 21,
      section: "F",
      sectionTitle: "Ketidaksetaraan dan Permasalahan Sosial",
      title: "Kesetaraan Sosial dan Keadilan",
      overview: "Kesetaraan sosial berkaitan dengan hak, kesempatan, akses, dan perlakuan yang adil.",
      topics: [
        { title: "Kesetaraan Kesempatan", content: "Setiap orang memiliki kesempatan yang adil untuk berkembang." },
        { title: "Kesetaraan Hukum", content: "Semua orang memiliki kedudukan yang setara di hadapan hukum." },
        { title: "Kesetaraan Politik", content: "Setiap warga memiliki kesempatan untuk berpartisipasi dalam kehidupan politik." },
        { title: "Kesetaraan Ekonomi", content: "Kesetaraan ekonomi berusaha mengurangi hambatan dan ketimpangan akses terhadap kesempatan ekonomi." },
        { title: "Kesetaraan Budaya", content: "Berbagai kelompok budaya dihargai dan memiliki kesempatan untuk mempertahankan identitasnya." },
        { title: "Affirmative Action", content: "Affirmative action merupakan kebijakan atau tindakan khusus yang diberikan kepada kelompok yang mengalami ketertinggalan untuk memperluas kesempatan." },
        { title: "Inklusi", content: "Inklusi memastikan kelompok yang berbeda tetap dapat berpartisipasi dalam kehidupan sosial." }
      ],
      keywords: ["kesetaraan", "keadilan", "kesempatan", "affirmative action", "inklusi"],
      tkaFocus: "Tentukan apakah kebijakan memberikan akses dan kesempatan yang lebih adil.",
      quickCheck: {
        question: "Apa contoh affirmative action?",
        options: [
          "Memberikan kesempatan hanya kepada kelompok yang sudah memiliki akses paling besar.",
          "Menghapus seluruh bantuan khusus agar semua kelompok menerima perlakuan yang sama persis.",
          "Pemberian beasiswa khusus kepada kelompok yang mengalami hambatan ekonomi.",
          "Membatasi kelompok tertentu agar tidak dapat mengikuti program pendidikan."
        ],
        answerIndex: 2,
        explanation: "Affirmative action merupakan tindakan khusus untuk membantu kelompok yang mengalami hambatan agar memiliki kesempatan yang lebih adil."
      }
    },

    // 22. RANTAI MASALAH SOSIAL
    {
      id: 22,
      section: "F",
      sectionTitle: "Ketidaksetaraan dan Permasalahan Sosial",
      title: "Dinamika Permasalahan Sosial",
      overview: "Permasalahan sosial sering kali saling berhubungan dan membentuk rantai sebab-akibat.",
      topics: [
        { title: "Ketimpangan", content: "Sumber daya atau kesempatan tidak terbagi secara merata." },
        { title: "Marginalisasi", content: "Kelompok yang memiliki akses terbatas dapat terdorong ke posisi sosial yang kurang menguntungkan." },
        { title: "Keterbatasan Akses", content: "Keterbatasan dapat terjadi pada pendidikan, kesehatan, air bersih, sanitasi, pekerjaan, teknologi, dan layanan publik." },
        { title: "Kemiskinan", content: "Keterbatasan akses dapat memperbesar kemungkinan seseorang atau kelompok mengalami kemiskinan." },
        { title: "Masalah Sosial", content: "Masalah sosial dapat berkembang sebagai akibat dari berbagai kondisi yang saling berhubungan." },
        { title: "Rantai Sebab-Akibat", content: "Salah satu pola yang perlu dipahami adalah: ketimpangan → marginalisasi → keterbatasan akses → kemiskinan → masalah sosial." }
      ],
      keywords: ["ketimpangan", "marginalisasi", "akses", "kemiskinan", "masalah sosial"],
      tkaFocus: "Temukan hubungan sebab-akibat dalam kasus.",
      quickCheck: {
        question: "Apa rantai masalah yang perlu diingat?",
        options: [
          "Kemiskinan → pendidikan → ketimpangan → akses → marginalisasi.",
          "Ketimpangan → marginalisasi → keterbatasan akses → kemiskinan → masalah sosial.",
          "Masalah sosial → ketimpangan → akses → pendidikan → kemiskinan.",
          "Marginalisasi → pemerataan → kemiskinan → kesetaraan → masalah sosial."
        ],
        answerIndex: 1,
        explanation: "Salah satu pola sebab-akibat yang perlu dipahami adalah ketimpangan yang dapat mendorong marginalisasi, membatasi akses, memperbesar risiko kemiskinan, dan akhirnya memperkuat masalah sosial."
      }
    },

    // 23. MASALAH SOSIAL
    {
      id: 23,
      section: "F",
      sectionTitle: "Ketidaksetaraan dan Permasalahan Sosial",
      title: "Konsep dan Penanganan Masalah Sosial",
      overview: "Masalah sosial muncul ketika suatu kondisi dianggap merugikan masyarakat dan membutuhkan penyelesaian.",
      topics: [
        { title: "Kemiskinan", content: "Kemiskinan berkaitan dengan keterbatasan kemampuan memenuhi kebutuhan hidup dan akses terhadap sumber daya." },
        { title: "Pengangguran", content: "Pengangguran terjadi ketika seseorang yang termasuk angkatan kerja belum memperoleh pekerjaan." },
        { title: "Kriminalitas", content: "Kriminalitas merupakan tindakan yang melanggar hukum dan dapat merugikan individu atau masyarakat." },
        { title: "Diskriminasi", content: "Diskriminasi merupakan perlakuan tidak adil terhadap individu atau kelompok berdasarkan karakteristik tertentu." },
        { title: "Upaya Penanganan", content: "Penanganan masalah sosial dapat dilakukan melalui pendidikan, kebijakan sosial, pemberdayaan masyarakat, perluasan kesempatan kerja, perlindungan sosial, dan penguatan akses layanan publik." }
      ],
      keywords: ["masalah sosial", "kemiskinan", "pengangguran", "kriminalitas", "diskriminasi", "pemberdayaan"],
      tkaFocus: "Hubungkan masalah sosial dengan akar penyebab dan solusi yang sesuai.",
      quickCheck: {
        question: "Apa prinsip solusi masalah sosial?",
        options: [
          "Mengatasi akar masalah sekaligus memperluas akses dan kesempatan masyarakat.",
          "Mengabaikan penyebab masalah dan hanya menangani dampak yang terlihat.",
          "Memberikan solusi yang sama untuk semua masalah tanpa melihat penyebabnya.",
          "Menyelesaikan masalah dengan membatasi akses kelompok yang dianggap bermasalah."
        ],
        answerIndex: 0,
        explanation: "Solusi masalah sosial sebaiknya menyentuh akar penyebab sekaligus memperluas akses, kesempatan, perlindungan, dan kemampuan masyarakat."
      }
    },

    // 24. PENGERTIAN PERUBAHAN SOSIAL
    {
      id: 24,
      section: "G",
      sectionTitle: "Perubahan Sosial",
      title: "Pengertian dan Ciri Perubahan Sosial",
      overview: "Perubahan sosial merupakan perubahan pada struktur, pola hubungan, nilai, norma, lembaga, atau pola kehidupan masyarakat.",
      topics: [
        { title: "Pengertian", content: "Perubahan sosial adalah perubahan yang terjadi dalam kehidupan masyarakat, baik dalam struktur sosial maupun pola hubungan sosial." },
        { title: "Perubahan Nilai", content: "Masyarakat dapat mengalami perubahan mengenai apa yang dianggap penting, baik, benar, atau pantas." },
        { title: "Perubahan Norma", content: "Aturan dan standar perilaku masyarakat dapat berubah mengikuti kondisi sosial." },
        { title: "Perubahan Interaksi", content: "Teknologi dapat mengubah cara manusia berkomunikasi dan berinteraksi." },
        { title: "Perubahan Lembaga", content: "Lembaga sosial dapat mengalami perubahan fungsi, struktur, dan cara kerja." }
      ],
      keywords: ["perubahan sosial", "nilai", "norma", "interaksi", "lembaga sosial"],
      tkaFocus: "Cari perubahan pada pola hubungan, nilai, norma, struktur, atau lembaga.",
      quickCheck: {
        question: "Apa yang dapat berubah dalam perubahan sosial?",
        options: [
          "Hanya jumlah penduduk tanpa adanya perubahan kehidupan sosial.",
          "Nilai, norma, pola interaksi, struktur sosial, dan lembaga sosial.",
          "Hanya bentuk bangunan dan kondisi geografis suatu wilayah.",
          "Hanya pendapatan individu tanpa perubahan hubungan sosial."
        ],
        answerIndex: 1,
        explanation: "Perubahan sosial dapat menyangkut nilai, norma, pola interaksi, struktur sosial, lembaga sosial, dan berbagai aspek kehidupan masyarakat."
      }
    },

    // 25. BENTUK PERUBAHAN
    {
      id: 25,
      section: "G",
      sectionTitle: "Perubahan Sosial",
      title: "Bentuk-Bentuk Perubahan Sosial",
      overview: "Perubahan sosial dapat diklasifikasikan berdasarkan kecepatan, perencanaan, luas dampak, dan arah perubahan.",
      topics: [
        { title: "Evolusi", content: "Evolusi merupakan perubahan yang berlangsung perlahan dan bertahap." },
        { title: "Revolusi", content: "Revolusi merupakan perubahan yang berlangsung cepat dan dapat menghasilkan perubahan mendasar." },
        { title: "Planned Change", content: "Perubahan direncanakan oleh pihak tertentu untuk mencapai tujuan tertentu." },
        { title: "Unplanned Change", content: "Perubahan terjadi tanpa direncanakan sebelumnya." },
        { title: "Perubahan Kecil", content: "Perubahan yang pengaruhnya relatif terbatas dan tidak mengubah struktur sosial secara luas." },
        { title: "Perubahan Besar", content: "Perubahan yang memiliki pengaruh luas terhadap struktur atau kehidupan masyarakat." },
        { title: "Progress", content: "Perubahan yang dipandang membawa kondisi menuju keadaan yang lebih baik." },
        { title: "Regress", content: "Perubahan yang dipandang membawa kemunduran atau dampak yang merugikan." }
      ],
      keywords: ["evolusi", "revolusi", "planned", "unplanned", "kecil", "besar", "progress", "regress"],
      tkaFocus: "Perhatikan empat aspek: cepat/lambat, direncanakan/tidak, kecil/besar, dan progress/regress.",
      quickCheck: {
        question: "Perubahan yang berlangsung perlahan disebut?",
        options: [
          "Revolusi, karena perubahan tersebut menghasilkan kondisi baru.",
          "Evolusi, karena perubahan berlangsung secara perlahan dan bertahap.",
          "Regress, karena perubahan selalu menghasilkan kemunduran.",
          "Planned change, karena semua perubahan perlahan pasti direncanakan."
        ],
        answerIndex: 1,
        explanation: "Evolusi merupakan perubahan sosial yang berlangsung secara perlahan dan bertahap."
      }
    },

    // 26. FAKTOR PERUBAHAN SOSIAL
    {
      id: 26,
      section: "G",
      sectionTitle: "Perubahan Sosial",
      title: "Faktor Pendorong dan Penghambat Perubahan Sosial",
      overview: "Perubahan sosial dipengaruhi faktor internal dan eksternal.",
      topics: [
        { title: "Perubahan Jumlah Penduduk", content: "Pertumbuhan atau perubahan komposisi penduduk dapat mengubah kebutuhan, struktur, dan hubungan sosial." },
        { title: "Penemuan Baru", content: "Inovasi dan penemuan teknologi dapat mengubah pola kehidupan masyarakat." },
        { title: "Konflik", content: "Konflik dapat mendorong masyarakat mencari pola atau aturan baru." },
        { title: "Kontak dengan Budaya Lain", content: "Interaksi dengan kelompok lain dapat memperkenalkan nilai, teknologi, dan kebiasaan baru." },
        { title: "Pendidikan", content: "Pendidikan meningkatkan pengetahuan dan kemampuan masyarakat untuk menerima perubahan." },
        { title: "Sikap Terbuka", content: "Masyarakat yang terbuka terhadap gagasan baru cenderung lebih mudah menerima perubahan." },
        { title: "Sikap Tertutup", content: "Sikap menolak hal baru dapat menghambat perubahan." },
        { title: "Kepentingan yang Sudah Tertanam", content: "Kelompok yang merasa dirugikan oleh perubahan dapat berusaha mempertahankan keadaan lama." }
      ],
      keywords: ["penduduk", "penemuan", "konflik", "pendidikan", "kontak budaya", "sikap terbuka", "sikap tertutup"],
      tkaFocus: "Tentukan faktor yang secara langsung menjelaskan mengapa perubahan terjadi atau terhambat.",
      quickCheck: {
        question: "Sebutkan dua faktor pendorong perubahan sosial.",
        options: [
          "Pendidikan dan sikap terbuka terhadap gagasan baru.",
          "Sikap tertutup dan kepentingan yang sudah tertanam.",
          "Penolakan terhadap teknologi dan isolasi dari masyarakat lain.",
          "Ketakutan terhadap perubahan dan keinginan mempertahankan keadaan lama."
        ],
        answerIndex: 0,
        explanation: "Pendidikan, penemuan baru, kontak budaya, konflik, perubahan penduduk, dan sikap terbuka dapat menjadi faktor pendorong perubahan sosial."
      }
    },

    // 27. DAMPAK PERUBAHAN SOSIAL
    {
      id: 27,
      section: "G",
      sectionTitle: "Perubahan Sosial",
      title: "Dampak Perubahan Sosial",
      overview: "Perubahan sosial dapat membawa manfaat sekaligus masalah baru.",
      topics: [
        { title: "Dampak Positif", content: "Perubahan dapat meningkatkan efisiensi, teknologi, pendidikan, produktivitas, komunikasi, dan kualitas hidup." },
        { title: "Dampak Negatif", content: "Perubahan dapat menghasilkan konflik nilai, kesenjangan, masalah sosial baru, dan ketidakstabilan." },
        { title: "Disorganisasi", content: "Disorganisasi terjadi ketika norma atau aturan lama melemah sementara norma baru belum terbentuk atau belum stabil." },
        { title: "Reorganisasi", content: "Reorganisasi adalah proses terbentuknya keteraturan baru setelah masyarakat mengalami perubahan." },
        { title: "Perubahan Solidaritas", content: "Perubahan sosial dapat mengubah bentuk hubungan dan solidaritas dalam masyarakat." },
        { title: "Perubahan Lembaga", content: "Lembaga sosial dapat menyesuaikan fungsi dan strukturnya terhadap kondisi baru." }
      ],
      keywords: ["dampak", "disorganisasi", "reorganisasi", "solidaritas", "lembaga sosial"],
      tkaFocus: "Bedakan fase ketika aturan lama melemah dengan fase ketika keteraturan baru mulai terbentuk.",
      quickCheck: {
        question: "Apa itu disorganisasi sosial?",
        options: [
          "Kondisi ketika norma lama melemah sementara norma baru belum stabil.",
          "Kondisi ketika seluruh masyarakat sudah memiliki keteraturan baru yang stabil.",
          "Proses ketika semua lembaga sosial menghilang secara permanen.",
          "Kondisi ketika tidak ada perubahan apa pun dalam masyarakat."
        ],
        answerIndex: 0,
        explanation: "Disorganisasi sosial terjadi ketika norma atau aturan lama melemah sementara norma baru belum terbentuk atau belum stabil."
      }
    },

    // 28. GLOBALISASI
    {
      id: 28,
      section: "H",
      sectionTitle: "Globalisasi dan Sikap Kritis",
      title: "Pengertian dan Ciri Globalisasi",
      overview: "Globalisasi meningkatkan hubungan dan ketergantungan masyarakat antarwilayah melalui teknologi, ekonomi, informasi, transportasi, dan budaya.",
      topics: [
        { title: "Pengertian Globalisasi", content: "Globalisasi merupakan proses meningkatnya keterhubungan masyarakat di berbagai wilayah dunia sehingga pertukaran informasi, barang, jasa, teknologi, dan budaya berlangsung semakin cepat." },
        { title: "Teknologi", content: "Internet dan teknologi komunikasi mempercepat penyebaran informasi dan memungkinkan interaksi lintas wilayah." },
        { title: "Transportasi", content: "Kemajuan transportasi mempercepat mobilitas manusia dan barang." },
        { title: "Ekonomi Global", content: "Perdagangan internasional, investasi, perusahaan multinasional, dan pasar global meningkatkan hubungan ekonomi antarnegara." },
        { title: "Pertukaran Budaya", content: "Film, musik, makanan, fashion, bahasa, dan gaya hidup dapat menyebar lintas negara." },
        { title: "Ketergantungan", content: "Masyarakat dan negara menjadi semakin saling bergantung dalam bidang ekonomi, teknologi, informasi, dan sumber daya." }
      ],
      keywords: ["globalisasi", "teknologi", "transportasi", "ekonomi", "budaya", "informasi"],
      tkaFocus: "Cari tanda meningkatnya keterhubungan antarwilayah.",
      quickCheck: {
        question: "Apa inti globalisasi?",
        options: [
          "Meningkatnya keterhubungan dan ketergantungan masyarakat lintas wilayah.",
          "Berkurangnya hubungan antarnegara karena masyarakat menjadi lebih tertutup.",
          "Hilangnya seluruh perbedaan budaya di dunia secara otomatis.",
          "Terbatasnya pertukaran informasi hanya di dalam satu wilayah."
        ],
        answerIndex: 0,
        explanation: "Globalisasi ditandai meningkatnya keterhubungan dan ketergantungan masyarakat di berbagai wilayah."
      }
    },

    // 29. GLOBALISASI DAN KETIMPANGAN
    {
      id: 29,
      section: "H",
      sectionTitle: "Globalisasi dan Sikap Kritis",
      title: "Globalisasi dan Ketimpangan Sosial",
      overview: "Globalisasi tidak selalu memberikan manfaat yang sama kepada semua kelompok.",
      topics: [
        { title: "Akses Teknologi", content: "Kelompok yang memiliki akses teknologi lebih baik dapat memperoleh informasi dan peluang ekonomi lebih besar." },
        { title: "Pendidikan", content: "Pendidikan dan keterampilan menentukan kemampuan seseorang memanfaatkan peluang global." },
        { title: "Modal", content: "Kelompok yang memiliki modal lebih besar dapat lebih mudah memanfaatkan pasar global." },
        { title: "Kesenjangan Digital", content: "Kesenjangan digital terjadi ketika akses atau kemampuan menggunakan teknologi berbeda antarindividu atau kelompok." },
        { title: "Tenaga Kerja", content: "Globalisasi dapat menciptakan pekerjaan baru tetapi juga meningkatkan persaingan tenaga kerja." },
        { title: "Ketimpangan Manfaat", content: "Kelompok dengan pendidikan, modal, teknologi, dan keterampilan lebih baik dapat memperoleh manfaat globalisasi lebih besar." }
      ],
      keywords: ["globalisasi", "ketimpangan", "kesenjangan digital", "pendidikan", "teknologi", "modal"],
      tkaFocus: "Analisis siapa yang memperoleh manfaat dan siapa yang tertinggal dalam proses globalisasi.",
      quickCheck: {
        question: "Mengapa globalisasi dapat memperlebar ketimpangan?",
        options: [
          "Karena semua kelompok memiliki akses modal dan teknologi yang sama.",
          "Karena akses modal, pendidikan, teknologi, dan peluang global berbeda antar kelompok.",
          "Karena globalisasi selalu menghapus perbedaan ekonomi antarwilayah.",
          "Karena ketimpangan hanya disebabkan oleh faktor budaya dan tidak berkaitan dengan globalisasi."
        ],
        answerIndex: 1,
        explanation: "Kelompok dengan akses pendidikan, modal, teknologi, dan keterampilan yang lebih baik dapat memanfaatkan peluang globalisasi lebih besar."
      }
    },

    // 30. MASALAH GLOBALISASI
    {
      id: 30,
      section: "H",
      sectionTitle: "Globalisasi dan Sikap Kritis",
      title: "Masalah Sosial Akibat Globalisasi",
      overview: "Globalisasi dapat menghasilkan berbagai masalah sosial dan budaya apabila tidak dihadapi secara kritis.",
      topics: [
        { title: "Hoaks", content: "Hoaks adalah informasi palsu atau tidak benar yang disebarkan sebagai informasi." },
        { title: "Disinformasi", content: "Disinformasi adalah informasi salah yang disebarkan dengan sengaja untuk menyesatkan." },
        { title: "Konsumerisme", content: "Konsumerisme adalah kecenderungan mengonsumsi barang atau jasa secara berlebihan." },
        { title: "Westernisasi", content: "Westernisasi adalah kecenderungan meniru unsur budaya Barat secara berlebihan." },
        { title: "Cultural Shock", content: "Cultural shock adalah kebingungan atau kesulitan menyesuaikan diri ketika menghadapi budaya yang berbeda." },
        { title: "Cultural Lag", content: "Cultural lag adalah kondisi ketika salah satu unsur budaya tertinggal dalam menyesuaikan diri dengan perubahan unsur budaya lainnya." },
        { title: "Lunturnya Budaya Lokal", content: "Paparan budaya global yang sangat kuat dapat membuat sebagian masyarakat, khususnya generasi muda, semakin jarang menggunakan atau mengenal budaya lokal." }
      ],
      keywords: ["hoaks", "disinformasi", "konsumerisme", "westernisasi", "cultural shock", "cultural lag"],
      tkaFocus: "Identifikasi masalah berdasarkan ciri kasus.",
      quickCheck: {
        question: "Apa perbedaan cultural shock dan cultural lag?",
        options: [
          "Cultural shock adalah kesulitan menghadapi budaya berbeda, sedangkan cultural lag adalah ketertinggalan penyesuaian unsur budaya.",
          "Cultural shock adalah perubahan teknologi, sedangkan cultural lag adalah perubahan jumlah penduduk.",
          "Cultural shock hanya terjadi dalam bidang ekonomi, sedangkan cultural lag hanya terjadi dalam politik.",
          "Cultural shock dan cultural lag merupakan istilah yang memiliki arti sama."
        ],
        answerIndex: 0,
        explanation: "Cultural shock berkaitan dengan kesulitan ketika menghadapi budaya berbeda. Cultural lag berkaitan dengan ketertinggalan penyesuaian unsur budaya."
      }
    },

    // 31. SIKAP KRITIS
    {
      id: 31,
      section: "H",
      sectionTitle: "Globalisasi dan Sikap Kritis",
      title: "Literasi Digital dan Sikap Kritis Menghadapi Globalisasi",
      overview: "Sikap yang tepat terhadap globalisasi bukan menerima semuanya atau menolak semuanya, tetapi bersikap selektif dan kritis.",
      topics: [
        { title: "Literasi Digital", content: "Literasi digital adalah kemampuan mengakses, memahami, mengevaluasi, menggunakan, dan membuat informasi digital secara bertanggung jawab." },
        { title: "Memeriksa Sumber", content: "Informasi perlu diperiksa berdasarkan sumber, kredibilitas, bukti, tanggal, konteks, dan sumber pembanding." },
        { title: "Berpikir Kritis", content: "Berpikir kritis berarti tidak langsung menerima informasi, tetapi menganalisis bukti dan mempertimbangkan berbagai sudut pandang." },
        { title: "Selektif", content: "Sikap selektif berarti menerima unsur global yang bermanfaat dan menolak atau menyaring unsur yang bertentangan dengan nilai positif." },
        { title: "Tidak Anti-Globalisasi", content: "Sikap kritis bukan berarti menolak teknologi atau budaya asing secara keseluruhan." },
        { title: "Menjaga Identitas", content: "Masyarakat dapat menggunakan teknologi global sambil mempertahankan nilai positif dan identitas budaya lokal." }
      ],
      keywords: ["literasi digital", "berpikir kritis", "selektif", "informasi", "identitas budaya"],
      tkaFocus: "Dalam soal sikap, pilih tindakan yang kritis, selektif, berbasis bukti, adaptif, dan tidak ekstrem.",
      quickCheck: {
        question: "Apa prinsip menghadapi globalisasi?",
        options: [
          "Menolak seluruh teknologi dan budaya asing agar budaya lokal tidak berubah.",
          "Menerima semua pengaruh global tanpa mempertimbangkan dampaknya.",
          "Menghindari informasi dari luar negeri karena pasti memiliki dampak negatif.",
          "Mengambil manfaatnya, menyaring dampak negatifnya, dan mempertahankan nilai positif budaya."
        ],
        answerIndex: 3,
        explanation: "Sikap kritis terhadap globalisasi berarti tidak bersikap ekstrem. Kita dapat mengambil manfaat globalisasi, menyaring dampak negatifnya, dan tetap mempertahankan nilai positif serta identitas budaya."
      }
    },

    // 32. BUDAYA LOKAL
    {
      id: 32,
      section: "H",
      sectionTitle: "Globalisasi dan Sikap Kritis",
      title: "Pelestarian dan Penguatan Budaya Lokal",
      overview: "Budaya lokal dapat dipertahankan dengan memanfaatkan teknologi dan perkembangan zaman tanpa menghilangkan nilai utamanya.",
      topics: [
        { title: "Pelestarian", content: "Pelestarian bertujuan menjaga budaya agar tetap hidup dan diwariskan kepada generasi berikutnya." },
        { title: "Revitalisasi", content: "Revitalisasi adalah upaya menghidupkan kembali budaya yang mulai ditinggalkan atau kehilangan fungsi sosialnya." },
        { title: "Promosi Digital", content: "Media sosial dapat digunakan untuk memperkenalkan bahasa, makanan, pakaian, musik, tari, sejarah, dan tradisi lokal." },
        { title: "Digitalisasi Budaya", content: "Dokumentasi digital dapat membantu menyimpan pengetahuan, arsip, tradisi, dan karya budaya." },
        { title: "Ekonomi Kreatif", content: "Budaya dapat dikembangkan menjadi produk kreatif seperti kerajinan, kuliner, fashion, desain, musik, dan konten digital." },
        { title: "Adaptasi Budaya", content: "Budaya dapat dikemas dengan cara yang sesuai perkembangan zaman tanpa menghilangkan nilai dan identitas utamanya." },
        { title: "Lokal + Global", content: "Teknologi global dapat digunakan untuk mempromosikan budaya lokal ke masyarakat yang lebih luas." }
      ],
      keywords: ["pelestarian", "revitalisasi", "promosi digital", "digitalisasi", "ekonomi kreatif", "adaptasi budaya"],
      tkaFocus: "Pilih strategi yang memanfaatkan teknologi tanpa menghilangkan identitas dan nilai budaya lokal.",
      quickCheck: {
        question: "Apa strategi yang tepat untuk melestarikan budaya lokal di era globalisasi?",
        options: [
          "Menggunakan teknologi digital untuk mendokumentasikan dan mempromosikan budaya lokal tanpa menghilangkan nilai utamanya.",
          "Menolak seluruh teknologi modern karena dianggap mengancam budaya lokal.",
          "Menghapus bentuk budaya lama dan menggantinya dengan budaya populer global.",
          "Membatasi budaya lokal hanya untuk masyarakat yang berasal dari daerah tersebut."
        ],
        answerIndex: 0,
        explanation: "Budaya lokal dapat dilestarikan dengan memanfaatkan teknologi untuk dokumentasi, promosi, edukasi, dan pengembangan kreatif sambil tetap mempertahankan nilai serta identitas budayanya."
      }
    }
  ],


  // ==========================================================
  // FLASHCARDS
  // ==========================================================

  flashcards: [
    { id: "fc-1", materialId: 1, category: "A", question: "Apa itu sosiologi?", answer: "Ilmu yang mempelajari masyarakat, hubungan sosial, proses sosial, dan perubahan sosial." },
    { id: "fc-2", materialId: 1, category: "A", question: "Apa objek material sosiologi?", answer: "Masyarakat dan fenomena yang terjadi di dalamnya." },
    { id: "fc-3", materialId: 1, category: "A", question: "Apa objek formal sosiologi?", answer: "Hubungan, proses, dan pola sosial yang digunakan untuk melihat masyarakat." },
    { id: "fc-4", materialId: 2, category: "A", question: "Apa perbedaan nilai dan norma?", answer: "Nilai adalah sesuatu yang dianggap baik atau penting, sedangkan norma adalah aturan perilaku berdasarkan nilai." },
    { id: "fc-5", materialId: 3, category: "B", question: "Apa syarat interaksi sosial?", answer: "Kontak sosial dan komunikasi." },
    { id: "fc-6", materialId: 3, category: "B", question: "Apa itu kontak sekunder?", answer: "Kontak sosial yang berlangsung melalui perantara atau media." },
    { id: "fc-7", materialId: 4, category: "B", question: "Apa itu asimilasi?", answer: "Peleburan budaya melalui interaksi intensif sehingga perbedaan semakin berkurang." },
    { id: "fc-8", materialId: 4, category: "B", question: "Apa itu akulturasi?", answer: "Perpaduan budaya ketika unsur baru masuk tetapi budaya asli masih tetap terlihat." },
    { id: "fc-9", materialId: 4, category: "B", question: "Apa itu kontravensi?", answer: "Proses sosial antara persaingan dan konflik seperti penolakan, provokasi, atau rumor." },
    { id: "fc-10", materialId: 5, category: "B", question: "Apa itu urbanisasi?", answer: "Perpindahan penduduk dari desa menuju kota." },
    { id: "fc-11", materialId: 5, category: "B", question: "Apa itu push factor?", answer: "Faktor yang mendorong seseorang meninggalkan daerah asal." },
    { id: "fc-12", materialId: 5, category: "B", question: "Apa itu pull factor?", answer: "Faktor yang menarik seseorang menuju daerah tujuan." },
    { id: "fc-13", materialId: 6, category: "C", question: "Apa syarat kelompok sosial?", answer: "Interaksi, kesadaran anggota, tujuan/kepentingan, norma, dan identitas." },
    { id: "fc-14", materialId: 7, category: "C", question: "Apa kata kunci kelompok primer?", answer: "Dekat, personal, emosional." },
    { id: "fc-15", materialId: 7, category: "C", question: "Apa itu reference group?", answer: "Kelompok yang dijadikan acuan dalam sikap atau perilaku." },
    { id: "fc-16", materialId: 8, category: "C", question: "Apa itu inklusivitas?", answer: "Melibatkan dan memberikan kesempatan kepada semua pihak." },
    { id: "fc-17", materialId: 8, category: "C", question: "Apa itu etnosentrisme?", answer: "Menilai budaya lain menggunakan budaya sendiri sebagai standar dan menganggap budaya sendiri lebih unggul." },
    { id: "fc-18", materialId: 9, category: "D", question: "Apa itu konflik horizontal?", answer: "Konflik antara pihak yang kedudukannya relatif sejajar." },
    { id: "fc-19", materialId: 9, category: "D", question: "Apa itu konflik vertikal?", answer: "Konflik antara pihak yang memiliki perbedaan kedudukan atau kekuasaan." },
    { id: "fc-20", materialId: 10, category: "D", question: "Apa penyebab konflik yang umum?", answer: "Perbedaan kepentingan, nilai, budaya, perebutan sumber daya, ketimpangan, dan komunikasi buruk." },
    { id: "fc-21", materialId: 11, category: "D", question: "Apa itu mediasi?", answer: "Penyelesaian konflik dengan bantuan pihak ketiga yang tidak memiliki kewenangan memutuskan." },
    { id: "fc-22", materialId: 11, category: "D", question: "Apa itu arbitrase?", answer: "Penyelesaian konflik melalui pihak ketiga yang memiliki kewenangan memberikan keputusan." },
    { id: "fc-23", materialId: 11, category: "D", question: "Apa itu adjudikasi?", answer: "Penyelesaian konflik melalui pengadilan." },
    { id: "fc-24", materialId: 12, category: "E", question: "Apa itu rumusan masalah?", answer: "Pertanyaan utama yang ingin dijawab dalam penelitian." },
    { id: "fc-25", materialId: 13, category: "E", question: "Apa urutan inti penelitian?", answer: "Masalah → rumusan masalah → tujuan → metode → data → analisis → kesimpulan." },
    { id: "fc-26", materialId: 14, category: "E", question: "Apa ciri penelitian kuantitatif?", answer: "Menggunakan data yang dapat diukur, angka, persentase, dan analisis statistik." },
    { id: "fc-27", materialId: 14, category: "E", question: "Apa ciri penelitian kualitatif?", answer: "Memahami makna, pengalaman, persepsi, dan proses sosial secara mendalam." },
    { id: "fc-28", materialId: 15, category: "E", question: "Teknik apa untuk mengamati perilaku langsung?", answer: "Observasi." },
    { id: "fc-29", materialId: 15, category: "E", question: "Teknik apa untuk menggali pengalaman mendalam?", answer: "Wawancara." },
    { id: "fc-30", materialId: 16, category: "E", question: "Sampling berdasarkan kriteria tertentu?", answer: "Purposive sampling." },
    { id: "fc-31", materialId: 17, category: "E", question: "Apa itu indikator penelitian?", answer: "Ukuran atau tanda yang digunakan untuk menjabarkan variabel." },
    { id: "fc-32", materialId: 18, category: "E", question: "Apa prinsip interpretasi data?", answer: "Kesimpulan harus sesuai dengan data dan tidak boleh melebihi informasi yang tersedia." },
    { id: "fc-33", materialId: 19, category: "F", question: "Apakah ketidaksetaraan hanya soal ekonomi?", answer: "Tidak. Ketidaksetaraan juga dapat berupa akses pendidikan, kesehatan, informasi, kekuasaan, dan kesempatan." },
    { id: "fc-34", materialId: 20, category: "F", question: "Apa dampak ketidaksetaraan?", answer: "Kesenjangan, kemiskinan, marginalisasi, eksklusi, konflik, dan hambatan mobilitas." },
    { id: "fc-35", materialId: 21, category: "F", question: "Apa itu affirmative action?", answer: "Dukungan khusus bagi kelompok yang mengalami ketertinggalan agar kesempatan lebih setara." },
    { id: "fc-36", materialId: 22, category: "F", question: "Apa rantai masalah sosial?", answer: "Ketimpangan → marginalisasi → keterbatasan akses → kemiskinan → masalah sosial." },
    { id: "fc-37", materialId: 24, category: "G", question: "Apa itu perubahan sosial?", answer: "Perubahan pada struktur, nilai, norma, pola hubungan, atau lembaga sosial." },
    { id: "fc-38", materialId: 25, category: "G", question: "Apa itu evolusi?", answer: "Perubahan yang berlangsung perlahan dan bertahap." },
    { id: "fc-39", materialId: 25, category: "G", question: "Apa itu revolusi?", answer: "Perubahan yang berlangsung cepat dan bersifat mendasar." },
    { id: "fc-40", materialId: 25, category: "G", question: "Apa itu planned change?", answer: "Perubahan yang direncanakan." },
    { id: "fc-41", materialId: 27, category: "G", question: "Apa itu disorganisasi?", answer: "Norma lama melemah sementara norma baru belum stabil." },
    { id: "fc-42", materialId: 27, category: "G", question: "Apa itu reorganisasi?", answer: "Terbentuknya keteraturan baru setelah perubahan." },
    { id: "fc-43", materialId: 28, category: "H", question: "Apa inti globalisasi?", answer: "Meningkatnya keterhubungan dan ketergantungan masyarakat lintas wilayah." },
    { id: "fc-44", materialId: 29, category: "H", question: "Mengapa globalisasi dapat memperlebar ketimpangan?", answer: "Karena akses terhadap modal, pendidikan, teknologi, dan peluang global berbeda." },
    { id: "fc-45", materialId: 30, category: "H", question: "Apa itu cultural shock?", answer: "Kesulitan menyesuaikan diri ketika menghadapi budaya yang berbeda." },
    { id: "fc-46", materialId: 30, category: "H", question: "Apa itu cultural lag?", answer: "Ketertinggalan salah satu unsur budaya dalam menyesuaikan diri terhadap perubahan unsur lainnya." },
    { id: "fc-47", materialId: 30, category: "H", question: "Apa itu konsumerisme?", answer: "Kecenderungan mengonsumsi barang atau jasa secara berlebihan." },
    { id: "fc-48", materialId: 30, category: "H", question: "Apa itu disinformasi?", answer: "Informasi salah yang sengaja disebarkan untuk menyesatkan." },
    { id: "fc-49", materialId: 31, category: "H", question: "Apa itu literasi digital?", answer: "Kemampuan memahami, mengevaluasi, menggunakan, dan membuat informasi digital secara bertanggung jawab." },
    { id: "fc-50", materialId: 31, category: "H", question: "Bagaimana sikap terhadap informasi viral?", answer: "Periksa sumber, bukti, konteks, dan kredibilitas sebelum percaya atau menyebarkannya." },
    { id: "fc-51", materialId: 31, category: "H", question: "Apakah sikap kritis berarti anti-globalisasi?", answer: "Tidak. Sikap kritis berarti selektif terhadap pengaruh global." },
    { id: "fc-52", materialId: 32, category: "H", question: "Apa itu revitalisasi budaya?", answer: "Upaya menghidupkan kembali budaya yang mulai ditinggalkan." },
    { id: "fc-53", materialId: 32, category: "H", question: "Apa contoh digitalisasi budaya?", answer: "Mendokumentasikan tradisi lokal dalam bentuk video atau arsip digital." },
    { id: "fc-54", materialId: 32, category: "H", question: "Apa contoh adaptasi budaya?", answer: "Mengemas budaya tradisional melalui media modern tanpa menghilangkan nilai utamanya." }
  ],


  // ==========================================================
  // QUESTIONS
  // ==========================================================

  questions: [
    {
      id: 1,
      materialId: 1,
      difficulty: "Mudah",
      question: "Seorang peneliti mengkaji perubahan pola komunikasi siswa setelah penggunaan media sosial meningkat. Konsep yang paling tepat adalah...",
      options: ["A. Fenomena sosial", "B. Norma hukum", "C. Mobilitas geografis", "D. Koersi", "E. Stratifikasi"],
      answer: 0,
      explanation: "Perubahan pola komunikasi merupakan fenomena sosial karena berkaitan dengan perubahan hubungan dan perilaku masyarakat."
    },
    {
      id: 2,
      materialId: 2,
      difficulty: "Mudah",
      question: "Aturan yang mengatur seseorang agar tidak berbohong merupakan contoh...",
      options: ["A. Nilai sosial", "B. Norma sosial", "C. Struktur sosial", "D. Mobilitas sosial", "E. Kelompok sosial"],
      answer: 1,
      explanation: "Norma merupakan aturan atau pedoman perilaku yang berasal dari nilai."
    },
    {
      id: 3,
      materialId: 3,
      difficulty: "Mudah",
      question: "Rani mengirim pesan kepada Sinta dan Sinta membalas pesan tersebut. Hal tersebut menunjukkan...",
      options: ["A. Kontak sosial dan komunikasi", "B. Konflik dan akomodasi", "C. Stratifikasi dan mobilitas", "D. Asimilasi dan akulturasi", "E. Nilai dan norma"],
      answer: 0,
      explanation: "Pesan merupakan bentuk kontak sekunder dan balasan menunjukkan adanya komunikasi."
    },
    {
      id: 4,
      materialId: 4,
      difficulty: "Sedang",
      question: "Dua budaya bercampur dan menghasilkan unsur budaya baru, tetapi unsur budaya lama masih tetap terlihat. Proses tersebut disebut...",
      options: ["A. Asimilasi", "B. Akulturasi", "C. Kontravensi", "D. Koersi", "E. Persaingan"],
      answer: 1,
      explanation: "Akulturasi merupakan perpaduan budaya tanpa menghilangkan budaya asli sepenuhnya."
    },
    {
      id: 5,
      materialId: 5,
      difficulty: "Sedang",
      question: "Penduduk desa pindah ke kota karena lapangan pekerjaan di desa sangat terbatas. Kondisi tersebut merupakan faktor...",
      options: ["A. Penarik", "B. Pendorong", "C. Integratif", "D. Budaya", "E. Asosiatif"],
      answer: 1,
      explanation: "Kondisi di daerah asal yang mendorong seseorang pergi disebut faktor pendorong."
    },
    {
      id: 6,
      materialId: 6,
      difficulty: "Mudah",
      question: "Sekelompok siswa rutin bertemu, memiliki tujuan, aturan, dan identitas kelompok. Kondisi tersebut menunjukkan...",
      options: ["A. Kelompok sosial", "B. Kerumunan", "C. Kategori statistik", "D. Massa anonim", "E. Mobilitas"],
      answer: 0,
      explanation: "Interaksi berkelanjutan, tujuan, aturan, dan identitas merupakan ciri kelompok sosial."
    },
    {
      id: 7,
      materialId: 7,
      difficulty: "Mudah",
      question: "Keluarga merupakan contoh kelompok primer karena...",
      options: ["A. Hubungannya formal", "B. Hubungannya dekat dan emosional", "C. Memiliki struktur birokrasi", "D. Berorientasi keuntungan", "E. Tidak memiliki interaksi"],
      answer: 1,
      explanation: "Kelompok primer memiliki hubungan dekat, personal, dan emosional."
    },
    {
      id: 8,
      materialId: 8,
      difficulty: "Sedang",
      question: "Sekolah memberikan kesempatan kepada seluruh siswa dari berbagai latar belakang untuk mengikuti organisasi. Konsep yang tepat adalah...",
      options: ["A. Etnosentrisme", "B. Partikularisme", "C. Inklusivitas", "D. Eksklusi", "E. Primordialisme"],
      answer: 2,
      explanation: "Inklusivitas menekankan keterlibatan dan kesempatan bagi semua pihak."
    },
    {
      id: 9,
      materialId: 9,
      difficulty: "Sedang",
      question: "Masyarakat berkonflik dengan perusahaan karena perbedaan kepentingan mengenai penggunaan lahan. Konflik tersebut terutama merupakan konflik...",
      options: ["A. Kepentingan", "B. Primer", "C. Informal", "D. Referensi", "E. Asosiatif"],
      answer: 0,
      explanation: "Konflik terjadi karena pihak-pihak memiliki kepentingan berbeda terhadap sumber daya yang sama."
    },
    {
      id: 10,
      materialId: 10,
      difficulty: "Mudah",
      question: "Dua kelompok memperebutkan sumber air yang sama. Penyebab konflik paling jelas adalah...",
      options: ["A. Perebutan sumber daya", "B. Cultural lag", "C. Mobilitas", "D. Asimilasi", "E. Inklusi"],
      answer: 0,
      explanation: "Sumber daya yang terbatas dapat menjadi objek perebutan kepentingan."
    },
    {
      id: 11,
      materialId: 11,
      difficulty: "Sedang",
      question: "Dua kelompok yang bertikai dibantu tokoh netral. Tokoh tersebut hanya membantu komunikasi dan tidak memiliki kewenangan memutuskan. Ini adalah...",
      options: ["A. Arbitrase", "B. Adjudikasi", "C. Mediasi", "D. Koersi", "E. Revolusi"],
      answer: 2,
      explanation: "Mediator membantu pihak berkonflik tanpa memiliki kewenangan memberikan keputusan yang mengikat."
    },
    {
      id: 12,
      materialId: 12,
      difficulty: "Mudah",
      question: "Bagian penelitian yang berbentuk pertanyaan utama yang ingin dijawab disebut...",
      options: ["A. Kesimpulan", "B. Rumusan masalah", "C. Kajian teori", "D. Saran", "E. Instrumen"],
      answer: 1,
      explanation: "Rumusan masalah merupakan pertanyaan inti penelitian."
    },
    {
      id: 13,
      materialId: 13,
      difficulty: "Mudah",
      question: "Setelah rumusan masalah, bagian yang secara logis disusun adalah...",
      options: ["A. Tujuan penelitian", "B. Analisis data", "C. Kesimpulan", "D. Saran", "E. Lampiran"],
      answer: 0,
      explanation: "Rumusan masalah → tujuan penelitian."
    },
    {
      id: 14,
      materialId: 14,
      difficulty: "Mudah",
      question: "Penelitian menggunakan persentase, angka, dan analisis statistik. Pendekatan yang paling sesuai adalah...",
      options: ["A. Kualitatif", "B. Kuantitatif", "C. Historis", "D. Etnografis", "E. Fenomenologis"],
      answer: 1,
      explanation: "Data angka dan pengukuran merupakan ciri utama pendekatan kuantitatif."
    },
    {
      id: 15,
      materialId: 15,
      difficulty: "Mudah",
      question: "Peneliti mengamati langsung perilaku siswa di lingkungan sekolah. Teknik pengumpulan data yang digunakan adalah...",
      options: ["A. Observasi", "B. Kuesioner", "C. Dokumentasi", "D. Eksperimen", "E. Sampling"],
      answer: 0,
      explanation: "Mengamati perilaku secara langsung merupakan observasi."
    },
    {
      id: 16,
      materialId: 16,
      difficulty: "Sedang",
      question: "Peneliti memilih responden yang memenuhi kriteria sebagai korban bullying. Teknik sampling yang tepat adalah...",
      options: ["A. Simple random", "B. Stratified", "C. Cluster", "D. Area", "E. Purposive"],
      answer: 4,
      explanation: "Purposive sampling memilih responden berdasarkan kriteria tertentu."
    },
    {
      id: 17,
      materialId: 17,
      difficulty: "Sedang",
      question: "Frekuensi komunikasi digunakan sebagai ukuran variabel interaksi sosial. Frekuensi komunikasi tersebut merupakan...",
      options: ["A. Variabel", "B. Indikator", "C. Populasi", "D. Kesimpulan", "E. Teori"],
      answer: 1,
      explanation: "Indikator merupakan ukuran atau tanda yang menjabarkan variabel."
    },
    {
      id: 18,
      materialId: 18,
      difficulty: "Sedang",
      question: "Data menunjukkan partisipasi kegiatan lingkungan meningkat dari 40% menjadi 70%. Kesimpulan paling tepat adalah...",
      options: ["A. Masyarakat pasti semakin peduli", "B. Partisipasi meningkat", "C. Pemerintah pasti berhasil", "D. Media sosial pasti menjadi penyebab", "E. Semua warga aktif"],
      answer: 1,
      explanation: "Data hanya membuktikan adanya peningkatan partisipasi."
    },
    {
      id: 19,
      materialId: 19,
      difficulty: "Sedang",
      question: "Kelompok tertentu tidak memperoleh informasi yang sama mengenai program pemerintah. Hal tersebut menunjukkan ketidaksetaraan dalam...",
      options: ["A. Akses informasi", "B. Asimilasi", "C. Kontak primer", "D. Persaingan", "E. Paguyuban"],
      answer: 0,
      explanation: "Ketidakmerataan akses terhadap informasi merupakan bentuk ketidaksetaraan."
    },
    {
      id: 20,
      materialId: 20,
      difficulty: "Sedang",
      question: "Ketidaksetaraan yang berlangsung lama dapat menimbulkan rasa tidak adil dan pertentangan. Dampaknya adalah...",
      options: ["A. Integrasi otomatis", "B. Konflik sosial", "C. Akulturasi", "D. Akomodasi", "E. Mobilitas naik"],
      answer: 1,
      explanation: "Ketidakadilan dapat menjadi sumber konflik sosial."
    },
    {
      id: 21,
      materialId: 21,
      difficulty: "Sedang",
      question: "Pemerintah memberikan beasiswa khusus kepada kelompok kurang mampu untuk memperluas akses pendidikan. Kebijakan tersebut merupakan...",
      options: ["A. Etnosentrisme", "B. Affirmative action", "C. Koersi", "D. Kontravensi", "E. Regress"],
      answer: 1,
      explanation: "Affirmative action memberikan dukungan khusus kepada kelompok yang mengalami ketertinggalan."
    },
    {
      id: 22,
      materialId: 22,
      difficulty: "Sedang",
      question: "Urutan dinamika permasalahan sosial yang tepat adalah...",
      options: [
        "A. Kemiskinan → ketimpangan → akses",
        "B. Ketimpangan → marginalisasi → keterbatasan akses → kemiskinan → masalah sosial",
        "C. Masalah sosial → akses → ketimpangan",
        "D. Akses → masalah sosial → ketimpangan",
        "E. Kemiskinan → marginalisasi → ketimpangan"
      ],
      answer: 1,
      explanation: "Rantai tersebut menunjukkan hubungan sebab-akibat dari ketimpangan menuju masalah sosial."
    },
    {
      id: 23,
      materialId: 24,
      difficulty: "Mudah",
      question: "Perubahan cara masyarakat berkomunikasi dari tatap muka menjadi menggunakan platform digital merupakan perubahan pada...",
      options: ["A. Pola interaksi", "B. Stratifikasi", "C. Kelas sosial", "D. Mobilitas", "E. Konflik"],
      answer: 0,
      explanation: "Teknologi mengubah pola interaksi sosial."
    },
    {
      id: 24,
      materialId: 25,
      difficulty: "Mudah",
      question: "Perubahan yang berlangsung secara perlahan dan bertahap disebut...",
      options: ["A. Revolusi", "B. Evolusi", "C. Koersi", "D. Regress", "E. Arbitrase"],
      answer: 1,
      explanation: "Evolusi merupakan perubahan yang berlangsung perlahan dan bertahap."
    },
    {
      id: 25,
      materialId: 26,
      difficulty: "Sedang",
      question: "Masyarakat mengalami perubahan teknologi sehingga membutuhkan aturan baru. Faktor perubahan tersebut berkaitan dengan...",
      options: ["A. Penemuan baru", "B. Kepentingan tertanam", "C. Sikap tertutup", "D. Konservatisme", "E. Eksklusi"],
      answer: 0,
      explanation: "Penemuan atau inovasi baru dapat menjadi faktor pendorong perubahan sosial."
    },
    {
      id: 26,
      materialId: 27,
      difficulty: "Sedang",
      question: "Norma lama melemah sementara norma baru belum stabil. Kondisi tersebut disebut...",
      options: ["A. Reorganisasi", "B. Disorganisasi", "C. Asimilasi", "D. Integrasi", "E. Akomodasi"],
      answer: 1,
      explanation: "Disorganisasi terjadi ketika keteraturan lama melemah sebelum keteraturan baru terbentuk."
    },
    {
      id: 27,
      materialId: 28,
      difficulty: "Mudah",
      question: "Hubungan masyarakat antarnegara semakin cepat karena perkembangan internet, transportasi, dan perdagangan. Fenomena tersebut merupakan...",
      options: ["A. Globalisasi", "B. Urbanisasi", "C. Konflik", "D. Mobilitas vertikal", "E. Akomodasi"],
      answer: 0,
      explanation: "Meningkatnya keterhubungan antarwilayah merupakan ciri globalisasi."
    },
    {
      id: 28,
      materialId: 29,
      difficulty: "Sedang",
      question: "Kelompok yang memiliki akses pendidikan dan teknologi lebih baik memperoleh manfaat ekonomi global lebih besar. Hal tersebut menunjukkan...",
      options: ["A. Kesetaraan otomatis", "B. Ketimpangan sosial", "C. Akomodasi", "D. Paguyuban", "E. Kontak primer"],
      answer: 1,
      explanation: "Perbedaan akses terhadap sumber daya dapat menyebabkan manfaat globalisasi tidak terbagi secara merata."
    },
    {
      id: 29,
      materialId: 30,
      difficulty: "Sedang",
      question: "Teknologi berkembang sangat cepat tetapi aturan sosial belum mampu menyesuaikan diri. Konsep yang paling tepat adalah...",
      options: ["A. Cultural lag", "B. Cultural shock", "C. Asimilasi", "D. Urbanisasi", "E. In-group"],
      answer: 0,
      explanation: "Cultural lag terjadi ketika salah satu unsur budaya tertinggal dalam menyesuaikan diri dengan perubahan unsur lain."
    },
    {
      id: 30,
      materialId: 31,
      difficulty: "Mudah",
      question: "Sikap paling tepat ketika menerima informasi viral adalah...",
      options: ["A. Langsung menyebarkannya", "B. Percaya karena banyak yang membagikan", "C. Memeriksa sumber dan bukti", "D. Menolak seluruh informasi digital", "E. Mengikuti mayoritas"],
      answer: 2,
      explanation: "Literasi digital mengharuskan seseorang memeriksa sumber dan bukti sebelum mempercayai informasi."
    },
    {
      id: 31,
      materialId: 31,
      difficulty: "Sedang",
      question: "Siswa menggunakan media sosial untuk mempromosikan budaya daerah kepada generasi muda. Sikap tersebut menunjukkan...",
      options: ["A. Anti-globalisasi", "B. Etnosentrisme", "C. Pemanfaatan globalisasi secara positif", "D. Westernisasi", "E. Eksklusi"],
      answer: 2,
      explanation: "Teknologi global digunakan untuk memperkuat dan mempromosikan budaya lokal."
    },
    {
      id: 32,
      materialId: 32,
      difficulty: "Sedang",
      question: "Tradisi lokal didokumentasikan dalam video digital dan diperkenalkan kepada generasi muda tanpa menghilangkan nilai utamanya. Tindakan tersebut merupakan...",
      options: ["A. Digitalisasi dan adaptasi budaya", "B. Etnosentrisme", "C. Koersi", "D. Cultural shock", "E. Kontravensi"],
      answer: 0,
      explanation: "Teknologi digunakan untuk melestarikan dan menyesuaikan penyampaian budaya tanpa menghilangkan nilai utamanya."
    }
  ],


  // ==========================================================
  // QUICK REVIEW
  // ==========================================================

  quickReview: [
    { term: "Sosiologi", key: "Ilmu tentang masyarakat dan hubungan sosial" },
    { term: "Nilai sosial", key: "Sesuatu yang dianggap baik/penting" },
    { term: "Norma sosial", key: "Aturan perilaku" },
    { term: "Interaksi sosial", key: "Kontak + komunikasi + respons" },
    { term: "Kontak primer", key: "Langsung" },
    { term: "Kontak sekunder", key: "Melalui perantara/media" },
    { term: "Kerja sama", key: "Usaha bersama" },
    { term: "Akomodasi", key: "Meredakan konflik" },
    { term: "Asimilasi", key: "Melebur" },
    { term: "Akulturasi", key: "Bercampur, budaya asli tetap ada" },
    { term: "Persaingan", key: "Berlomba mendapatkan sesuatu" },
    { term: "Kontravensi", key: "Penolakan/provokasi/rumor" },
    { term: "Konflik", key: "Pertentangan terbuka" },
    { term: "Urbanisasi", key: "Desa → kota" },
    { term: "Push factor", key: "Mendorong meninggalkan daerah asal" },
    { term: "Pull factor", key: "Menarik menuju daerah tujuan" },
    { term: "Kelompok sosial", key: "Interaksi + kesadaran + tujuan/norma" },
    { term: "Primer", key: "Dekat/personal/emosional" },
    { term: "Sekunder", key: "Formal/tujuan" },
    { term: "In-group", key: "Kelompok kami" },
    { term: "Out-group", key: "Kelompok mereka" },
    { term: "Reference group", key: "Kelompok acuan" },
    { term: "Paguyuban", key: "Kekeluargaan" },
    { term: "Patembayan", key: "Rasional/kepentingan" },
    { term: "Inklusivitas", key: "Semua pihak dilibatkan" },
    { term: "Etnosentrisme", key: "Budaya sendiri dianggap paling unggul" },
    { term: "Konflik horizontal", key: "Pihak relatif sejajar" },
    { term: "Konflik vertikal", key: "Ada perbedaan kekuasaan/kedudukan" },
    { term: "Mediasi", key: "Pihak ketiga membantu" },
    { term: "Arbitrase", key: "Pihak ketiga memutuskan" },
    { term: "Negosiasi", key: "Berunding langsung" },
    { term: "Kompromi", key: "Sama-sama mengurangi tuntutan" },
    { term: "Adjudikasi", key: "Pengadilan" },
    { term: "Koersi", key: "Paksaan" },
    { term: "Kuantitatif", key: "Angka/pengukuran" },
    { term: "Kualitatif", key: "Makna/pengalaman" },
    { term: "Observasi", key: "Mengamati" },
    { term: "Wawancara", key: "Bertanya kepada informan" },
    { term: "Kuesioner", key: "Daftar pertanyaan" },
    { term: "Dokumentasi", key: "Arsip/foto/video/dokumen" },
    { term: "Purposive sampling", key: "Berdasarkan kriteria" },
    { term: "Simple random", key: "Acak" },
    { term: "Stratified", key: "Strata/lapisan" },
    { term: "Cluster", key: "Kelompok" },
    { term: "Area sampling", key: "Wilayah" },
    { term: "Variabel", key: "Hal yang diteliti/diukur" },
    { term: "Indikator", key: "Ukuran/tanda variabel" },
    { term: "Instrumen", key: "Alat pengumpulan data" },
    { term: "Evolusi", key: "Lambat/bertahap" },
    { term: "Revolusi", key: "Cepat/mendasar" },
    { term: "Planned change", key: "Direncanakan" },
    { term: "Unplanned change", key: "Tidak direncanakan" },
    { term: "Progress", key: "Menuju kondisi lebih baik" },
    { term: "Regress", key: "Menuju kemunduran" },
    { term: "Disorganisasi", key: "Norma lama melemah" },
    { term: "Reorganisasi", key: "Keteraturan baru terbentuk" },
    { term: "Globalisasi", key: "Keterhubungan lintas wilayah" },
    { term: "Kesenjangan digital", key: "Akses teknologi tidak merata" },
    { term: "Hoaks", key: "Informasi palsu" },
    { term: "Disinformasi", key: "Informasi salah yang sengaja menyesatkan" },
    { term: "Konsumerisme", key: "Konsumsi berlebihan" },
    { term: "Westernisasi", key: "Peniruan budaya Barat secara berlebihan" },
    { term: "Cultural shock", key: "Kesulitan menghadapi budaya berbeda" },
    { term: "Cultural lag", key: "Ketertinggalan penyesuaian budaya" },
    { term: "Literasi digital", key: "Memahami dan mengevaluasi informasi digital" },
    { term: "Affirmative action", key: "Dukungan khusus untuk kelompok tertinggal" },
    { term: "Marginalisasi", key: "Kelompok terdorong ke posisi kurang menguntungkan" },
    { term: "Eksklusi", key: "Tidak dilibatkan/tidak mendapat akses" },
    { term: "Stratifikasi sosial", key: "Pelapisan masyarakat" },
    { term: "Kesetaraan", key: "Hak dan kesempatan yang adil" },
    { term: "Pelestarian budaya", key: "Menjaga budaya tetap hidup" },
    { term: "Revitalisasi", key: "Menghidupkan kembali budaya" },
    { term: "Digitalisasi budaya", key: "Menyimpan/mempromosikan budaya melalui teknologi" },
    { term: "Adaptasi budaya", key: "Menyesuaikan cara penyampaian tanpa menghilangkan nilai utama" }
  ]

};


// ============================================================
// CONVENIENCE ALIASES & NORMALIZATION ADAPTER
// ============================================================

const sections = TKA_DATA.sections;
const materials = TKA_DATA.materials;
const rawFlashcards = TKA_DATA.flashcards;
const questions = TKA_DATA.questions;
const rawQuickReview = TKA_DATA.quickReview;


// ============================================================
// BUILD MATERI SECTIONS
// ============================================================

TKA_DATA.materiSections = TKA_DATA.sections.map(sec => {

  const secId = `section-${sec.id.toLowerCase()}`;
  const secMaterials = TKA_DATA.materials.filter(m => m.section === sec.id);

  return {
    id: secId,
    code: `SECTION ${sec.id}`,
    title: sec.title,
    description: sec.description,
    items: secMaterials.map(m => {
      const pengertianTopic = m.topics ? m.topics.find(t => t.title.toLowerCase().includes("pengertian")) : null;
      const pengertianText = pengertianTopic ? pengertianTopic.content : m.overview;
      const otherTopics = m.topics ? m.topics.filter(t => t !== pengertianTopic) : [];

      return {
        id: m.id,
        sectionId: secId,
        code: `MATERI ${m.id < 10 ? "0" + m.id : m.id}`,
        title: m.title,
        overview: m.overview,
        pengertian: pengertianText,
        konsepPenting: otherTopics.map(t => ({ title: t.title, desc: t.content })),
        penjelasanMendalam: (m.topics || [])
          .map(t => `<div style="margin-bottom:14px;"><strong>${t.title}</strong><p style="margin-top:4px; line-height:1.7;">${t.content}</p></div>`)
          .join(""),
        tkaFocus: m.tkaFocus || "",
        jebakan: m.warning || (m.example ? `Contoh Kasus: ${m.example}` : "Perhatikan baik-baik indikator soal TKA."),
        keywords: m.keywords || [],
        caseAnalysis: m.example ? {
          kasus: m.example,
          apaTerjadi: "Fenomena sosial yang dijelaskan dalam contoh kasus.",
          konsepRelevan: m.keywords ? m.keywords.slice(0, 3).join(", ") : m.title,
          buktiKasus: m.overview,
          kesimpulan: m.tkaFocus || m.overview
        } : null,
        quickCheck: m.quickCheck ? [
          {
            question: m.quickCheck.question,
            options: m.quickCheck.options || [],
            answerIndex: m.quickCheck.answerIndex ?? 0,
            explanation: m.quickCheck.explanation || ""
          }
        ] : []
      };
    })
  };

});


// ============================================================
// FLASHCARDS NORMALIZED
// ============================================================

TKA_DATA.flashcards = rawFlashcards.map(fc => ({
  ...fc,
  front: fc.question || fc.front,
  back: fc.answer || fc.back,
  category: fc.category
    ? (fc.category.toLowerCase().startsWith("section-") ? fc.category.toLowerCase() : `section-${fc.category.toLowerCase()}`)
    : "all"
}));


// ============================================================
// CONTOH SOAL & LATIHAN SOAL
// ============================================================

TKA_DATA.contohSoal = TKA_DATA.questions.slice(0, 10).map(q => ({
  soal: q.question,
  options: q.options,
  answer: String.fromCharCode(65 + q.answer),
  pembahasan: q.explanation
}));

TKA_DATA.latihanSoal = TKA_DATA.questions.map(q => ({
  id: q.id,
  difficulty: q.difficulty ? q.difficulty.toLowerCase() : "sedang",
  soal: q.question,
  options: q.options,
  answerIndex: q.answer,
  pembahasan: q.explanation
}));


// ============================================================
// QUICK REVIEW NORMALIZED
// ============================================================

TKA_DATA.quickReview = rawQuickReview.map(qr => ({
  category: "RINGKASAN KONSEP",
  title: qr.term || qr.title,
  desc: qr.key || qr.desc
}));


// ============================================================
// GLOBAL WINDOW BINDING
// ============================================================

if (typeof window !== "undefined") {
  window.TKA_DATA = TKA_DATA;

  window.tkaData = {
    ...TKA_DATA,
    sections,
    materials,
    flashcards: TKA_DATA.flashcards,
    questions,
    questionBank: questions,
    quickReview: TKA_DATA.quickReview,
    quickReviews: TKA_DATA.quickReview,
    appMetadata: TKA_DATA.meta,
    metadata: TKA_DATA.meta
  };
}