import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import logo from "../assets/logo_elhadhira.png";
import { logout } from "../api";

const Header = () => {
  const {isAuth} = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  }
  return (
    <>
      <div className="md:flex hidden justify-between items-center h-32 bg-black w-full xl:px-24 lg:px-16 md:px-8">
        <div className="w-36 border-2 border-red-600">
          <NavLink to="/" className="font-bold text-6xl">
            <img src={logo} alt="ELHADHIRA" />
          </NavLink>
        </div>

        <div className="flex flex-col items-center text-white uppercase">
          <NavLink to="/" className="font-bold text-6xl">
            elhad<span className="text-red-600">hira</span>
          </NavLink>
          <p className="text-xs">n'ayez pas peur, mon ami, allah est avec nous | nabil.y</p>
        </div>

        <div className="flex items-end gap-1 text-white">
          <div className="flex flex-col gap-1">
            <div className="">
              <NavLink to="/mon-compte">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </NavLink>
            </div>
            {
              isAuth
              && 
              <div className="flex items-end">
                <button onClick={onLogout}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                </button>
              </div>
            }
          </div>
          <div className="flex items-center text-red-600">
            <p className="text-2xl">|</p>
          </div>
          <div className="flex flex-col gap-2">
            <NavLink className="px-8 uppercase text-sm font-bold border-2 border-white hover:border-red-600 rounded-2xl">faire un don</NavLink>
            <NavLink className="px-8 uppercase text-sm font-bold border-2 border-white hover:border-red-600 rounded-2xl">s'abonner</NavLink>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  )
}
export default Header