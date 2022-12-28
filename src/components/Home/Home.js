import React, {useState} from 'react'

import Form from '../common/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from "classnames";

function Home() {
  const [showForm, setShowForm] = useState(false);

  window.addEventListener("resize", (e) => {
    if(window.innerWidth > 768) setShowForm(false);
  })

  return (
    <div  style={{position: 'relative'}}>
      <div id="demo" className="carousel slide w-100" data-ride="carousel" data-interval="2500" data-pause="hover">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active" 
            style={{
              height: '100vh',
              backgroundImage: "url('/img/background1.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}>
          </div>
          <div className="carousel-item" 
            style={{
              height: '100vh',
              backgroundImage: "url('/img/background2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}>
          </div>
          <div className="carousel-item" 
            style={{
              height: '100vh',
              backgroundImage: "url('/img/background3.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}>
          </div>
          <div className="carousel-item" 
            style={{
              height: '100vh',
              backgroundImage: "url('/img/background4.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}>
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <div className="container pb-5 px-5" style={{height: '100%', position: 'relative'}}>
          <div style={{position: 'absolute', top: '50%', transform: 'translate(0, -50%)'}}>
            <div className="rounded-lg bg-dark text-white p-3 m-0" style={{opacity: 0.8, width: '242px'}}>
            Providing homeowners and contractors with replacement or new construction glass, window, and door products and installations. We carry a full line of quality vinyl, natural wood, modern aluminum, or luxury steel windows and doors, as well as custom skylights and entry door systems.
            </div>
          </div>
          <div style={{position: 'absolute', bottom: '50px', right: '50px'}} className="d-md-block d-none">
            <Form maxWidth={322} minWidth={322} />
          </div>
          <div style={{position: 'absolute', bottom: '50px', right: '50px'}} className="d-md-none d-block">
            <button className="btn btn-dark" onClick={e => setShowForm(true)}>GET A FREE ESTIMATE</button>
          </div>
          <div style={{position: 'fixed', height: '100vh', width: '100vw', background: '#000000d0', top: 0, left: 0, zIndex: 10000}} className={ classnames('d-md-none', {'d-none': !showForm})}>
            <div style={{ position: 'relative', height: '100%'}}>
              <button className="btn btn-outline-light" style={{ position: 'absolute', top: '30px', right: '30px'}} onClick={e => setShowForm(false)}><FontAwesomeIcon icon="fas fa-remove" /></button>
              <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <Form maxWidth={322} minWidth={322} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home