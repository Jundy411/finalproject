import React from 'react'


const Header = () => {

    const image = require('../assets/image/Url.png')
    
    const text = {
        bold : "Jadi expert bersama edspert.id",
        thin : "Tingkatkan skill dan pengetahuan bersama para mentor terbaik dibidangnya, untuk siapkan karir impian anda"
    }
    
    return (
        <>
            <div className='w-full bg-blue'>
                <div className='flex items-start pt-[15vh] m-auto w-full px-[100px]'>
                    <div className='w-[50%] mt-20'>
                        <h1 className='text-white font-semibold text-5xl'>{text.bold}</h1>
                        <p className='text-white mt-[50px]'>{text.thin}</p>
                    </div>
                    <div className='m-auto'>
                        <img src={image} className='w-[815px]' alt="grandis wahyu wardani"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header 