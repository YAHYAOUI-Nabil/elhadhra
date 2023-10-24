import React from 'react';

import Article from './Article';
import Title from '../../../components/Title';

const AlaUne = () => {
  return (
    <div className='flex flex-col gap-4 my-4'>
      <Title title="à la une" />
      <div className='flex gap-4'>
        <div className='w-1/2'>
          <Article 
            image="https://livrenoir.fr/wp-content/uploads/2023/09/utopia-1-1024x576.jpg" 
            category="IMMIGRATION" 
            title="Utopia 56 : Livre Noir s’est introduit 2 mois dans l’association immigrationniste" 
            size={3}
            divider={true}
            author="Nabil Yahyaoui" 
            description="Fondée à Calais en 2015 par Gaël Manzi, ancien régisseur de camping, l’association Utopia 56 vient en aide aux sans-papiers et milite pour leur régularisation massive. Enquête. ..." />
        </div>
        <div className='w-[28%] flex flex-col gap-6'>
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
        <div className='w-[22%] bg-[#F8EEE2] p-4 flex flex-col gap-5'>
          <p className='text-2xl font-bold'>Flash actualité</p>
          <div className='flex flex-row gap-3'>
            <div>
              <p className='whitespace-nowrap text-sm'>24 Oct</p>
              <p className='text-sm'>10h07</p>
            </div>
            <div>
              <p className='text-sm'>Yaël Braun-Pivet contre J-L. Mélenchon : jeu politique ou antisémitisme ?</p>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div>
              <p className='whitespace-nowrap text-sm'>24 Oct</p>
              <p className='text-sm'>10h07</p>
            </div>
            <div>
              <p className='text-sm'>Yaël Braun-Pivet contre J-L. Mélenchon : jeu politique ou antisémitisme ?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlaUne