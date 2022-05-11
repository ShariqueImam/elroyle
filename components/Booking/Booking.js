import React from 'react'
import styled from 'styled-components'
const BgImg = 'https://res.cloudinary.com/shariqcloud/image/upload/v1652159535/Elroyale/1_rocjfx.jpg'
const BookingBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: auto;
  width: 100vw;
  height: 60vh;
`;
const style = {
  wrapper: 'flex flex-col items-center justify-around',
  heading: ' w-[95%] md:w-[85%] lg:w-[60%] text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F2ECDE] text-center text-center mx-auto',
  smallHeading: 'w-[95%] md:w-[60%] mx-auto my-4 text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-[#F2ECDE] text-center',
  detail:'text-lg sm:text-lg md:text-md lg:text-md text-gray-100 text-center my-2',
  bookButton:'my-3 transition duration-[300ms] px-6 py-2 md:px-6 md:py-2 text-gray-900 bg-gray-100 hover:bg-[#F2ECDE] font-semibold mx-auto',
}
const Booking = () => {
  return (
    <BookingBackground className={style.wrapper}>
      <h2 className={style.smallHeading} style={{fontFamily:'Kristi, cursive'}} >We Create Delicious Memories</h2>
      <h2 className={style.heading} style={{fontFamily:'Yeseva One, cursive'}}>Pull Up A Chair. Take A Taste & Come Join Us</h2>
      <h3 className={style.detail} style={{fontFamily:'Poppins, sans-serif'}} >We have awesome recipes and the most talented chefs in town!</h3>
      <button className={style.bookButton} style={{fontFamily:'Yeseva One, cursive'}}>Book a Table</button>
    </BookingBackground>
  )
}

export default Booking