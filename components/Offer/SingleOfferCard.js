import React from 'react'



const style = {
    wrapper: 'h-[50vh] md:h-[65vh] lg:h-[50vh] w-full flex items-end justify-center hover:scale-[0.9] transition duration-[900ms] overflow-hidden',
    heading:'text-4xl sm:text-4xl md:text-4xl lg:text-4xl text-[#F2ECDE] my-8',
}
const SingleOfferCard = ({cardImage,cardText}) => {
    return (
        <div className={style.wrapper} style={{ fontFamily: 'Kristi, cursive', background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),url(${cardImage})`, backgroundAttachment: 'auto', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <h2 className={style.heading}>{cardText}</h2>
        </div>
    )
}

export default SingleOfferCard

