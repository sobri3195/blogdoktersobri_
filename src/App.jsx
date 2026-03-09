import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import TaxonomyPage from './pages/TaxonomyPage';
import SimplePage from './pages/SimplePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/kategori/:slug" element={<TaxonomyPage mode="category" />} />
        <Route path="/tag/:slug" element={<TaxonomyPage mode="tag" />} />
        <Route path="/about" element={<SimplePage title="About" description="Tentang blogdoktersobri" path="/about">blogdoktersobri adalah media edukasi kesehatan berbasis artikel informatif dan praktis untuk masyarakat umum.</SimplePage>} />
        <Route path="/contact" element={<SimplePage title="Contact" description="Kontak redaksi blogdoktersobri" path="/contact">Email: redaksi@blogdoktersobri.com</SimplePage>} />
        <Route path="/privacy-policy" element={<SimplePage title="Privacy Policy" description="Kebijakan privasi" path="/privacy-policy">Kami menjaga data pengguna secara transparan dan sesuai regulasi.</SimplePage>} />
        <Route path="/disclaimer" element={<SimplePage title="Disclaimer" description="Disclaimer medis" path="/disclaimer">Konten bersifat edukatif, bukan pengganti konsultasi medis profesional.</SimplePage>} />
        <Route path="/terms" element={<SimplePage title="Terms of Service" description="Syarat layanan" path="/terms">Dengan menggunakan situs ini, Anda menyetujui syarat penggunaan yang berlaku.</SimplePage>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}
