import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Info from "./pages/info";
import Infor from "./pages/infor";
import Transcompleted from "./components/Transcompleted";
import Payments from "./pages/payments";
import Payment from "./pages/payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Navbar /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="/infor" element={<Infor />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transcompleted" element={<Transcompleted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
