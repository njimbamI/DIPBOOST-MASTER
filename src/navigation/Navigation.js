import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='mx-auto text-center'>
            <nav>
            <Link exact to="/" >Accueil</Link>
            <Link exact to="/Contact" > Contact</Link>
            <Link exact to="/a-propos" >A-propos</Link>
            </nav>
        </div>
    );
};

export default Navigation;