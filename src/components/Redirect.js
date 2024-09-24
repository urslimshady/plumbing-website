import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Redirect = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col space-y-3 justify-center items-center py-40 bg-white dark:bg-gray-800'>
                <i className="fa-sharp fa-solid fa-circle-check text-blue-600 text-[30px]" />
                <h2>संदेश सफलतापूर्वक भेज दिया गया है</h2>
                <p className="max-w-sm text-center">आपके हम पर विश्वास के लिए धन्यवाद, हम जल्द ही इस ईमेल का जवाब देंगे!
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Redirect;
