import React from 'react';
import { AiOutlineDoubleRight } from "react-icons/ai"
import SalePoint from '../../components/SalePoint';
import FlashAct from '../../components/FlashAct';
import LettreInf from '../../components/LettreInf';
import FollowUs from '../../components/FollowUs';
import Title from '../../utils/Title';

const Index = () => {
  return (
    <div className="flex flex-col px-24 py-4">
      <p className='flex items-center gap-1 uppercase text-xs text-gray-500'>accueil <span><AiOutlineDoubleRight /></span> qui sommes-nous?</p>
      <div className='flex flex-row gap-6'>
        <div className='flex flex-col gap-4 w-3/4 my-6'>
          <Title title="Qui sommes-nous ?" color="black" />
          <div>
            <h6 className='font-semibold'>Notre Histoire :</h6>
            <p>Livre Noir est bien plus qu’un simple média, c’est une vision, une ambition : celle d’écrire l’avenir. Depuis notre commencement il y a deux ans, nous avons traversé des étapes cruciales, des défis et des triomphes, tous rendus possibles grâce au soutien indéfectible de notre communauté. Chaque jour, nous avons vu notre vision se concrétiser et aujourd’hui, nous sommes à l’aube d’une nouvelle ère. L’annonce de Livre Noir franchissant un nouveau cap n’est pas seulement une étape pour nous, mais une promesse d’innovation et de dévouement pour la rentrée de septembre.</p>
          </div>
          <div>
            <h6 className='font-semibold'>Notre équipe :</h6>
            <p>Derrière chaque mot, chaque image, chaque reportage, il y a une équipe passionnée et dévouée. Récemment renforcée par l’arrivée d’une dizaine de nouveaux talents, elle est le cœur battant de Livre Noir. Composée de journalistes de terrain et de bureau, de cameramans, de monteurs et d’experts dans divers domaines, notre équipe travaille sans relâche pour mettre la lumière sur la réalité, pour questionner, analyser et faire bouger les lignes de la pensée conventionnelle.</p>
          </div>
          <div>
            <p>Livre Noir est une source fiable et objective, offrant une analyse critique et approfondie des sujets d’actualité. En vous abonnant, vous ne rejoignez pas seulement une communauté qui valorise la diversité des opinions et l’investigation rigoureuse, mais vous devenez également partie prenante d’un élan novateur. L’un d’entre eux est une grande soirée de débats sur le thème brûlant de l’immigration, avec des personnalités politiques de premier plan. Plus encore, notre nouveau magazine avec des analyses de fond, des entretiens inédits qui vont faire bouger les lignes. Votre soutien permettra de concrétiser davantage de projets innovants, contribuant ainsi à façonner un paysage médiatique plus transparent, responsable et proche du réel.</p>
          </div>
          <div>
            <p>Rejoignez Livre Noir et soyez au cœur d’un journalisme qui façonne activement l’avenir de l’information.</p>
          </div>
          <div>
            <h6 className='font-semibold'>Un magazine :</h6>
            <p>Tous les 3 mois, nous vous proposons un magazine de 160 pages au minimum. Quatre numéros à l’année, 1 numéro tous les 3 mois, disponible dans plus de 5000 kiosques en France et dans votre boîte aux lettres, si vous êtes abonné !</p>
          </div>
          <div>
            <h6 className='font-semibold'>Une communauté :</h6>
            <p>Livre Noir c’est plus de 340 000 abonnés sur YouTube, 40 millions de vues et une communauté engagée, passionnée par nos reportages, articles, tribunes, nouveautés…</p>
          </div>
          <div>
            <h6 className='font-semibold'>Un comité d’experts :</h6>
            <p>Le comité stratégique de Livre Noir est composé d’experts tels que Xavier Driencourt, en qualité de président de ce même comité, ancien ambassadeur de France en Algérie par deux fois. Thibault de Montbrial, spécialiste des questions de sécurité intérieure. Driss Ghali expert des relations internationales. Xavier Fontanet, ancien directeur du prestigieux groupe français Essilor. Loïk Le Floch-Prigent, industriel à succès et ancien président de Gaz de France ainsi que de la SNCF, du romancier algérien et résistant contre l’islamisme Boualem Sanssal ainsi que d’Amine El Bahi, essayiste et juriste de droit public. Au total, ce comité d’experts est composé de 8 membres qui œuvrent à l’essor de Livre Noir. Leur but est d’accompagner Live Noir dans son développement médiatique. Orientation éditoriale, mise en place d’outils stratégiques, conseils rendus au président de la rédaction, ce comité stratégique incarne parfaitement la dimension que prend Livre Noir : l’excellence et la spécialisation.</p>
          </div>
        </div>
        <div className='w-1/4 flex flex-col gap-4'>
          <SalePoint />
          <FlashAct />
          <LettreInf />
          <FollowUs />
        </div>
      </div>
    </div>
  )
}

export default Index