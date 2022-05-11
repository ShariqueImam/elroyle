import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import HomeContent from './HomeContent'
import useWindowSize from '../../hooks/windowSize'


const style = {
    wrapper: '',

}

const Home = () => {

    const screenWidth = useWindowSize()
    const BgImg = 'https://res.cloudinary.com/shariqcloud/image/upload/v1652159536/Elroyale/14_psxpqh.jpg'
    const HomeBackground = styled.div`
      background: linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.3)),
        url(${(screenWidth.width < 500 && BgImg) ||
        (screenWidth.width  > 500 && screenWidth.width  < 1000 && BgImg) ||
        (screenWidth.width  > 1000 && BgImg)});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-attachment: auto;
      width: 100vw;
      height: 100vh;
    `;



    return (
        <HomeBackground className={style.wrapper}>
            {/* navbar */}
            <Navbar />

            {/* Home content */}
            <HomeContent />
        </HomeBackground>
    )
}

export default Home