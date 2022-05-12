import React from 'react'
import styled from 'styled-components'
import SingleDay from './SingleDay'
const BgImg = 'https://res.cloudinary.com/shariqcloud/image/upload/v1652159535/Elroyale/8_umh3qd.jpg'
const ContactBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  height: 85vh;
`;

const style = {
  wrapper: 'flex items-center justify-center',
  contentContainer: 'bg-[#F2ECDE] h-[85%] w-[60%] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8',
  heading: ' my-2 w-[95%] md:w-[85%] lg:w-[60%] text-6xl sm:text-6xl md:text-3xl lg:text-3xl text-[#F2ECDE] text-center text-center mx-auto',
  smallHeading: 'my-2 w-[95%] md:w-[60%] mx-auto my-4 text-3xl sm:text-3xl md:text-3xl lg:text-3xl text-[#EBB43D] text-center',
  side1: 'w-[90%] md:w-[35%] ',
  card: 'bg-gray-900 px-8 py-12',
  cardContent: 'border-4 border-double border-[#EBB43D] py-12',
  side2: 'w-[90%] md:w-[55%] border-4 border-double border-[#EBB43D]',

}
const Contact = () => {
  return (
    <ContactBackground className={style.wrapper}>
      <div className={style.contentContainer}>
        <div className={style.side1}>
          <div className={style.card}>

            <div className={style.cardContent}>
              <h2 className={style.smallHeading} style={{ fontFamily: 'Kristi, cursive' }} >Check Availability</h2>
              <h2 className={style.heading} style={{ fontFamily: 'Yeseva One, cursive' }}>Opening Times</h2>
              <div className={style.dayContainer} style={{ fontFamily: 'Poppins, sans-serif' }}>
                {/* the days components */}
                <SingleDay day="Week days" time="09.00 – 24:00"/>
                <SingleDay day="Saturday" time="08:00 – 03.00"/>
                <SingleDay day="Sunday" time="Day off"/>
              </div>
          <h2 className={style.smallHeading} style={{ fontFamily: 'Kristi, cursive' }}>Call Us Now</h2>
          <h2 className={style.heading} style={{ fontFamily: 'Yeseva One, cursive' }}>+92 3174290702</h2>

            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className={style.side2}>
          {/* form */}
          <h2>You can book your table online easily in just a couple of minutes. We take reservations for lunch, just check the availability of your table</h2>
        </div>
      </div>
    </ContactBackground>
  )
}

export default Contact