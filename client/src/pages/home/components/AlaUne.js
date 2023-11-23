import React from 'react';

import Article from '../../../utils/Article';
import Title from '../../../utils/Title';
import FlashAct from '../../../components/FlashAct';

const AlaUne = ({articles}) => {
  const immigration = articles.filter((item) => item.category === "immigration")[0]
  const international = articles.filter((item) => item.category === "international")[0]
  const societe = articles.filter((item) => item.category === "societe")[0]
  const list = [international, societe];

  return (
    <div className='flex flex-col gap-4 my-4'>
      <Title title="à la une :" color="black" />
      <div className='gap-[1%] grid grid-cols-[49%,29%,20%]'>
        <div className=''>
          <Article 
            id={immigration._id}
            image={immigration.imageUrl}
            category={immigration.category}
            title={immigration.title}
            size={3}
            divider={true}
            author={immigration.author}
            description={immigration.description}
            height="h-[300px]" />
        </div>
        <div className='flex flex-col gap-6'>
          {list.map((item) => (
            <Article 
              key={item._id}
              id={item._id}
              image={item.imageUrl}
              category={item.category}
              title={item.title}
              size={2}
              divider={true}
              height="h-[200px]"
            />
          ))}
        </div>
        <div className='bg-[#F8EEE2]'>
          <FlashAct />
        </div>
      </div>
    </div>
  )
}

export default AlaUne