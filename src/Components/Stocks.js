import React, { useState } from 'react';
import Search from './Search';
import Axios from 'axios';
import ShowStocks from './ShowStocks';

const Stocks = () =>{
    const[keyword, setKeyword] = useState('')
    const[bestMatches, setBestMatches] = useState([])
    // console.log(bestMatches.length)
    const onEnter = (e) =>{
        if(e.keyCode === 13){
            Axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=3B5UPTTN5KM2DZNC`)
                .then(async(res)=>{
                    setBestMatches(res.data.bestMatches)
                    console.log(res)
                })
                .catch(err=>console.log(err))
            }
    }
    return(
        <div>
            <Search setKeyword = {setKeyword} onEnter = {onEnter}/>
            {bestMatches.length > 0? <ShowStocks bestMatches = {bestMatches}/>: null}
        </div>
    )
}

export default Stocks