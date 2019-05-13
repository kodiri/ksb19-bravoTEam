import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
//import logo from './car.png';

export default function Header() {
    return (
        <header>
            {/* <div className='logo'>
                <img className='logoMenu' src={logo} alt='carru logo' />
                <div className='title'>CarrU</div> 
                <i class="fas fa-car"></i>
            </div> */}
            
            <ul className='header'>
                <li><NavLink to='/#home'>CarrU</NavLink></li>
                <li><NavLink to='/#home'>Home</NavLink></li>
                <li><NavLink to='/#LogIn'>LogIn</NavLink></li>
                <li><NavLink to='/#Contact'>Contact</NavLink></li>
            </ul>
            
        </header>
    );
}