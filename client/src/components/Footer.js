import { NavLink } from "react-router-dom";
import { BsInstagram, BsYoutube, BsTwitter, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 bg-black text-white">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:gap-0 gap-5 items-center mx-4 pt-4 pb-2 lg:border-b-2 border-white">
        <div>
          <h1 className="uppercase md:text-3xl text-2xl font-bold lg:text-left text-center">newsletter</h1>
          <p className="lg:text-left text-center">Recevoir chaque jour les titres à la Une</p>
        </div>
        <div className="">
          <button className="md:px-8 px-4 py-2 border-2 border-white rounded-full uppercase md:text-lg font-semibold">recevoir la lettre d'information</button>
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
      <div className="flex lg:flex-row lg:gap-0 gap-8 flex-col lg:justify-between py-2 w-full">
        <div className="lg:border-t-0 border-t-2 border-white lg:mx-0 mx-4 lg:px-4 px-0 py-4 lg:w-1/4">
          <p className="text-gray-400 mb-3">Le Journal</p>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to={'/category/politique'}>Politique</NavLink>
            </li>
            <li>
              <NavLink to={'/category/societe'}>Société</NavLink>
            </li>
            <li>
              <NavLink to={'/category/immigration'}>Immigration</NavLink>
            </li>
            <li>
              <NavLink to={'/category/union-europeenne'}>Union Européenne</NavLink>
            </li>
            <li>
              <NavLink to={'/category/international'}>International</NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:border-l-2 lg:border-t-0 border-t-2 border-white lg:mx-0 mx-4 lg:px-4 px-0 py-4 lg:w-1/4">
          <p className="text-gray-400 mb-3">le Studio</p>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to={'/category/videos'}>Vidéos</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Podcasts</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Dossiers</NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:border-l-2 lg:border-t-0 border-t-2 border-white lg:mx-0 mx-4 lg:px-4 px-0 py-4 lg:w-1/4">
          <p className="text-gray-400 mb-3">A propos</p>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to={'/qui-sommes-nous'}>Qui sommes-nous ?</NavLink>
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
        <div className="lg:border-l-2 lg:border-t-0 border-t-2 border-white lg:mx-0 mx-4 lg:px-4 px-0 py-4 lg:w-1/4">
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
      <div className="pb-6">
          <p className="text-center text-sm">
            © Copyright 2023 CodeIn. Tous droits reservés.
          </p>
      </div>
    </div>
  )
}
export default Footer