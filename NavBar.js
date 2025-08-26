import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function NavBar(props) {
  return (
    <>
    {/* //body-tertiary */}
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/About">{props.aboutText}</a>
        </li> */}
      </ul>
      
      <div className="form-check form-switch text-light">
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault"></label>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}


NavBar.propTypes = {
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired
};

NavBar.defaultProps = {
  title: 'Enter the Title here',
  aboutText:'About'
};