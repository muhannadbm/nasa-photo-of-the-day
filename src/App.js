import React, { useEffect, useState } from "react";
import "./App.css";
import "./Components/Header"
import Header from "./Components/Header";
import axios from 'axios'
import Body from './Components/Body'




function App() {
  const [data,setData] = useState(null)




  useEffect(() => {
    console.log('inside effect')
    // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then( res=> { 

    //   setData(res.data)
    // }
    // )
    //   .catch(err => console.log(err))
    setData({"copyright":"Martin Pugh","date":"2021-07-15","explanation":"In silhouette against a crowded star field along the tail of the arachnalogical constellation Scorpius, this dusty cosmic cloud evokes for some the image of an ominous dark tower. In fact, clumps of dust and molecular gas collapsing to form stars may well lurk within the dark nebula, a structure that spans almost 40 light-years across this gorgeous telescopic portrait. Known as a cometary globule, the swept-back cloud, is shaped by intense ultraviolet radiation from the OB association of very hot stars in NGC 6231, off the upper edge of the scene. That energetic ultraviolet light also powers the globule's bordering reddish glow of hydrogen gas. Hot stars embedded in the dust can be seen as bluish reflection nebulae. This dark tower, NGC 6231, and associated nebulae are about 5,000 light-years away.","hdurl":"https://apod.nasa.gov/apod/image/2107/Dark_Tower_MPRS.jpg","media_type":"image","service_version":"v1","title":"The Dark Tower in Scorpius","url":"https://apod.nasa.gov/apod/image/2107/Dark_Tower_MPRS_1100c.jpg"}
  )
  }, [])


  return (
    <div className="App">

      <Header/>

      <Body bodydata = {data } />

    </div>

  );
}

export default App;
