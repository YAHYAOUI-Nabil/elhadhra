import React from 'react';
import { NavLink } from 'react-router-dom';
import { VscTriangleRight } from 'react-icons/vsc';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Title from '../../../components/Title';
import Article from './Article';

const Articles = (props) => {
  const { title } = props;
  return (
    <div className='flex flex-col gap-4 my-4'>
      <Title title={title} />
      <div className='flex flex-row gap-5'>
        <Article 
          image="https://livrenoir.fr/wp-content/uploads/2023/09/utopia-1-1024x576.jpg" 
          title="Utopia 56 : Livre Noir s’est introduit 2 mois dans l’association immigrationniste" 
          size={2}
          description="Fondée à Calais en 2015 par Gaël Manzi, ancien régisseur de camping, l’association Utopia 56 vient en aide aux sans-papiers et milite pour leur régularisation massive. Enquête. ..." />
        <Article 
          image="https://livrenoir.fr/wp-content/uploads/2023/09/utopia-1-1024x576.jpg" 
          title="Utopia 56 : Livre Noir s’est introduit 2 mois dans l’association immigrationniste" 
          size={2}
          description="Fondée à Calais en 2015 par Gaël Manzi, ancien régisseur de camping, l’association Utopia 56 vient en aide aux sans-papiers et milite pour leur régularisation massive. Enquête. ..." />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-2 items-center font-bold text-base'>
          <VscTriangleRight className='text-red-500' />
          <NavLink to={'/'}>Alerte attentat : 84% des Français se disent inquiets</NavLink>
        </div>
        <div className='flex flex-row gap-2 items-center font-bold text-base'>
          <VscTriangleRight className='text-red-500' />
          <NavLink to={'/'}>Alerte attentat : 84% des Français se disent inquiets</NavLink>
        </div>
        <div className='flex flex-row gap-2 items-center font-bold text-base'>
          <VscTriangleRight className='text-red-500' />
          <NavLink to={'/'}>Alerte attentat : 84% des Français se disent inquiets</NavLink>
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='flex flex-row gap-2 items-center'>
          <NavLink to={'/'} className='uppercase font-semibold text-xl'>tous les articles {title}</NavLink>
          <NavLink to={'/'} className='flex items-center'><MdOutlineKeyboardArrowRight className='h-6 w-6' /></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Articles