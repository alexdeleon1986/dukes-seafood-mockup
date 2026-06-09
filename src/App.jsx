import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LocationsIndex from './pages/LocationsIndex';
import LocationPage from './pages/LocationPage';
import MenusHub from './pages/MenusHub';
import MenuPage from './pages/MenuPage';
import OurStory from './pages/OurStory';
import Chowder from './pages/Chowder';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<LocationsIndex />} />
        <Route path="/locations/:slug" element={<LocationPage />} />
        <Route path="/menus" element={<MenusHub />} />
        <Route path="/menus/:slug" element={<MenuPage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/chowder" element={<Chowder />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
