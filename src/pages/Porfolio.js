import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import Navigation from '../navigation/Navigation';




const Porfolio = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!false);
    };

    const handleClose = () => {
        setOpen(false);
    };

   
    return (
        <div className='flex text-center'>
            <Navigation />
            <div className='grid grid-cols-3 ml-3 w-4/5 gap-2 my-6 '>
                <div className='port'>
                    <h1>Agence de marketing digital</h1>
                    <img src='logo192.png' alt='l' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                    <button onClick={handleClickOpen}><FontAwesomeIcon icon={faPlusCircle} className='animate-bounce' />voir plus</button>
                    {
                        open && (
                            <div className=' rounded-lg text-center bg-white text-black'>
                                <div className='text-md text-center'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam molestie eu nunc vitae mollis. Etiam egestas
                                        quam consectetur nunc sodales, ac feugiat ex tempor  Nullam molestie eu nunc vitae mollis. Etiam egestas
                                        quam consectetur nunc sodales, ac feugiat ex tempor.
                                    </p>
                                    <button className='my-3 text-black font-bold bg-white hover:bg-slate-500 rounded-sm' onClick={handleClose}>retour</button>
                                </div>
                            </div>
                            
                        )
                        
                    }
                    
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