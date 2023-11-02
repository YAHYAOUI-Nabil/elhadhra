import React from 'react'

const ArticleDetails = (props) => {
    const { title, summary, author, avatar, image } = props
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
        </div>
    )
}

export default ArticleDetails