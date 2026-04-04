# Metode Selembar

Aplikasi interaktif untuk belajar Al-Qur'an secara cepat dan tepat.

## Fitur
- Tabel Huruf Hijaiyah Interaktif.
- Teks Latihan Bacaan.
- Audio playback untuk membantu pelafalan.

## Pengembangan Lokal

1. Pastikan Anda memiliki [Node.js](https://nodejs.org/) terinstal.
2. Clone repository ini.
3. Jalankan perintah berikut untuk menginstal dependensi (opsional, untuk `serve`):
   ```bash
   npm install
   ```
4. Jalankan server lokal:
   ```bash
   npm start
   ```

## Penyebaran (Deployment)

Aplikasi ini siap dideploy ke **Vercel**:

1. Hubungkan repository GitHub Anda ke Vercel.
2. Vercel akan secara otomatis mendeteksi konfigurasi dan mendeploy aplikasi.
3. Setiap kali Anda melakukan `push` ke branch `main`, Vercel akan melakukan update otomatis.

Atau gunakan Vercel CLI:
```bash
vercel --prod
```
