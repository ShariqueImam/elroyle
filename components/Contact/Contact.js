import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SingleDay from './SingleDay'
import ContactForm from './ContactForm'
import useWindowSize from '../hooks/windowSize'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
let ani = 1


const Contact = () => {
  const screenWidth = useWindowSize()
  const { ref, inView } = useInView({ threshold: 0.2 })
  const animation = useAnimation()
  const style = {
      wrapper: ` flex items-center justify-center ${screenWidth.width > 1024 ? 'h-[90vh]' : 'h-[130vh] '}` ,
    contentContainer:
      'bg-[#FDFDFC] h-[90%] md:h-[85%] lg:h-[75%] w-[90%] md:w-[95%] lg:w-[60%] flex flex-col md:flex-row items-center justify-around gap-4 md:gap-8 px-8 md:px-4',
    heading:
      ' md:my-2 lg:my-2 w-[95%] md:w-[85%] lg:w-[90%] text-xl sm:text-xl md:text-xl lg:text-2xl text-[#F2ECDE] text-center text-center mx-auto',
    smallHeading:
      'my-2 md:my-4 w-[95%] md:w-[60%] mx-auto  text-3xl sm:text-3xl md:text-3xl lg:text-3xl text-[#EBB43D] text-center',
    side1: 'w-[100%] md:w-[35%] ',
    card: 'bg-stone-900 px-3 md:px-8 py-4 md:py-6 lg:py-12',
    cardContent: 'border-4 border-double border-[#EBB43D] py-3 md:py-5 lg:py-12',
    side2:
      'w-[100%] md:w-[45%] border-4  border-double border-[#EBB43D] px-2 md:px-8 py-4 md:py-4 lg:py-8',
    bookingHeading: 'text-sm md:text-md text-center text-gray-500 my-4',
    dayContainer: 'md:my-3 lg:my-12',
  }
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } })
    }
    if (!inView && ani == 1) {
      ani = 0
      animation.start({ opacity: 0, y: -200, transition: { duration: 0.5 } })
    }
  }, [inView])

  return (
    <div className={style.wrapper} style={{background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(/img/contact.webp)",backgroundAttachment:'fixed',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <motion.div
        className={style.contentContainer}
        ref={ref}
        animate={animation}
      >
        <div className={style.side1}>
          <div className={style.card}>
            <div className={style.cardContent}>
              <h2
                className={style.smallHeading}
                style={{ fontFamily: 'Kristi, cursive' }}
              >
                Check Availability
              </h2>
              <h2
                className={style.heading}
                style={{ fontFamily: 'Yeseva One, cursive' }}
              >
                Opening Times
              </h2>
              <div
                className={style.dayContainer}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {/* the days components */}
                <SingleDay day="Week days" time="09.00 – 24:00" />
                <SingleDay day="Saturday" time="08:00 – 03.00" />
                <SingleDay day="Sunday" time="Day off" />
              </div>
              <h2
                className={style.smallHeading}
                style={{ fontFamily: 'Kristi, cursive' }}
              >
                Call Us Now
              </h2>
              <h2
                className={style.heading}
                style={{ fontFamily: 'Yeseva One, cursive' }}
              >
                +92 3174290702
              </h2>
            </div>
          </div>
        </div>
        <div className={style.side2}>
          {/* form */}
          <h2
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className={style.bookingHeading}
          >
            You can book your table online easily in just a couple of minutes.
            We take reservations for lunch, just check the availability of your
            table
          </h2>
          <ContactForm />
        </div>
      </motion.div>
    </div>
  )

}

export default Contact


