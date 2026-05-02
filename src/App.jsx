import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Startups from './pages/Startups';
import StartupDetail from './pages/StartupDetail';
import DesignSystem from './pages/DesignSystem';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-page text-primary">
        <TopBar />
        <main className="flex-1 overflow-y-auto pt-20 pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/startups/:id" element={<StartupDetail />} />
            <Route path="/design-system" element={<DesignSystem />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
