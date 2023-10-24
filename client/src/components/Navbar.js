import { NavLink } from "react-router-dom";
const Navbar = () => {
   const navigation = [
    { name: "politique", href: "/" },
    { name: "société", href: "/" },
    { name: "immigration", href: "/" },
    { name: "union-européenne", href: "/" },
    { name: "international", href: "/" },
    { name: "qui somme-nous?", href: "/" },
  ];

  return (
    <div className="sticky z-50 top-[2px] flex items-center justify-between h-9 bg-black mt-[2px] px-24 text-white">
      <div>
        <NavLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </NavLink>
      </div>
      <div className="flex gap-14 uppercase font-bold">
        {navigation.map((itemNav) => {
          const {name, href} = itemNav;
          return(
            <NavLink 
              key={name} 
              to={href}
              className="hover:text-red-600">
              {name}
            </NavLink>
          )
        })}
      </div>
      <div>
        <NavLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </NavLink>
      </div>
    </div>
  )
}
export default Navbar