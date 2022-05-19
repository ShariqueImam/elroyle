import React from 'react'
import Image from 'next/image'

const style = {
    wrapper: 'md:my-8 lg:my-12 flex flex-col md:flex-row items-center justify-center mx-auto w-[75%] md:w-[70%] mx-auto',
    address: 'md:w-[35%] my-6',
    center: 'md:w-[25%] flex flex-col items-center justify-center my-6',
    contact: 'md:w-[35%] my-6',
    ourAddress:'text-stone-400 text-sm md:text-md text-center',
    contactContent:'text-stone-400 text-sm md:text-md text-center',
    info:'text-stone-400 text-sm md:text-md text-center mt-5',
    heading:'text-[#EBB43D] text-md md:text-lg text-center my-6',
}

const MainFooter = () => {

    return (
        <div className={style.wrapper} style={{fontFamily: 'Poppins, sans-serif'}}
        >
            <div className={style.address}>
                <h2 className={style.heading}>Our Address</h2>
                <h2 className={style.ourAddress}>22 Alnahas Building, 2 AlBahr St,Lahore, Pakistan</h2>
            </div>
            <div className={style.center}>
                {/* logo */}
                <Image src="/img/logo1.webp" height='50' width="140" alt='logo'/>
                <h2 className={style.info}>Ducky was the first restaurant to open in Pakistan, the resturant was designed with the history in mind we have created a soft industrial dining room.</h2>

            </div>
            <div className={style.contact}>
                <h2 className={style.heading}>Contact Us</h2>
                <h2 className={style.contactContent}>Email Us: sharique@gmail.com</h2>
                <h2 className={style.contactContent}>Phone:+92 3174290702</h2>
            </div>
        </div>
    )
}

export default MainFooter