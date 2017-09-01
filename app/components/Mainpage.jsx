import React from 'react'
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
    'fontFamily' : "Open Sans",
    'color': '#fff',
    'fontWeight': '700',
    'textTransform': 'uppercase',
    'animation': 'blur .75s ease-out infinite',
    'textShadow': '0px 0px 5px #fff, 0px 0px 7px #fff'
  }
  const fit = {
    'width':'100%',
    'height':'auto'
  }

  return (

    <div >
       <img src = "https://i.ytimg.com/vi/qyEzsAy4qeU/maxresdefault_live.jpg" style = {fit} />
       <Link to ="/campus"> <h1 style = {style}> Welcome to the Future</h1></Link>
    </div>

  )

}

export default Mainpage
