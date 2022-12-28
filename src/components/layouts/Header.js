import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from "classnames"

function Header() {
  const [onAddress, setOnAddress] = useState(false)
  const [onPhone, setOnPhone] = useState(false)

  return (
    <div className="pt-1 fixed-top" style={{backgroundColor: '#343a40b0', backdropFilter: 'blur(5px)'}}>
      <div className="container text-white">
        <div className="text-center">
          <b className="d-md-flex justify-content-between">
            <Link onMouseEnter={e => setOnAddress(true)} onMouseLeave={e =>setOnAddress(false)} className="text-white">
              <FontAwesomeIcon icon={classnames("fas", {'fa-map-marker-alt': !onAddress, 'fa-map-marker': onAddress})} /> 1729 Action Ave,<span className="d-md-inline d-none"> Suite B</span> Napa <span className="d-none d-mg-inline"> , CA</span> <span className="d-md-inline d-none">94559</span>
            </Link>
            <span>
              <span className="d-md-inline d-none">Open Mon-Fri 8-5</span> <Link onMouseEnter={e => setOnPhone(true)} onMouseLeave={e =>setOnPhone(false)} className="text-white"><span className="px-1 border-left border-whtie"> <FontAwesomeIcon icon={classnames('fas', {'fa-mobile-alt': !onPhone, 'fa-mobile': onPhone})} /></span> (707) 425-6461</Link>
            </span>
          </b>
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-dark py-0">
        <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/img/logo.png" alt="logo" width="120px" height="50px"/>
        </Link>

        <button className="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style={{width: '35px', height: '35px'}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">GALLERY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/links">LINKS</Link>
            </li>
          </ul>
</div>
        </div>
      </nav>
    </div>
  )
}

export default Header