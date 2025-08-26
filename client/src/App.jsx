import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import { Outlet } from 'react-router-dom'; // <-- IMPORT THIS

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <Outlet /> {/* <-- REPLACE THE H1 WITH THIS */}
      </main>
      <Footer />
    </>
  );
}

export default App;