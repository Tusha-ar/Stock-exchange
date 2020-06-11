import React from 'react';
import { Link } from 'react-router-dom';

const ShowStocks =(props)=>{
    return(
        <div id='showStocks' className='show'>
            {
                props.bestMatches.map(match=>
                    <Link to={`/stocks/${match['1. symbol']}`} className='link' key={match['1. symbol']}>
                        <span><b>Symbol : </b>{match['1. symbol']}</span>
                        <span><b>Company : </b>{match['2. name']}</span>
                    </Link>
                )
            }
        </div>
    )
}

export default ShowStocks