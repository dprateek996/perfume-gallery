import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;