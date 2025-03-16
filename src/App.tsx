import Container from './components/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
const App = () => {
  console.log(import.meta.env.VITE_GITHUB_API_TOKEN);
  console.log(import.meta.env.VITE_GITHUB_URL);
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />

      <Container>
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
