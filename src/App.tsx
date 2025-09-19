import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/home";
import { AnimationPage } from "./pages/animation";
import { AnimationDetailPage } from "./pages/animation-detail";
import { JourneyPage } from "./pages/journey";
import { AboutPage } from "./pages/about";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/animation" element={<AnimationPage />} />
            <Route path="/animation/:id" element={<AnimationDetailPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}