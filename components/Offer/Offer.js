import React from 'react'
import { MdOutlineOutdoorGrill } from 'react-icons/md'
import SingleOfferCard from './SingleOfferCard'
const style = {
  wrapper: 'my-12 flex flex-col mx-auto',
  smallHeading: ' w-[95%] md:w-[60%] mx-auto my-4 text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-[#EBB43D] text-center',
  heading: ' w-[95%] md:w-[60%] lg:w-[40%] mx-auto my-4 text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-900 opacity-[0.95] text-center',
  cardContainer:'flex items-center gap-12 flex-col md:flex-row justify-center w-[90%] md:w-[80%] lg:w-[60%] mx-auto',
  story:'text-gray-400 text-md md:text-md  w-[80%] md:w-[60%] mx-auto text-center my-8'
}
const Offer = () => {
  return (
    <div className={style.wrapper}>
      <h2 style={{ fontFamily: 'Kristi, cursive' }} className={style.smallHeading}> Welcome to the El Royle</h2>
      <h1 style={{ fontFamily: 'Yeseva One, cursive' }} className={style.heading}>Delicious Food, Friendly Staff, Cozy Atmosphere & Positive Emotions</h1>
      <MdOutlineOutdoorGrill className="text-4xl mx-auto text-[#EBB43D] my-4" />
      {/* offers card */}
      <div className={style.cardContainer}>
        <SingleOfferCard cardImage={'https://res.cloudinary.com/shariqcloud/image/upload/v1652275409/Elroyale/pexels-william-choquette-2641886_1_yc9ivp.jpg'} cardText={'Start eating better'} />
        <SingleOfferCard cardImage={'https://res.cloudinary.com/shariqcloud/image/upload/v1652275409/Elroyale/pexels-pixabay-327158_u665i0.jpg'} cardText={'Quality is the heart'} />
        <SingleOfferCard cardImage={'https://res.cloudinary.com/shariqcloud/image/upload/v1652275409/Elroyale/pexels-marta-dzedyshko-2067473_b5sfo3.jpg'} cardText={'Hot and ready to serve'} />
      </div>
      {/* story */}
      <h2 className={style.story}>El Royale was the first restaurant to open in Egypt, the resturant designed with the history in mind we have created a soft industrial dining room.</h2>
    </div>
  )
}

export default Offer