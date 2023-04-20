import React from 'react'
import image from '../assets/image/katalog.png'

const Cards = () => {

    const programming = {
        laravel: "Programming Laravel",
        getting: "Getting Started with Laravel 9"
    }

    return (
        <>
            <section className='w-full rounded-2xl bg-white drop-shadow-md'>
                <div className=''>
                    <div className='bg-blue rounded-t-2xl px-5 py-3 flex items-center'>
                        
                            <img url={image} alt="card"/>
                        
                        <div>
                            <p className='text-yellow font-semibold'>Intensive Bootcamp</p>
                            <div>
                                <h1 className='text-white font-bold text-xl'>{programming.laravel}</h1>
                                <p className='text-white text-sm'>{programming.getting}</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-5 py-1 rounded-b-2xl '>
                        <h1 className='text-black font-bold text-xl'>{programming.laravel}</h1>
                        <h2 className='text-black font-bold text-lg'>{programming.getting}</h2>
                        <div className='py-3'>
                            <ul className='flex'>
                                <li className='text-silver'>Batch </li>
                                <li className='font-semibold'>{'\u00A0'}September 2022</li>
                            </ul>
                            <ul className='flex'>
                                <li className='text-silver'>Mentor </li>
                                <li className='font-semibold'>{'\u00A0'}William Hartono, Farel Prayoga</li>
                            </ul>
                            <ul className=' flex justify-end'>
                                <li className='line-through text-silver mr-5'>Rp 260.000</li>
                                <li className='text-right text-lg font-bold text-green'>Rp 560.000</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards 