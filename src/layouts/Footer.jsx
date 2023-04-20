import React from 'react'

const Footer = () => {

    const edspert = {
        nama: "Tagline edspert disini",
        alamat: "Jl. Watugede No.58, Wonorejo, Sariharjo, Kec.Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581"
    }

    const footer = [
        {
            Nama: [
                "Program",
                "Bidang ilmu",
                "Tentang edspert"
            ],
            Program: [
                "Online Course",
                "Mini Bootcamp",
                "Bootcamp"
            ],
            Bidang: [
                "Digital Marketing",
                "Product Management",
                "English",
                "Programming"
            ],
            Tentang: [
                "Bantuan",
                "Kontak Kami",
                "Media Sosial"
            ]
        }
    ]
    return (
        <>
            <div className='w-full bg-[#ffffff]'>
                <div className='px-[100px] pt-[150px]'>
                    <div className='flex justify-between'>
                        <div className=' w-[30%] font-semibold text-silver'>
                            <h1 className='text-xl'>{edspert.nama}</h1>
                            <h3 className='mt-5 text-sm'>{edspert.alamat}</h3>
                        </div>

                        <div>
                            {footer.map((data, index) => {
                                return (
                                    <div key={index} className='flex items-start'>

                                        <ul className='mr-10 text-sm'>
                                            <li>
                                                <p className='font-bold text-black'>{data.Nama[0]}</p>
                                            </li>
                                            <li>
                                                {data.Program.map((program, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <p className='font-semibold text-silver mt-2'>{program}</p>
                                                        </div>
                                                    )
                                                })}</li>
                                        </ul>

                                        <ul className='mr-10 text-sm'>
                                            <li>
                                                <p className='font-bold text-black'>{data.Nama[1]}</p>
                                            </li>
                                            <li>
                                                {data.Bidang.map((program, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <p className='font-semibold text-silver mt-2'>{program}</p>
                                                        </div>
                                                    )
                                                })}</li>
                                        </ul>

                                        <ul className='mr-10 text-sm'>
                                            <li>
                                                <p className='font-bold text-black'>{data.Nama[0]}</p>
                                            </li>
                                            <li>
                                                {data.Tentang.map((program, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <p className='font-semibold text-silver mt-2'>{program}</p>
                                                        </div>
                                                    )
                                                })}</li>
                                        </ul>


                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className='text-center py-[100px]'>
                        <p className='text-silver font-semibold'>edspert copyright &copy; 2023 Jundy Islami</p>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default Footer