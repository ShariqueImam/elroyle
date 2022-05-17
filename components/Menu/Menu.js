import React, { useState, useEffect } from 'react'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import LunchMenu from './LunchMenu'
import DessertsMenu from './DessertsMenu'
import DrinksMenu from './DrinksMenu'
import MenuNav from './MenuNav'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const style = {
  wrapper: 'flex flex-col',
  smallHeading: ' w-[95%] md:w-[60%] mx-auto my-2 text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-[#EBB43D] text-center',
  heading: 'w-[95%] md:w-[60%] lg:w-[40%] mx-auto my-2 text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-900 opacity-[0.95] text-center',

}
let ani =1
const Menu = () => {
  const [menuVal, setMenuVal] = useState('lunch')
  const handleClickMenu = (val) => { setMenuVal(val) }
  const { ref, inView } = useInView({ threshold: 0.2 })
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
    
      animation.start({ opacity: 1, y: -15 })
    }
    if (!inView&& ani==1) {
      ani =0
      animation.start({ opacity: 0, y: 15 })
    }
  }, [inView])

  return (
    <motion.div ref={ref} className={style.wrapper} animate={animation}>
      <h2 style={{ fontFamily: 'Kristi, cursive' }} className={style.smallHeading}>Our Favourites</h2>
      <h1 style={{ fontFamily: 'Yeseva One, cursive' }} className={style.heading}>Discover Our Menu</h1>
      <GiForkKnifeSpoon className="text-4xl mx-auto text-[#EBB43D] my-3" />
      <MenuNav menuItem={handleClickMenu} />
      {/* adding the menu */}
      {menuVal === 'lunch' && <LunchMenu />}
      {menuVal === 'desserts' && <DessertsMenu />}
      {menuVal === 'drinks' && <DrinksMenu />}
    </motion.div>
  )
}

export default Menu