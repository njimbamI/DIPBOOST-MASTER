import React from 'react';
import Navigation from '../navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {


    return (
        <div className='flex '>
            <Navigation />
            <div className='contenu'>
                <div className='flex flex-row justify-center items-center py-24'>
                    <ul className='bg-black rounded-lg drop-shadow-2xl p-10'>
                    <h1 className='pb-5 text-center uppercase text-lg font-bold'>Contactez moi</h1>
                        <li> <FontAwesomeIcon className='px-2' icon={faMap} />Pontoise</li>
                        <li> <FontAwesomeIcon className='px-2' icon={faMobileAlt} />
                            <CopyToClipboard text='0778700224'>
                                <span className='hover:translate-x-2 cursor-pointer' onClick={() => alert('telephone copié')}>07 78 70 02 24</span>
                            </CopyToClipboard>
                        </li>
                        <li> <FontAwesomeIcon className='px-2' icon={faEnvelope} />
                            <CopyToClipboard text='moubarakhosny352@yahoo.fr'>
                                <span className='hover:translate-x-2 cursor-pointer' onClick={() => alert('mail copié')}>moubarakhosny352@yahoo.fr</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className='pt-10'>
                    <ul className='flex items-center justify-center'>
                        <li className='pr-3'>
                            <a href='https://www.linkedin.com/in/ibrahim-moubarak-njimbam-b8b286168/'target="_blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li className='pr-3'>
                            <a href='google.com' target="_blank" rel="noopener noreferrer">
                                <h4> Twitter</h4>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/njimbamI'target="_blank" rel="noopener noreferrer" >
                                <h4>  Github</h4>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Contact;