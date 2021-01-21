import React from 'react'

export default function InfoTile(props){
     const { title, date, explanation } = props

     return (
          <div>
               <h3>Title: {title}</h3>
               <p><b>Want to know about this picture? ~</b> {explanation}</p>
          </div>
     )
}
