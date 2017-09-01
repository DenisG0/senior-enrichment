import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {

  return (

    <nav className="navbar navbar-default">
       <div className="container-fluid">
         <div className="navbar-header">
            <span>
            <a className="navbar-brand navbar-brand-logo" href="#">
            <div>
            SPACE SCHOOL
            </div>
            </a>
            </span>
         </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li ><Link to ="/campus">Planets </Link></li>
                   <li><Link to ="/user">Students </Link></li>
                </ul>
         </div>
        </div>
     </nav>
  )
}

export default TopBar
