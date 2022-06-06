import React from 'react';
import Navigation from '../navigation/Navigation';


const Home = () => {


    return (
        <div className='flex text-center'>
          <Navigation/>
            <div className='contenu'>
                <div>
               <h1 className='text-6xl'> Njimbam Ibrahim Moubarak</h1>
                <p>Developpeur Front-end</p>
                </div>
               <div className='mt-14 drop-shadow-2xl'><a href= "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" className='bg-white px-5 py-5 text-black rounded-2xl font-bold text-xl'> Telecharger cv</a></div>
            </div>
        </div>
    );
};

export default Home;