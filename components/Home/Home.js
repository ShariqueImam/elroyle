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
    const HomeBackground = styled.div`
      background: linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.3)),
        url('/img/home.jpg');
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