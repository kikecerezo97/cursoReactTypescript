import React from "react";
import LogoFrontedAcademy  from '../../assets/ico/logo192.png'
import {Link} from 'react-router-dom'
interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({}: NavbarProps) => {

    return <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={LogoFrontedAcademy} alt="Logo" width="30" height="24" 
                className="d-inline-block align-text-top"/>
                Frontend Academy
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/blog">
                        Blog
                    </Link>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
    </>
}