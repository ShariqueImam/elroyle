import React from 'react'


const style = {
    wrapper: 'bg-gray-50 flex flex-col text-md md:text-md tracking-wider mx-auto',
    list: 'mx-auto block my-2 py-2 px-2 text-gray-900 border-b border-gray-100 hover:bg-gray-50  md:border-0  font-bold md hover:text-[#EFC262]  transition duration-[300ms] ',


}
const DropDownMenu = () => {
    return (
        <ul clasName={style.wrapper} style={{fontFamily: 'Poppins, sans-serif'}}>
                <li>
                    <a href="#" className={style.list} aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className={style.list}>About</a>
                </li>
                <li>
                    <a href="#" className={style.list}>Services</a>
                </li>
                <li>
                    <a href="#" className={style.list}>Menu</a>
                </li>
                <li>
                    <a href="#" className={style.list}>Contact</a>
                </li>
        </ul>
    )
}

export default DropDownMenu;