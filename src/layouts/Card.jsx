import React from 'react'
import Cards from '../components/Cards'


const Card = () => {
    return (
        <>
            <div className='w-full p-5 bg-grey'>
                <div className='px-[80px] py-[50px]'>
                <div className='bg-grey grid grid-cols-3 gap-6'>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
                </div>
            </div>

        </>
    )
}

export default Card 