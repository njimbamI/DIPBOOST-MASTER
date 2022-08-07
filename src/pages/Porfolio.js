import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../navigation/Navigation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';




const Porfolio = () => {

    const bolo = () => {
        Swal.fire({
            title: 'Dipboost',
            html:
                'continuer a regarder le texte ',
        });
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!false);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className='md:flex mx-auto'>
            <Navigation />
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-2 my-6 w-4/5 md:ml-2'>
                <div className='port'>
                    <h1>Agence de marketing digital</h1>
                    <img src='logo192.png' alt='l' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                    <button className='hover:text-gray-500 animate-bounce' onClick={() => bolo()}>voir plus...</button>
                    {open}
                </div>
                <div className='port'>
                    <h1>Agence de marketing digital</h1>
                    <img src='logo192.png' alt='l' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam molestie eu nunc vitae mollis. Etiam egestas
                        quam consectetur nunc sodales, ac feugiat ex tempor.
                    </p>

                </div>
                <div className='port' >
                    <h1>Agence de marketing digital</h1>
                    <img className='' src='logo192.png' alt='l' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam molestie eu nunc vitae mollis. Etiam egestas
                        quam consectetur nunc sodales, ac feugiat ex tempor.
                    </p>

                </div>
                <div className='port'>
                    <h1>Agence de marketing digital</h1>
                    <img src='logo192.png' alt='l' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam molestie eu nunc vitae mollis. Etiam egestas
                        quam consectetur nunc sodales, ac feugiat ex tempor.
                    </p>

                </div>
                <div className='port'>
                    <h1>Agence de marketing digital</h1>
                    <img src='logo192.png' alt='l' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam molestie eu nunc vitae mollis. Etiam egestas
                        quam consectetur nunc sodales, ac feugiat ex tempor.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Porfolio;