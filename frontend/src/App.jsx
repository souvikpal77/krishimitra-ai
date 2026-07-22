import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Disease from "./pages/Disease";
import Weather from "./pages/Weather";
import CropRecommendation from "./pages/CropRecommendation";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* AI Chat */}
      <Route path="/chat" element={<Chat />} />

      {/* Disease Detection */}
      <Route path="/disease" element={<Disease />} />

      {/* Weather */}
      <Route path="/weather" element={<Weather />} />

      {/* Crop Recommendation */}
      <Route
        path="/crop-recommendation"
        element={<CropRecommendation />}
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;