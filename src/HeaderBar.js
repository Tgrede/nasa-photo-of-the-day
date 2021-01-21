import React, {useState} from 'react'


export default function HeaderBar(props) {
     const [date, setDate] = useState('')
     const getDate = () => {
          const today = new Date()
          return today.toLocaleDateString()
     }

     return (
          <div>
               <h1>NASA Astronomy Photo of the Day</h1>
               <h2>Date: {getDate()}</h2>
          </div>
     )
}
