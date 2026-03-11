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
        <Route path="/category/:slug" element={<TaxonomyPage mode="category" />} />
        <Route path="/tag/:slug" element={<TaxonomyPage mode="tag" />} />
        <Route path="/about" element={<SimplePage title="About" description="About blogdoktersobri" path="/about">blogdoktersobri is a health education media platform with informative and practical articles for the general public.</SimplePage>} />
        <Route path="/contact" element={<SimplePage title="Contact" description="blogdoktersobri editorial contact" path="/contact">Email: redaksi@blogdoktersobri.com</SimplePage>} />
        <Route path="/privacy-policy" element={<SimplePage title="Privacy Policy" description="Privacy policy" path="/privacy-policy">We handle user data transparently and in accordance with applicable regulations.</SimplePage>} />
        <Route path="/disclaimer" element={<SimplePage title="Disclaimer" description="Medical disclaimer" path="/disclaimer">This content is educational and not a substitute for professional medical consultation.</SimplePage>} />
        <Route path="/terms" element={<SimplePage title="Terms of Service" description="Terms of service" path="/terms">By using this site, you agree to the applicable terms of use.</SimplePage>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}
