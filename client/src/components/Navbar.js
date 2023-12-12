import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { logout } from "../api";
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {
  const {isAuth} = useSelector((state) => state.user)
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  }

  const { activeMenu, setActiveMenu } = useStateContext();
  const navigation = [
    { name: "politique", href: "/category/politique" },
    { name: "société", href: "/category/societe" },
    { name: "immigration", href: "/category/immigration" },
    { name: "union-européenne", href: "/category/union-europeenne" },
    { name: "international", href: "/category/international" },
    { name: "qui somme-nous?", href: "/qui-sommes-nous" },
  ];

  return (
    <div className="sticky z-50 top-0 bg-white pt-[1.5px]">
      <div className="flex items-center justify-between h-9 bg-black xl:px-24 lg:px-16 md:px-8 px-4 text-white">
        <div>
          <span className="cursor-pointer" onClick={() => setActiveMenu(!activeMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
        </div>

        <div className="md:hidden flex flex-col items-center text-white uppercase">
          <NavLink to="/" className="font-bold text-2xl">
            elhad<span className="text-red-600">hira</span>
          </NavLink>
        </div>

        <div className="lg:flex hidden gap-14 uppercase font-bold xl:text-base text-xs">
          {navigation.map((itemNav) => {
            const {name, href} = itemNav;
            return(
              <NavLink 
                key={name} 
                to={href}
                className={({ isActive }) =>
                  [
                    isActive ? "text-red-600" : "", "hover:text-red-600"
                  ].join(" ")
                }>
                {name}
              </NavLink>
            )
          })}
        </div>

        <div className="md:hidden flex text-white">
        {
          !isAuth
          ?
          <div className="flex gap-2">
            <div className="">
              <NavLink to="/mon-compte/signup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </NavLink>
            </div>
          </div>
          :
          <div className="flex gap-2">
            <div className="">
              <NavLink to="/mon-compte/profil">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </NavLink>
            </div>
            <div className="flex items-end">
              <button onClick={onLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
              </button>
            </div>
          </div>
        }
        </div>

        <div className="md:flex hidden">
          <NavLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default Navbar