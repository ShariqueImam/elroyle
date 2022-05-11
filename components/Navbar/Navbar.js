import React, { useEffect } from 'react'
import useWindowSize from '../../hooks/windowSize'

const style = {
    wrapper: 'text-gray-200',
    list: 'block my-4 py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  font-bold md:p-0 dark:text-gray-400 md:dark:hover:text-white  hover:text-[#EFC262] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition duration-[300ms] border-move-animation',
    listHome: 'block my-4 py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent font-bold md:p-0 border-b-2 border-[#EFC262] text-[#EFC262] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition duration-[300ms]',
    reservation:'px-2 md:px-6 py-2 md:py-2 border-2 border-white text-gray-200 font-bold hover:bg-gray-100 hover:text-gray-900 transition duration-[300ms] cursor-pointer',
}
const Navbar = () => {

    const screenWidth = useWindowSize()
    return (
        <div className={style.wrapper}>

            <nav className="border-gray-700 px-2 sm:px-4 py-2.5 rounded bg-white md:bg-transparent border-b-[0.1px] ">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src={`${screenWidth.width > 1024 ? 'https://res.cloudinary.com/shariqcloud/image/upload/v1652183040/Elroyale/logo-light_zdf9hx.png' : 'https://res.cloudinary.com/shariqcloud/image/upload/v1652159561/Elroyale/logo-dark_bcjtin.png'}`} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </a>
                    <div className="target flex items-center md:order-2">
                  <div className={style.reservation} style={{fontFamily: 'Asul, sans-serif'}}>Reservation</div>
                        
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="target inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div style={{fontFamily: 'Poppins, sans-serif'}} className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text- md md:text-md tracking-wider ">
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



