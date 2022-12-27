import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
import Logo from '../../assets/icons/logo.svg';

function Header() {
    return (
        <header id="header" className="header">
            <div className="header__image--wrapper">
                <Link to="/">
                    <img src={Logo} alt="logo" className="header__image" />
                </Link>
            </div>
            <ul className="header__links list">
                <li className="list__item">
                    <Link to="/search" className="list__item--link"> Search </Link>
                </li>
                <li className="list__item">
                    <Link to="/about" className="list__item--link"> About </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;