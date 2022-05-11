import React from 'react'

const style = {
  wrapper: 'h-[80%] flex items-center justify-center w-[95%] md:w-[80%] mx-auto',
  content: 'h-[80%] my-auto w-full items-center justify-center',
  heading: 'text-5xl sm:text-5xl md:text-8xl lg:text-8xl text-[#F2ECDE] text-center font-bold',
  menu: 'px-5 md:px-6 py-2 md-py-2 bg-[#EBB43D] text-[#F2ECDE] font-bold tracking-wide hover:bg-opacity-[0.95] hover:scale-[0.9] cursor-pointer transition duration-[300ms] box-border',
  table: 'px-5 md:px-6 py-2 md-py-2 border-2 border-gray-50 hover:bg-[#F2ECDE] hover:text-gray-800  transition duration-[300ms] cursor-pointer box-border text-[#F2ECDE] font-bold tracking-wide',
}
const HomeContent = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {/* heading */}
        <h2 className={style.heading} style={{ fontFamily: 'Prata, serif' }}>Offering The Best Tasting Experience</h2>
        <div className={style.buttonContainer}>

          <button className={style.menu}>View Menu</button>
          <button className={style.table}>Book Table</button>
        </div>
      </div>
    </div >
  )
}

export default HomeContent