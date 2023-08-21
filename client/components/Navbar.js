import React from 'react';

export default function Navbar() {



  return (
    <>
    <nav className="navbar navbar-expand bg-danger mb-3" >
      <div className="container">
      <h1 className="navbar-brand">The Art Gallery</h1>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link" href="#">About</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link" href="#">Profile</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link" href="#">More</a>
        </li>
      </ul>
      </div>
    </nav>
    </>
  )
}