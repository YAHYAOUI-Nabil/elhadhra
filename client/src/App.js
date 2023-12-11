import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import "./App.css";

import { store } from "./reduxTK/store";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import Account from "./pages/myAccount";
import ArticlesByCategory from "./pages/articlesByCategory";
import ArticleDetails from "./pages/articlesDetails";
import Videos from "./pages/videos";
import AboutUS from "./pages/aboutUs";
import SideBar from "./components/SideBar";
import ScrollToTop from "./utils/ScrollToTop";

import { useStateContext } from "./context/ContextProvider";
import Profile from "./pages/myAccount/components/Profile";
import { logout } from "./api";
import PrivateRoute from "./utils/PrivateRoute";
import Signup from "./pages/myAccount/components/Signup";
import Signin from "./pages/myAccount/components/Signin";
import ValidateUser from "./pages/myAccount/components/ValidateUser";

const token = localStorage.getItem('accessToken');
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logout());
  } else {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

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
              <Route path="/mon-compte/signup" element={<Signup />} />
              <Route path="/mon-compte/signin" element={<Signin />} />
              <Route path="/mon-compte/validation-de-compte" element={<ValidateUser />} />
              <Route path="/mon-compte/profil" element={<PrivateRoute Component={Profile} /> } />
              <Route path="/category/:category" element={<ArticlesByCategory />} />
              <Route path="/category/article/:id" element={<ArticleDetails />} />
              <Route path="/category/videos" element={<Videos />} />
            </Routes>
          </ScrollToTop>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
