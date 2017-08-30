import React, {Component} from 'react'
import { Link } from 'react-router-dom';



const Mainpage = () =>{

  const style = {
    'position': "absolute",
    'top': "10px",
    'left': "0",
    'right': "0",
    'bottom': "0",
    'margin': "auto",
    'textAlign':'center',
    'height':'0px',
    'fontStyle': 'oblique'
  }
  const fit = {
    'width':'80vw',
    'height':'80vh'
  }

  return (

    <div style = {fit}>

       <img src = "https://i.ytimg.com/vi/qyEzsAy4qeU/maxresdefault_live.jpg" />
       <Link to ="/planet"> <h1 style = {style}> Welcome to the Future</h1></Link>
    </div>

  )

}

export default Mainpage
