# blogdoktersobri

Website blog edukasi kesehatan berbasis **React + Vite + Tailwind CSS** dengan fokus performa, SEO on-page, dan struktur konten yang siap dikembangkan ke skala lebih besar.

> ⚠️ **Disclaimer:** Konten pada website ini bersifat edukatif dan tidak menggantikan diagnosis atau konsultasi medis langsung.

## Fitur utama

- Routing modern dengan `react-router-dom`.
- Struktur halaman blog lengkap: home, listing artikel, detail artikel, kategori, tag, dan halaman legal.
- Komponen reusable untuk layout, kartu artikel, SEO head, dan slot iklan.
- Data artikel lokal (mudah dimigrasikan ke CMS atau Markdown).
- Dukungan file SEO teknis di folder `public`:
  - `sitemap.xml`
  - `robots.txt`
  - `ads.txt`

## Teknologi

- **Frontend:** React 18
- **Bundler:** Vite 5
- **Styling:** Tailwind CSS 3 + PostCSS
- **Routing:** React Router DOM 6
- **Deploy target:** Vercel

## Struktur proyek

```txt
blogdoktersobri_/
├─ public/
│  ├─ ads.txt
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ components/   # Komponen UI reusable
│  ├─ data/         # Data artikel
│  ├─ layouts/      # Layout utama
│  ├─ pages/        # Halaman routing
│  ├─ styles/       # Global style
│  └─ utils/        # Helper content & SEO
├─ docs/
│  └─ blueprint.md
└─ package.json
```

## Menjalankan di lokal

### 1) Install dependency

```bash
npm install
```

### 2) Jalankan development server

```bash
npm run dev
```

Aplikasi biasanya tersedia di `http://localhost:5173`.

## Build production

```bash
npm run build
```

Output build ada di folder `dist/`.

## Preview build lokal

```bash
npm run preview
```

## Deploy ke Vercel

1. Push repository ke Git provider (GitHub/GitLab/Bitbucket).
2. Import project ke Vercel.
3. Gunakan konfigurasi berikut:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.

## Checklist sebelum publish

- Perbarui metadata SEO di komponen/halaman terkait.
- Pastikan semua artikel punya slug, judul, excerpt, kategori, tag, dan tanggal publikasi.
- Lengkapi `public/ads.txt` dengan Publisher ID AdSense.
- Validasi `sitemap.xml` dan `robots.txt` sesuai domain produksi.
- Review ulang disclaimer medis di halaman legal.

## Script NPM

- `npm run dev` → Menjalankan server development Vite.
- `npm run build` → Build produksi.
- `npm run preview` → Menjalankan hasil build secara lokal.

---

Jika Anda ingin, saya juga bisa bantu buat versi README yang lebih “produk” (dengan badge, screenshot, roadmap, dan panduan kontribusi tim).
