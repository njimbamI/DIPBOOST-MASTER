import React from 'react';
import Navigation from '../navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faCheckSquare, faFutbolBall, faUserNinja } from '@fortawesome/free-solid-svg-icons';

const Competences = () => {
    return (
        <div>
            <div className='md:flex'>
                <Navigation />
                <div className='grid grid-cols-1 gap-1 mx-auto my-6 sm:grid-cols-3 w-4/5 text-xs md:text-sm md:ml-2'>
                    <div className='bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg py-5'>
                        <h1 className='h1'>Années d'expériences</h1>
                        <div className='flex items-center justify-around'>
                            <ul>
                                <li> Javascript </li>
                                <li>  python </li>
                                <li> css </li>
                                <li> html</li>
                                <li>php</li>
                            </ul>
                            <ul className='font-bold'>
                                <li> 60% </li>
                                <li> 50%</li>
                                <li> 70%</li>
                                <li> 80%</li>
                                <li>50%</li>
                            </ul>
                        </div>
                        <h1 className='text-center uppercase text-lg font-bold pt-8'>Frameworks et Bibliothéque</h1>
                        <div className='flex justify-around'>
                            <ul>
                                <li>React</li>
                                <li>css</li>
                                <li>html</li>
                                <li>php</li>
                            </ul>
                            <ul className='font-bold'>
                                <li>50%</li>
                                <li>70%</li>
                                <li>80%</li>
                                <li>50%</li>
                            </ul>

                        </div>
                    </div>

                    <div className='col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg p-5'>
                        <div className='mb-3'>
                            <h1 className='h1'>expériences</h1>
                            <h3>Octobre 2020 - Mai 2021</h3>
                            <h2>Developpeur web</h2>
                            <p className='pt-3'>WARNING in src\pages\Competences.js
                                Line 35:28:  Headings must have content and the content must be accessible by a screen reader  jsx-a11y/heading-has-content
                                Line 36:28:  Headings must have content and the content must be accessible by a screen reader  jsx-a11y/heading-has-content

                                webpack 5.72.0 compiled with 1 warning in 308 ms
                            </p>

                        </div>

                        <h3>2019 - 2019</h3>
                        <h2>Developpeur</h2>
                        <p className='pt-3'>WARNING in src\pages\Competences.js
                            Line 35:28:  Headings must have content and the content must be accessible by a screen reader  jsx-a11y/heading-has-content
                            Line 36:28:  Headings must have content and the content must be accessible by a screen reader  jsx-a11y/heading-has-content

                            webpack 5.72.0 compiled with 1 warning in 308 ms
                        </p>

                    </div>


                    <div className='col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg py-5'>
                        <h1 className='text-center mb-5 font-bold uppercase'>Autres compétences</h1>
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
                        <ul className='pt-5'>
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