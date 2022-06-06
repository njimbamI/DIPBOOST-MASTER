import React from 'react';
import Navigation from '../navigation/Navigation';

const Notfound = () => {
    return (
        <div className='flex text-center'>
            <Navigation/>
            <div className='contenu'>
                <div className='flex flex-col items-center'>
                <h1>Page non trouvé</h1>
            <img src='https://tse3.mm.bing.net/th?id=OIP.1xfOwmVUpTY7dy06jRjpOgHaDm&pid=Api&P=0&w=341&h=166'alt='404'/>
                </div>
            
            </div>
          
        </div>
    );
};

export default Notfound;