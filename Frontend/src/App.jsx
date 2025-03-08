import React, { useState } from 'react'
import Header from './componenets/Header';
import Home from './componenets/Home'


function App(){

  const[showPara,setshowPara] = useState(true);

  return (
    
  <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <Header />
      <Home showPara={showPara}/>  
  </div>
  )
}

export default App;
