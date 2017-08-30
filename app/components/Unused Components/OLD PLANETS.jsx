import React, { Component } from 'react';

const Planets = () => {

  var forLuna = {
    "background-image": "url("+"https://vignette2.wikia.nocookie.net/creepypasta/images/2/26/Blue_Moon.jpg/revision/latest?cb=20150411033707" +")",
    "background-size": "100%"
  }
  var forTerra = {
    "background-image": "url("+"https://vignette2.wikia.nocookie.net/resistancefallofman/images/3/36/Earth.jpg/revision/latest?cb=20150827211240" +")",
    "background-size": "100%"
  }
  var forMars = {
    "background-image": "url("+"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg" +")",
    "background-size": "100%"
  }
  var forTitan = {
    "background-image": "url("+"https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg" +")",
    "background-size": "100%"
  }


  return (
    <div>
    <div className="jumbotron" style ={forLuna} >
      <h1>Luna </h1>
     <p><a className="btn btn-primary btn-lg">Learn more</a></p>
    </div>
    <div className="jumbotron" style ={forTerra} >
      <h1>Terra </h1>
     <p><a className="btn btn-primary btn-lg">Learn more</a></p>
    </div>
    <div className="jumbotron" style ={forMars} >
      <h1>Mars </h1>
     <p><a className="btn btn-primary btn-lg">Learn more</a></p>
    </div>
    <div className="jumbotron" style ={forTitan} >
    <h1>Titan </h1>
      <p><a className="btn btn-primary btn-lg">Learn more</a></p>
   </div>
  </div>
  )
}

export default Planets;
