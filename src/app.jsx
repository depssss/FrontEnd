import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./MainLayout/login";
import Signup from "./MainLayout/signup";
import Home from "./MainLayout/homepage";
import Navbarhome from "./components/navbar/navbarhome";
import Footer from "./components/footer/footer";
import ProfilSetting from "./MainLayout/profilSetting";
import DashboardMitra from "./MainLayout/mitra/dashboardMitra";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbarhome" element={<Navbarhome />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/profil/setting" element={<ProfilSetting />} />
        <Route path="/dashboard-mitra" element={<DashboardMitra />} />
        {/* tambahkan route lainnya jika perlu */}
        
      </Routes>
    </Router>
  );
}

export default App;
