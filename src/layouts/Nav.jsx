import React from 'react'
import Button from '../components/Button'

const Nav = () => {

    const navBar = [
        "Program",
        "Bidang Ilmu",
        "Tentang"
    ]

    return (
        <>
            <nav className='fixed flex justify-between items-center w-full h-[8vh] bg-blue px-[100px] py-[50px] z-10'>
                <div>
                    <h1 className='text-white font-bold text-xl'>LOGO</h1>
                </div>
                <ul className="flex items-center text-white">
                    {navBar.map((data, index) => {
                        return (
                            <li key={index} className="mr-10 cursor-pointer">
                                <p className='font-semibold'>{data}</p>
                            </li>
                        )
                    })}
                    <Button text='Masuk/Daftar'/>
                </ul>
            </nav>
        </>
    )
}

export default Nav 