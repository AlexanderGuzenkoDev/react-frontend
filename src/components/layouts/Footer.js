import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-light" style={{backgroundColor: '#343a40f5'}}>
      <div className="container mt-4">
        <div className="border border-left-0 border-right-0 border-dark py-5 text-center">
          <div className="mb-4">
            <Link className="text-decoration-none d-md-inline d-block text-light px-2" to="/home">HOME</Link>
            <Link className="text-decoration-none d-md-inline d-block text-light px-2" to="/services">SERVICES</Link>
            <Link className="text-decoration-none d-md-inline d-block text-light px-2" to="/about">ABOUT</Link>
            <Link className="text-decoration-none d-md-inline d-block text-light px-2" to="/gallery">GALLERY</Link>
            <Link className="text-decoration-none d-md-inline d-block text-light px-2" to="/contact">CONTACT</Link>
            <Link className="text-decoration-none d-md-inline d-block text-light px-2" to="/home">LINKS</Link>
          </div>
          <div><small>American Window Systems, Inc.</small></div>
          <div><small>1729 Action Ave Suite B Napa, CA 94559</small></div>
          <div><small>(707) 258-0880</small></div>
          <div className="mt-3"><small>Copyright © 2022 American Window Systems, Inc.</small></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer