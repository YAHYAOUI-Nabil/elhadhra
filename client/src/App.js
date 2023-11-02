import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";


import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import Account from "./pages/myAccount";
import ArticlesByCategory from "./pages/articlesByCategory";
import ArticleDetails from "./pages/articlesDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mon-compte" element={<Account />} />
        <Route path="/category/:category" element={<ArticlesByCategory />} />
        <Route path="/category/article/:id" element={<ArticleDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
