import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";


import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import Account from "./pages/myAccount";
import ArticlesByCategory from "./pages/articlesByCategory";
import ArticleDetails from "./pages/articlesDetails";
import AboutUS from "./pages/aboutUs";
import SideBar from "./components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <div className="fixed z-[9999]">
          <SideBar />
        </div>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qui-sommes-nous" element={<AboutUS />} />
            <Route path="/mon-compte" element={<Account />} />
            <Route path="/category/:category" element={<ArticlesByCategory />} />
            <Route path="/category/article/:id" element={<ArticleDetails />} />
          </Routes>
          <Footer />
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
