import React from 'react';

import Article from '../../../utils/Article';
import Title from '../../../utils/Title';
import FlashAct from '../../../components/FlashAct';

const AlaUne = () => {
  return (
    <div className='flex flex-col gap-4 my-4'>
      <Title title="à la une :" color="black" />
      <div className='gap-[1%] grid grid-cols-[49%,29%,20%]'>
        <div className=''>
          <Article 
            image="https://livrenoir.fr/wp-content/uploads/2023/09/utopia-1-1024x576.jpg" 
            category="IMMIGRATION" 
            title="Utopia 56 : Livre Noir s'est introduit 2 mois dans l'association immigrationniste" 
            size={3}
            divider={true}
            author="Nabil Yahyaoui" 
            description="Fondée à Calais en 2015 par Gaël Manzi, ancien régisseur de camping, l’association Utopia 56 vient en aide aux sans-papiers et milite pour leur régularisation massive. Enquête. ..." />
        </div>
        <div className='flex flex-col gap-6'>
          <Article 
            image="https://livrenoir.fr/wp-content/uploads/2023/09/guyane-departement-enquete-traffic-richesses.jpg"
            category="INTERNATIONAL" 
            title="Guyane : enfer vert pour métal jaune" 
            size={2}
            divider={true}
          />

          <Article 
            image="https://livrenoir.fr/wp-content/uploads/2023/09/03_LivreNoir_SiteWeb_Plan-de-travail-1-copie-29-1024x576.jpg"
            category="SOCIÉTÉ" 
            title="Macron et la culture française, une histoire de désamour" 
            size={2}
            divider={true}
          />
        </div>
        <div className='bg-[#F8EEE2]'>
          <FlashAct />
        </div>
      </div>
    </div>
  )
}

export default AlaUne