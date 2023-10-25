import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";

import "./App.css";
import Account from "./pages/myAccount/Account";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mon-compte" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
