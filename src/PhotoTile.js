import React, { useState, useEffect } from 'react'

export default function PhotoTile(props) {
     const { hdImgUrl, imgUrl, title } = props

     return (
          <div>
               <a href={hdImgUrl} target={'_blank'}><img src={imgUrl} alt={title} /></a>
          </div>
     )
}



