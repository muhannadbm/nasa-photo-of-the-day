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
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then( res=> { 

      setData(res.data)
    }
    )
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header/>

      <Body bodydata = {data ? data : [{date: 'None' , explanation: 'None' , hdurl: 'None', title: 'None'}] } />
    </div>
  );
}

export default App;
