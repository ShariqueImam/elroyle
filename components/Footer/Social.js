import React from 'react'
import {BsFacebook,BsTwitter,BsLinkedin,BsYoutube,BsPinterest,BsInstagram} from 'react-icons/bs'
const style ={
    wrapper:'flex mx-auto items-center justify-center gap-8 md:gap-12 my-8 md:my-12',
    social:'text-gray-100 text-xl md:text-xl hover:mx-4 transition-all duration-[300ms] cursor-pointer',
    
}
const Social = () => {
  return (
    <div className={style.wrapper}>
      <a className={style.social} target='_black' href="https://www.facebook.com"><BsFacebook/></a>
      <a className={style.social} target='_black' href="https://www.instagram.com"><BsInstagram/></a>
      <a className={style.social} target='_black' href="https://www.twitter.com"><BsTwitter/></a>
    </div>
  )
}

export default Social;