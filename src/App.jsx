import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/home";
import About from "./pages/about";
import Info from "./pages/info";
import Infor from "./pages/infor";
import Transcompleted from "./components/Transcompleted";
import Payments from "./pages/payments";
import Payment from "./pages/payment";
import HotelDetails from "./components/features/home/HotelDetails";
import Mostpicked from "./components/features/home/Mostpicked";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Navbar /> */}
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Mostpicked />} />
        <Route path="/:id" element={<HotelDetails />} />
        <Route path="/hotel/:id" element={<About />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/info" element={<Info />} />
        <Route path="/infor" element={<Infor />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transcompleted" element={<Transcompleted />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
