import React from "react";
import { useNavigate } from 'react-router-dom';

const NavbarItem = ({label, destination}) => {
  const navigate = useNavigate();

  return (
    <li className="navbar-item">
      <a onClick={() => navigate(destination)} className="nav-link" href="#">{label}</a>
    </li>
  )
}

export default NavbarItem;