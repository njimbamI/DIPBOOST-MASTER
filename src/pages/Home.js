import React from 'react';
import Navigation from '../navigation/Navigation';


const Home = () => {

    return (
        <div className='md:flex text-center'>
          <Navigation/>
            <div className='contenu'>
                <div className='mb-20'>
               <h1 className='text-base md:text-6xl'> Njimbam Ibrahim Moubarak</h1>
                <p>Développeur Full Stack</p>
                </div>
               <a href= "bail.pdf" className='bg-white drop-shadow-2xl p-10 text-black rounded-2xl font-bold text-xl animate-bounce' download="mon cv" > Telecharger cv</a>
            </div>
        </div>
    );
};

export default Home;