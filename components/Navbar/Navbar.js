import React, { useState } from 'react'
import useWindowSize from '../../hooks/windowSize'
import DropDownMenu from './DropDownMenu'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
const Navbar = () => {

    const screenWidth = useWindowSize()
    const style = {
        wrapper: 'absolute md:relative text-gray-200 w-[100%] lg:w-[75%] mx-auto',
        list: 'block my-4 py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 font-bold md:p-0 dark:text-gray-400 md:dark:hover:text-white  hover:text-[#EFC262] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition duration-[300ms] border-move-animation',
        listHome: 'block my-4 py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent font-bold md:p-0 border-b-2 border-[#EFC262] text-[#EFC262] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition duration-[300ms]',
        reservation: `px-2 md:px-6 py-2 md:py-2 border-2 border-white  font-bold hover:bg-gray-100 hover:text-gray-900 transition duration-[300ms] cursor-pointer ${screenWidth.width < 1024 ? 'bg-gray-900 text-[#F2ECDE]' : 'bg-transparent text-gray-200'}`,
    }
    const [isMenuOpen,setIsMenuOpen] =useState(false)
    const handleSmallMenu =()=>{
        setIsMenuOpen(prevValue => !prevValue)
    }
    console.log(isMenuOpen)
    return (
        <div className={style.wrapper}>
            <nav className="border-gray-700 px-2 sm:px-4 py-2.5 rounded bg-gray-50 md:bg-transparent border-b-[0.1px] ">
                <div className="container flex  justify-between items-center mx-auto flex-wrap">
                    <a href="/" className="flex items-center scale-[1.1]">
                        <img src={`${screenWidth.width > 1024 ? 'https://res.cloudinary.com/shariqcloud/image/upload/v1652183040/Elroyale/logo-light_zdf9hx.png' : 'https://res.cloudinary.com/shariqcloud/image/upload/v1652159561/Elroyale/logo-dark_bcjtin.png'}`} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </a>
                    <div className="target flex items-center md:order-2">
                        <div className={style.reservation} style={{ fontFamily: 'Asul, sans-serif' }}>Reservation</div>
                        {/* the hamburger button */}
                        <button aria-label="Button to toggle mobile menu" onClick={handleSmallMenu} data-collapse-toggle="mobile-menu-2" type="button" className=" inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-600 transtion duration-[300ms]" aria-controls="mobile-menu-2" aria-expanded="false">
                            {isMenuOpen ?<ImCross className={`${isMenuOpen && 'flex'}`}/>:                           <GiHamburgerMenu className={`${isMenuOpen && 'hidden'}`}/>}
                        </button>   
                    </div>
                    {/* content for small screens menu open */}
                    <div className={`w-full ${isMenuOpen ? 'flex':'hidden'} items-center justify-center`}>
                        <DropDownMenu/>
                    </div>
                    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-md md:text-md tracking-wider ">
                            <li>
                                <a href="#" className={style.listHome} aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className={style.list}>About</a>
                            </li>
                            <li>
                                <a href="#" className={style.list}>Services</a>
                            </li>
                            <li>
                                <a href="#" className={style.list}>Pricing</a>
                            </li>
                            <li>
                                <a href="#" className={style.list}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar



