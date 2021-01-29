import './App.css';
import Navbar from './component/Navbar'
import MyCard from "./component/MyCard";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Getmatches} from './Api/Api'
import React, {useEffect} from 'react'



function App() {

  useEffect(()=>{
    Getmatches().then((data) => console.log(data,"data")).catch((error)=> alert("could not load"));
  },[])

  return (
    <div className="App">
      <Navbar />
        <h1>Welcom TO Think Tanker</h1>
      <MyCard />
    </div>
  )
}

export default App;
