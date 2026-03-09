import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="container-page py-8">{children}</main>
      <Footer />
    </div>
  );
}
