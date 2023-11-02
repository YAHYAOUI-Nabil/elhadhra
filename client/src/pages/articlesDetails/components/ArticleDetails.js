import React from 'react'

const ArticleDetails = (props) => {
    const { title, summary, author, avatar, image, imageDescription, description, contents } = props
    return (
        <div className='py-4'>
            <h2 className='text-5xl font-bold mb-4'>{title}</h2>
            <p className='text-lg font-semibold text-justify mb-4'>{summary}</p>
            <div className='flex flex-row gap-4 items-center mb-4'>
                <div>
                    <img src={avatar} alt={author} className='w-10 h-10 object-cover rounded-full' />
                </div>
                <div>
                    <p>Article rédigé par <span className='text-red-500'>{author}</span></p>
                </div>
            </div>
            <div className='group cursor-pointer flex items-end bg-cover bg-no-repeat bg-center h-[450px] mb-3' style={{ backgroundImage: `url(${image})`}}>
                <p className='group-hover:block hidden p-4 text-lg font-semibold text-white bg-[#B1B0AF]'>{imageDescription}</p>
            </div>
            <p className='text-sm uppercase mb-3 text-[#B1B0AF]'>PUBLIÉ LE 27 OCTOBRE 2023 À 12:34, MIS À JOUR LE 27 OCTOBRE 2023 À 12:34  LECTURE 4 MINUTES</p>
            <p className='mb-4'>{description}</p>
            {contents?.map((section) => {
                const {title, paragraph, imageUrl} = section;
                return (
                    <div key={title} className='flex flex-col gap-4'>
                        <h2 className='text-2xl font-bold'>{title}</h2>
                        <p>{paragraph}</p>
                        <div className='flex justify-center'>
                            <img src={imageUrl} alt={title} className='w-[500px] object-cover' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticleDetails