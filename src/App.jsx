import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import About from "./pages/about";

import Infor from "./pages/infor";
import Transcompleted from "./components/Transcompleted";
import Payments from "./pages/payments";

import Mostpicked from "./components/features/home/Mostpicked";
import NotFound from "./components/NotFound";
import { Layout } from "./components/layout";
import { Layout2 } from "./components/LayoutWithNavbar2/inddex";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Navbar /> */}
        <Route path="/" element={<Home />} />
        <Route
          path="/"
          element={
            <Layout>
              <Mostpicked />
            </Layout>
          }
        />

        <Route path="/hotel/:id" element={<About />} />

        <Route
          path="/hotel/information"
          element={
            <Layout2>
              <Infor />
            </Layout2>
          }
        />
        <Route
          path="/payments"
          element={
            <Layout2>
              <Payments />
            </Layout2>
          }
        />

        <Route
          path="/transcompleted"
          element={
            <Layout2>
              <Transcompleted />
            </Layout2>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
