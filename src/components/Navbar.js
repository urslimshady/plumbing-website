import React from "react";
import { NavLink } from "react-router-dom";
import { WrenchScrewdriverIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import facebook from '../logo/facebook.jpg'
import twitter from '../logo/twitter.png'
import google from '../logo/google.jpg'
import linkedin from '../logo/linkedin.png'

const Navbar = () => {
  return (
    <header>
      <div className="flex">
        <div className="bg-blue-500 w-1/3 p-3 flex items-center px-5">
          <span className="text-white font-bold text-[13px] md:text-[18px] company">सचिन वायरिंग और प्लंबिंग</span>
        </div>
        <div className="bg-paleBlue w-2/3 p-3 flex justify-end items-center md:pr-20">
          <div className='flex space-x-3'>
          <a href="https://www.facebook.com/profile.php?id=100063464694068&mibextid=ZbWKwL"
            target="_blank" rel="noreferrer" >
            <img className="circle" src={facebook} alt="facebook logo" />
          </a>
          {/* <a href="https://mobile.twitter.com/GasaliAbass" target="_blank" rel="noreferrer">
            <img className="circle" src={twitter} alt="twitter logo" />
          </a> */}
          <a href=" https://www.instagram.com/invites/contact/?i=mi29glvkp6z6&utm_content=gwkaofn" target="_blank" rel="noreferrer">
            <img className="circle" src={google} alt="google logo" />
          </a>
          {/* <a href="https://www.linkedin.com/in/abass-kasali-369911247" target="_blank" rel="noreferrer">
            <img className="circle" src={linkedin} alt="linkedin logo" />
          </a> */}
        </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-between items-center py-2 px-3 md:px-10 bg-white">
        <div className="md:flex md:flex-col items-baseline hidden ">
          <NavLink to="/" className="link flex items-center">
          <WrenchScrewdriverIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
          <span className="md:text-2xl mx-2 text-blue-900 font-bold">सचिन वायरिंग</span>
          </NavLink>
          <p className="text-sm">पेशेवर प्लम्बर और इलेक्ट्रीशियन</p>
        </div>
        <div className="flex md:space-x-20 space-x-5">
          <div className="flex space-x-3 items-center">
            <span className="border border-blue-400 p-2">
                <EnvelopeIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-baseline">
              <p className="font-bold">हमें ईमेल करें</p>
              <a href="mailto:kasbassnigenterprises@gmail.com" className="text-sm grey">@kasbassnigenterprises@gmail.com</a>
            </div>
          </div>
          <div className="hidden md:flex space-x-3 items-center">
            <span className="border border-blue-400 p-2">
                <PhoneIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-baseline">
                <p className="font-bold">हमें कॉल करें</p>
                <a href="tel:+919006557599" className="text-sm grey">(+91) 90065 57599</a>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex justify-center md:justify-between md:container items-center
        bg-paleBlue px-3  md:pr-0
       text-white mx-auto text-[12px] md:text-[15px] font-bold">
        <ul className="flex space-x-4 md:space-x-10  md:mx-3 py-6">
        <NavLink className="link font-bold" to="/">HOME</NavLink>
        <li><NavLink className="link font-bold" to="/about">परिचय</NavLink></li>
        <li data-to-scrollspy-id="services"><NavLink className="link font-bold"  to="/result">सेवाएं</NavLink></li>
        <li><NavLink className="link font-bold " to="/projects">काम</NavLink></li>  
        </ul>
        {/* <li className="hidden md:block hover:opacity-90 
        active:bg-blue-700 bg-blue-500 px-5 py-6 font-bold">BLOG</li> */}
      </nav>
    </header>
  )
}

export default Navbar
