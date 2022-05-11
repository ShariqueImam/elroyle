import React from 'react'

const style ={
  wrapper:'flex items-center border-b-2 border-dotted border-gray-400',
  side1:'flex flex-col flex-1 mb-6 mt-3',
  side2:'flex',
  name:'text-black font-bold text-md sm:text-md md:text-lg lg:text-lg tracking-wide',
  ing:'text-gray-400 text-sm sm:text-lg md:text-sm lg:text-sm',
  price:'text-[#EBB43D] text-2xl sm:text-2xl md:text-4xl lg:text-4xl '
}
const SingleMenuItem = ({name,ing,price}) => {
  return (
    <div className={style.wrapper}>
        {/* side 1 */}
        <div className={style.side1} style={{ fontFamily: 'Poppins, sans-serif' }}>
          <h2 className={style.name}>{name}</h2>
          <h2 className={style.ing}>{ing}</h2>
        </div>
        <div className={style.side2}>
          <h2 className={style.price} style={{ fontFamily: 'Kristi, cursive' }}>Rs{price}</h2>

        </div>
    </div>
  )
}

export default SingleMenuItem