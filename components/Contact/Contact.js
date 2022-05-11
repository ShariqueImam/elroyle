import React from 'react'
import styled from 'styled-components'
const BgImg = 'https://res.cloudinary.com/shariqcloud/image/upload/v1652159535/Elroyale/8_umh3qd.jpg'
const ContactBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: auto;
  width: 100vw;
  height: 80vh;
`;

const style = {
  wrapper: 'flex items-center justify-center',
  contentContainer: 'px-12 py-24 bg-[#F2ECDE]',
  side1:'bg-conic-to-bl from-[#F2ECDE] to-[#F2ECDE]',
  side2:'',

}
const Contact = () => {
  return (
    <ContactBackground className={style.wrapper}>
      <div className={style.contentContainer}>

        <div className={style.side1}>
          {/* the image */}
        </div>
        <div className={style.side1}>
          {/* form */}
        </div>
      </div>
    </ContactBackground>
  )
}

export default Contact