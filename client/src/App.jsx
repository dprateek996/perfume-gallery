import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;