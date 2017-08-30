import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {

  return (

    <nav className="navbar navbar-default">
       <div className="container-fluid">
         <div className="navbar-header">

            <a className="navbar-brand" href="#">SPACE SCHOOL</a>
         </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li ><Link to ="/planet">Planets </Link></li>
                   <li><Link to ="/user">Students </Link></li>
                </ul>
         </div>
        </div>
     </nav>
  )
}

export default TopBar
