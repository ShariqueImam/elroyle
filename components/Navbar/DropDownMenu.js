import React from 'react'


const style = {
    wrapper: 'bg-gray-50 flex flex-col text-md md:text-md tracking-wider mx-auto',
    list: 'mx-auto block my-2 py-2 px-2 text-gray-900 border-b border-gray-100 hover:bg-gray-50  md:border-0  font-bold md hover:text-[#EFC262]  transition duration-[300ms] ',
}
const DropDownMenu = (props) => {
    const onScroll = (val) => {
        props.onScroll(val)      
    }
    return (
        <ul clasName={style.wrapper} style={{fontFamily: 'Poppins, sans-serif'}}>
                <li onClick={()=>{onScroll('home')}}>
                    <a href="#" aria-label="link of the navbar" className={style.list} aria-current="page">Home</a>
                </li>
                <li onClick={()=>{onScroll('about')}}>
                    <a href="#" aria-label="link of the navbar" className={style.list}>About</a>
                </li>
                <li onClick={()=>{onScroll('services')}}>
                    <a href="#" aria-label="link of the navbar" className={style.list}>Services</a>
                </li>
                <li onClick={()=>{onScroll('menu')}}>
                    <a href="#" aria-label="link of the navbar" className={style.list}>Menu</a>
                </li>
                <li onClick={()=>{onScroll('contact')}}>
                    <a href="#" aria-label="link of the navbar" className={style.list}>Contact</a>
                </li>
        </ul>
    )
}

export default DropDownMenu;