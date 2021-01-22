import React from 'react'
import logo from './images/logo_apod.png'
import styled from 'styled-components'


function HeaderText(props){
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
export default function HeaderBar(props) {
     

     return (
          <StyledHeaderBar>
               <img src={logo} alt='logo' />
               <HeaderText />
          </StyledHeaderBar>
     )
}

const StyledHeaderBar = styled.div`
     display: flex;
     justify-content: center;
     align-items:center;
     padding-bottom: 1%; 
     border: 2px solid ${(pr) => pr.theme.colors.tan}
`


