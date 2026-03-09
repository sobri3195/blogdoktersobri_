# Blueprint blogdoktersobri

## 1) Konsep branding
- Brand: **blogdoktersobri**
- Nilai: modern, profesional, terpercaya, informatif, ramah.
- UVP: edukasi kesehatan praktis untuk masyarakat umum (bukan diagnosis).

## 2) Struktur project/folder
- `src/components`: komponen reusable (SEOHead, cards, ad slot).
- `src/pages`: halaman routing.
- `src/data`: data artikel lokal (siap migrasi ke CMS/Markdown).
- `src/utils`: util SEO, parsing, helper.
- `public`: `sitemap.xml`, `robots.txt`, `ads.txt`.

## 3) Daftar halaman
- `/`, `/blog`, `/blog/:slug`, `/kategori/:slug`, `/tag/:slug`
- `/about`, `/contact`, `/privacy-policy`, `/disclaimer`, `/terms`, `*` (404)

## 4) Daftar komponen
- Layout: `MainLayout`, `Header`, `Footer`
- Content: `ArticleCard`, `AdSlot`
- SEO: `SEOHead`

## 5) Arsitektur data artikel
Field: `title`, `slug`, `excerpt`, `featuredImage`, `category`, `tags`, `author`, `publishDate`, `updatedDate`, `faq`, `content`, `popularScore`.

## 6) Strategi SEO on-page
- Title/description unik per halaman.
- Canonical, OG, Twitter Card.
- Schema `BlogPosting`, `BreadcrumbList`, FAQ (perlu ditambah JSON-LD FAQ per artikel).
- Struktur heading konsisten, alt image, lazy-load gambar.
- URL slug pendek dan deskriptif.

## 7) Strategi internal linking
- Related posts by kategori/tag.
- Link dari homepage ke pilar kategori.
- CTA bawah artikel ke artikel relevan.
- Gunakan anchor teks natural berbasis intent pengguna.

## 8) Struktur kategori scalable
1. Gejala Umum
2. Penyebab Penyakit Ringan
3. Gaya Hidup Sehat
4. Kesehatan Keluarga
5. Edukasi Obat Umum
6. Pola Makan Sehat
7. Kesehatan Anak
8. Kesehatan Lansia
9. Pertolongan Pertama Ringan
10. Mitos vs Fakta Kesehatan

## 9) 50 ide artikel
1. Sakit kepala tegang
2. Bedanya flu dan pilek
3. Batuk kering tak kunjung reda
4. Penyebab maag kambuh
5. Nyeri tenggorokan saat menelan
6. Demam naik turun
7. Sesak napas ringan
8. Kapan diare berbahaya
9. Mual setelah makan
10. Pusing saat bangun tidur
11. Tips tidur berkualitas
12. Cara minum air yang cukup
13. Jalan kaki untuk jantung
14. Cara kurangi gula harian
15. Manajemen stres sederhana
16. Tanda dehidrasi
17. Cuci tangan yang benar
18. Kebiasaan duduk sehat
19. Kesehatan mental ringan
20. Teknik napas 4-7-8
21. Demam pada bayi
22. Batuk pada anak
23. MPASI dan alergi
24. Imunisasi dasar ringkas
25. Gizi seimbang keluarga
26. Screen time anak
27. Nyeri sendi lansia
28. Cegah jatuh pada lansia
29. Tekanan darah tinggi ringan
30. Pola makan prediabetes
31. Vitamin: perlu atau tidak
32. Cara baca label obat
33. Obat demam OTC aman
34. Interaksi obat sederhana
35. Antibiotik: kapan perlu
36. P3K luka lecet
37. Pertolongan mimisan
38. Luka bakar ringan
39. Keseleo ringan
40. Tersedak pada anak
41. Mitos minum es sebabkan flu
42. Mitos telur sebabkan bisul
43. Mitos mandi malam sebabkan rematik
44. Mitos MSG dan kesehatan
45. Mitos kopi dan dehidrasi
46. Sarapan sehat praktis
47. Camilan sehat rendah gula
48. Pola makan untuk kolesterol
49. Kapan cek ke dokter umum
50. Tanda bahaya yang tidak boleh ditunda

## 10) Contoh slug SEO-friendly
- `cara-menurunkan-demam-anak-di-rumah`
- `pusing-dan-mual-kapan-harus-ke-dokter`
- `mitos-vs-fakta-minum-es-bikin-flu`

## 11) Contoh template artikel
- Judul
- Ringkasan
- Penyebab umum
- Langkah awal aman
- Kapan harus ke dokter
- Pencegahan
- FAQ
- Referensi tepercaya
- Disclaimer medis

## 12) Rekomendasi penempatan AdSense
- Atas konten (after hero)
- In-feed (antar kartu artikel listing)
- Dalam artikel (setelah paragraf awal + tengah)
- Bawah artikel
- Sidebar desktop (sticky non-intrusif)

## 13) Checklist approval AdSense
- Navigasi jelas & halaman legal lengkap
- Konten orisinal, konsisten, berkualitas
- Tidak ada klaim medis berlebihan
- Kecepatan mobile baik
- Struktur iklan tidak menipu klik
- Domain, SSL, dan identitas situs jelas
- Sitemap + robots + ads.txt tersedia
