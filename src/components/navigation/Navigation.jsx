import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>De Tandenborstel</h4>

                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? 'active-nav' : 'default-nav'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gaatjes" className={({isActive}) => isActive ? 'active-nav' : 'default-nav'}>
                            Gaatjes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/afspraken" className={({isActive}) => isActive ? 'active-nav' : 'default-nav'}>
                            Afspraak maken
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tanden-bleken" className={({isActive}) => isActive ? 'active-nav' : 'default-nav'}>
                            Tanden bleken
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;