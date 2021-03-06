import React from 'react'

const Banner = ({ appName }) => {
    return (
        <div className='banner'>
            <div className='container'>
                <h1 className='logo-font'>
                    {appName}
                </h1>
                <p>Brain hole. Bring hope.</p>
            </div>
        </div>
    )
}

export default Banner