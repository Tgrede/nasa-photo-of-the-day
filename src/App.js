import React, { useState, useEffect } from "react";
import PhotoTile from './PhotoTile'
import HeaderBar from './HeaderBar'
import InfoTile from './InfoTile'
import axios from 'axios'
import "./App.css";
import { API_KEY, BASE_URL } from "./constants";

function App() {
  const [todaysPhoto, setTodaysPhoto] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then((res) => {
      setTodaysPhoto(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <HeaderBar />
      <PhotoTile hdImgUrl={todaysPhoto.hdurl} imgUrl={todaysPhoto.url} title={todaysPhoto.title} />
      <InfoTile title={todaysPhoto.title} date={todaysPhoto.date} explanation={todaysPhoto.explanation} />
      
    </div>
  );
}

export default App;
