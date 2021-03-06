import React from 'react'

const style = {
  wrapper: 'flex border-b-2 border-gray-400 border-dotted my-3 mx-2 md:mx-8 my-2',
  day:'text-gray-400 flex-1 text-sm',
  time:'text-gray-400 text-sm',
}
const SingleDay = ({day,time}) => {
  return (
    <div className={style.wrapper}>
    <h2 className={style.day}>{day}</h2>
    <h2 className={style.time}>{time}</h2>
    </div>
  )
}
   

export default SingleDay