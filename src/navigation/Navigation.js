import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImage, faMountain, faUser, } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
    return (
        <div className='main'>
            <div>
                <img src='bolo.jpeg' className='img' alt='bolo' />
                <span className='h1'>Njimbam </span>
            </div>
            <div>
                <nav>
                    <ul className='justify-center items-center'>

                        <li className='bolo'>
                            <Link className='card' exact to="/" ><FontAwesomeIcon icon={faHome} />
                                Accueil
                            </Link>
                        </li>
                        <li className='bolo'><Link className='card' exact to="/Competences" ><FontAwesomeIcon icon={faMountain} /> Compétences</Link></li>
                        <li className='bolo'><Link className='card' exact to="/portfolio" > <FontAwesomeIcon icon={faImage} />Portfolio</Link></li>
                        <li className='bolo'><Link className='card' exact to="/Contact" ><FontAwesomeIcon icon={faUser} /> Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <ul className='flex items-center sm:grid-rows-none'>
                    <li>
                        <a href='https://www.linkedin.com/in/ibrahim-moubarak-njimbam-b8b286168/'  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='px-2 hover:text-white' icon={faLinkedin}/></a>
                    </li>
                    <li>
                        <a href='dipboost.com' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='px-2 hover:text-white' icon={faTwitter}/></a>
                    </li>
                    <li>
                        <a href='https://github.com/njimbamI' target="_blank" rel="noopener noreferrer"  ><FontAwesomeIcon className='px-2 hover:text-white' icon={faGithub}/></a>
                    </li>
                   
                </ul>
               
            </div>
            <div> Njimbam - 2022 </div>
        </div>

    );
};

export default Navigation;