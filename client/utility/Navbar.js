import React from 'react';
import NavbarItem from './NavbarItem';

//header is a string
//links = [[str label, str destination]]

const Navbar = ({header, links}) => {
  //Itterate and create elements
  const items = [];
  for (const link of links){
    items.push(
      <NavbarItem key={link[0]} label={link[0]} destination={link[1]}/>
    );
  }

  return (
    <nav className="navbar navbar-expand bg-danger mb-3" >
      <div className="container">
        <h1 className="navbar-brand">{header}</h1>
        <ul className="navbar-nav">
          { items }
        </ul>
      </div>
    </nav>
  );
export default Navbar;
