import React from 'react'
import moment from 'moment';


const DateTime = () => {
    const date = moment().format("MMMM DD,YYYY");
    const time = moment().format("HH: mm: ss");
      return (
    <div className='text-lg text-center text-green-700 mb-2 py-2 font-bold '>
     <p>Updated at {date } and on {time}</p>
      
    </div>
  )
}

export default DateTime
