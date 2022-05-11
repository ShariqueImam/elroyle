import Head from 'next/head'
import Home from '../components/Home/Home'
import Offer from '../components/Offer/Offer'
import Menu from '../components/Menu/Menu'
import Booking from '../components/Booking/Booking'
import Event from '../components/Event/Event'
 import Contact from '../components/Contact/Contact'

const App = () => {
  return (
    <div className="overflow-x-hidden bg-[#FDFDFC] ">
      <Home />
      <Offer />
      <Menu />
      <Booking />
      <Event />
      <Contact />
    </div>
  )
}

export default App;
