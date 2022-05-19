import React from 'react'
const style = {
  wrapper: 'h-[90%] flex items-center justify-around w-[95%] md:w-[80%] m-auto ',
  content: 'h-[80%] sm:h-[60%] md:h-[70%] lg:h-[70%]  flex flex-col w-full items-center justify-around mt-24 md:mt-0',
  heading: ' text-6xl sm:text-8xl md:text-8xl lg:text-8xl text-[#F2ECDE] text-center',
  smallHeading:' my-2 sm:my-6 my:my-2 text-center text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#F2ECDE]',
  buttonContainer: 'flex flex-col md:flex-row w-[50%] md:w-[40%] mx-auto justify-around',
  menu: 'my-4 px-5 md:px-6 lg:px-12 py-2 md:py-2 lg:py-4 bg-[#EBB43D] text-[#F2ECDE] font-bold tracking-wide hover:bg-opacity-[0.95] hover:scale-[0.9] cursor-pointer transition duration-[300ms] box-border text-lg',
  table: 'my-4 px-5 md:px-6 lg:px-12 py-2 md:py-2 lg:py-4 border-2 border-gray-50 hover:bg-[#F2ECDE] hover:scale-[0.9] hover:text-gray-800  transition duration-[300ms] cursor-pointer box-border text-[#F2ECDE] font-bold tracking-wide text-lg',
}
const HomeContent = (props) => {
  const onScroll = (val) => {
    props.onScroll(val)
  }
  return (
    <div className={style.wrapper} >
      <div className={style.content}>
        {/* heading */}
        <h2 className={style.heading} style={{fontFamily:'Yeseva One, cursive'}}>Offering The Best Tasting Experience</h2>
        <h3 className={style.smallHeading} style={{fontFamily:'Kristi, cursive'}} >Fresh Ingredeints, Tasty Meals and Creative Chefs</h3>
        <div className={style.buttonContainer}>
          <button aria-label="Button to view menu" className={style.menu} onClick={()=>{onScroll('menu')}}>View Menu</button>
          <button aria-label="Button to book table" className={style.table} onClick={()=>{onScroll('booking')}}>Book Table</button>
        </div>
      </div>
    </div >
  )
}

export default HomeContent