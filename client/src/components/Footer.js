import { NavLink } from "react-router-dom";
import { BsInstagram, BsYoutube, BsTwitter, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between items-center m-4 py-4 border-b-2 border-white">
        <div>
          <h1 className="uppercase text-3xl font-bold">newsletter</h1>
          <p>Recevoir chaque jour les titres à la Une</p>
        </div>
        <div className="">
          <button className="px-8 py-2 border-2 border-white rounded-full uppercase text-lg font-semibold">recevoir la lettre d'information</button>
        </div>
        <div className="flex justify-between gap-6">
          <a 
            href="https://www.youtube.com/@edenmedEtalieTunisie"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:opacity-80">
              <BsInstagram className="w-6 h-6" />
            </a>
          <a 
            href="https://www.youtube.com/@edenmedEtalieTunisie"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:opacity-80">
              <BsYoutube className="w-6 h-6" />
            </a>
          <a 
            href="https://www.youtube.com/@edenmedEtalieTunisie"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:opacity-80">
              <BsTelegram className="w-6 h-6" />
            </a>
          <a 
            href="https://www.youtube.com/@edenmedEtalieTunisie"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:opacity-80">
              <BsTwitter className="w-6 h-6" />
            </a>
        </div>
      </div>
      <div className="flex justify-between py-6 w-full">
        <div className="p-4 w-1/4">
          <p className="text-gray-400 mb-3">Le Journal</p>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to={'/'}>Politique</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Société</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Immigration</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Union Européenne</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>International</NavLink>
            </li>
          </ul>
        </div>
        <div className="border-l-2 border-white p-4 w-1/4">
          <p className="text-gray-400 mb-3">le Studio</p>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to={'/'}>Vidéos</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Podcasts</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Dossiers</NavLink>
            </li>
          </ul>
        </div>
        <div className="border-l-2 border-white p-4 w-1/4">
          <p className="text-gray-400 mb-3">A propos</p>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to={'/'}>Qui sommes-nous ?</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Abonnement</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Nos points de vente</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Besoin d'aide ?</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Nous contacter</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Recrutement</NavLink>
            </li>
          </ul>
        </div>
        <div className="border-l-2 border-white p-4 w-1/4">
          <p className="text-gray-400 mb-3">Légal</p>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to={'/'}>Mentions légales</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Politique de confidentialité</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Conditions générales de vente</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer