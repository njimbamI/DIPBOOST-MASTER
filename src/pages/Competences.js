import React from 'react';
import Navigation from '../navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faCheckSquare, faFutbolBall, faUserNinja } from '@fortawesome/free-solid-svg-icons';

const Competences = () => {
    return (
        <div>
            <div className='flex'>
                <Navigation />
                <div className='grid grid-cols-1 gap-1 ml-3 my-6 sm:grid-cols-3 w-4/5'>
                    <div className='bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg py-5'>
                        <h1 className='h1'>Années d'expériences</h1>
                        <ul>
                            <li> Javascript <span> 50% </span></li>
                            <li>  python</li>
                            <li> css</li>
                            <li> html</li>
                            <li>php</li>
                        </ul>
                        <h1 className='h1'>Frameworks et Bibliothéque</h1>
                        <ul className='text-center'>
                            <li>React</li>
                            <li>r</li>
                            <li>css</li>
                            <li>html</li>
                            <li>php</li>
                        </ul>
                    </div>

                    <div className='col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg py-5'>
                        <div className='mb-3'>
                        <h1 className='h1'>expériences</h1>
                        <h2>Developpeur</h2>
                        <h3>2021 - 2022</h3>
                        <p>WARNING in src\pages\Competences.js
                            Line 35:28:  Headings must have content and the content must be accessible by a screen reader  jsx-a11y/heading-has-content
                            Line 36:28:  Headings must have content and the content must be accessible by a screen reader  jsx-a11y/heading-has-content

                            webpack 5.72.0 compiled with 1 warning in 308 ms</p>
                        </div>

                        <h2 className='h1'>Developpeur</h2>
                        <h3>2021 - 2022</h3>
                        <p>WARNING in src\pages\Competences.js
                            Line 35:28:  Headings must have content and the content must be accessible by a screen reader  jsx-a11y/heading-has-content
                            Line 36:28:  Headings must have content and the content must be accessible by a screen reader  jsx-a11y/heading-has-content

                            webpack 5.72.0 compiled with 1 warning in 308 ms</p>
                    </div>


                    <div className='col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg py-5'>
                        <h1 className='text-center mb-5'>Autres compétences</h1>
                        <div className='flex justify-around'>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheckSquare} />Anglais courant</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} />Github</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} />Figma</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} />methodes agile</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} />SEO</li>
                        </ul>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheckSquare} />UI/UX Design</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} />Photoshop</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} />Power BI</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} />Tailwinds css</li>
                        </ul>
                        </div>
                    </div>

                    <div className='bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg text-center py-5'>
                        <h1 className='h1'>Centres d'Interet</h1>
                        <ul>
                            <li><FontAwesomeIcon icon={faFutbolBall} />Football</li>
                            <li><FontAwesomeIcon icon={faBookBookmark} />Lecture</li>
                            <li><FontAwesomeIcon icon={faUserNinja} />Danse</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Competences;