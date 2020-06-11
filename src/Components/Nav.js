import React from 'react';
import { Link } from 'react-router-dom';

const Nav =()=>{
    return(
        <div className='nav'>
            <Link to='/' className='link'>LOGO</Link> 
            <ul>
                <Link to='/stocks' className='linkNav'><li>Stocks</li></Link>
                {/* <li>CryptoCurrency</li> */}
            </ul>
        </div>
    )
}


export default Nav