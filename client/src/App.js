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
import ScrollToTop from "./utils/ScrollToTop";

import { useStateContext } from "./context/ContextProvider";
import Profile from "./pages/myAccount/components/Profile";

function App() {
  const { activeMenu } = useStateContext();
  return (
    <BrowserRouter>
      <div className="relative">
        { 
          activeMenu 
          && 
          <div className="fixed top-0 left-0 z-[9998] w-screen h-screen bg-black/80">
          </div>
        }
        
        <div className={`fixed top-0 left-0 z-[9999] ${activeMenu ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-1000`}>
          <SideBar />
        </div>
        
        <div>
          <Header />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/qui-sommes-nous" element={<AboutUS />} />
              <Route path="/mon-compte" element={<Account />} />
              <Route path="/mon-compte/profil" element={<Profile />} />
              <Route path="/category/:category" element={<ArticlesByCategory />} />
              <Route path="/category/article/:id" element={<ArticleDetails />} />
            </Routes>
          </ScrollToTop>
          <Footer />
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
