# 💬 Web Chat Real-Time

Aplikasi chat berbasis web yang modern, cepat, dan responsif. Memungkinkan pengguna untuk berkomunikasi secara langsung (*real-time*) dengan antarmuka yang bersih dan fitur indikator pengetikan.

---

## ✨ Fitur Unggulan

* **Real-Time Messaging**: Kirim dan terima pesan seketika tanpa perlu memuat ulang halaman berkat teknologi Socket.io.
* **Indikator Mengetik**: Mengetahui kapan lawan bicara sedang mengetik pesan.
* **Penghitung Pengguna**: Menampilkan jumlah total pengguna yang sedang aktif/online di dalam room.
* **Identitas Pengguna**: Modal awal untuk memasukkan nama agar percakapan lebih personal.
* **Desain Modern**: Antarmuka pengguna yang bersih menggunakan font Poppins dan skema warna biru yang nyaman di mata.
* **Timestamp Dinamis**: Menampilkan waktu pengiriman pesan yang presisi menggunakan Moment.js.

---

## 🚀 Teknologi yang Digunakan

* **Backend**: [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) (v5.2.1)
* **Real-Time Engine**: [Socket.io](https://socket.io/) (v4.8.1)
* **Frontend**: HTML5, CSS3, & JavaScript Vanilla
* **Library Pendukung**: Font Awesome (Ikon) & Moment.js (Format Waktu)

---

## 🛠️ Cara Instalasi

Pastikan Anda sudah menginstal **Node.js** di komputer Anda.

1.  **Clone repositori ini**
    ```bash
    git clone [https://github.com/username/web_chat_socketio.git](https://github.com/username/web_chat_socketio.git)
    cd web_chat_socketio
    ```

2.  **Instal *dependencies***
    ```bash
    npm install
    ```

3.  **Jalankan aplikasi**
    * Untuk mode produksi:
        ```bash
        npm start
        ```
    * Untuk mode pengembangan (menggunakan nodemon):
        ```bash
        npm run dev
        ```

4.  **Buka di Browser**
    Akses aplikasi di `http://localhost:4000`.

---

## 📁 Struktur Folder

* `app.js`: Server utama Node.js dan konfigurasi Socket.io.
* `public/`: Berisi aset frontend (HTML, CSS, JS).
* `package.json`: Informasi proyek dan daftar library yang digunakan.

---
