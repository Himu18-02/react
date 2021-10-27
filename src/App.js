import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Post from './components/Post';
import ImageCard from './components/ImageCard';
import Album from './components/Album';



import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState} from 'react';


export default function App () {


  const [progress, setprogress] = useState(0)

  

  


 const setProgress = (progress)=>{
  setprogress(progress)
}




  
    return (
      
        <>
        
      <Router>
      <Navbar  />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />    
     
     <Switch>
      <Route exact path = "/"><Home setProgress={setProgress}/></Route>
   
      <Route  exact path="/Album"><Album setProgress={setProgress}/></Route>
      <Route  exact  path="/images"><ImageCard  setProgress={setProgress} /></Route>
      <Route  exact path = "/Post"><Post setProgress={setProgress} /></Route>
      </Switch>
     </Router>

    
    
    </>
      
    )
  
}

