
import React from 'react'


const style = {
    wrapper: 'w-[90%] mx-auto flex flex-col justify-around',
    input:'outline-none placeholder:text-gray-900 mx-3 px-2 py-1 my-3',
    name:'',
    email:'',
    phone:'',
    btn:'px-3 py-3  bg-gray-900 text-[#FDFDFC] mx-3 my-4'

}
const ContactForm = () => {
    return (
        <form className={style.wrapper} style={{fontFamily:'Poppins, sans-serif'}}>
            <input type="text" className={style.input} placeholder="Name"/>
            <input type="text" className={style.input} placeholder="Email"/>
            <input type="text" className={style.input} placeholder="Phone"/>
            <button className={style.btn}>Book My Table</button>
        </form>
    )
}

export default ContactForm;

