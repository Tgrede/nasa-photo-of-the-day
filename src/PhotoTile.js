import React from 'react'
import styled from 'styled-components'

export default function PhotoTile(props) {
     const { hdImgUrl, imgUrl, title } = props

     return (
          <div>
               <a href={hdImgUrl} target={'_blank'}><StyledPhotoTile src={imgUrl} alt={title} /></a>
          </div>
     )
}

const StyledPhotoTile = styled.img`
     border-radius: 5%;
     box-shadow: 5px 5px 3px black
`



