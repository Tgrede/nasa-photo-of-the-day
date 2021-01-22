import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import PhotoTile from './PhotoTile'
import HeaderBar from './HeaderBar'
import InfoTile from './InfoTile'
import axios from 'axios'
import { API_KEY, BASE_URL } from "./constants";

export default function App() {
  const [todaysPhoto, setTodaysPhoto] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then((res) => {
      setTodaysPhoto(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <StyledPage>
      


      <HeaderBar />
      <PhotoTile hdImgUrl={todaysPhoto.hdurl} imgUrl={todaysPhoto.url} title={todaysPhoto.title} />
      <InfoTile title={todaysPhoto.title} date={todaysPhoto.date} explanation={todaysPhoto.explanation} />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  color: ${pr => pr.theme.colors.tan};
  margin: 0;
  text-align: center;
`

