import React from 'react';
import Typical from 'react-typical'

class Home extends React.Component {
    render(){
        return(
            <div className='home' id='home'>
                WE provide<Typical 
                steps={['stock Details!!', 1500, 'currency conversions!!', 1500, 'Cryptocurrency conversions!!', 1500]}
                loop={Infinity}
                wrapper="b"/>
            </div>
        )
    }
}

export default Home