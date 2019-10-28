import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>ADC META LUL</h1>
            <nav>
                <Link to="/main">GET A CHAMP</Link> 

                <Link to="/faves"> Favorite Champs</Link>
            </nav>
        </header>
    );
};

export default Header;