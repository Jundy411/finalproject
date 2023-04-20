import React from 'react'

const Button = (props) => {
    return (
        <>

            <button className='px-6 py-3 bg-red rounded-full text-white'>
                {props.text}
            </button>
        </>
    )
}

export default Button