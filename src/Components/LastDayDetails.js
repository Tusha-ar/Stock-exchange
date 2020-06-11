import React from 'react';

const LastDayDetails = (props) =>{
    return(
        <div className='Details'>
        <span><b>Symbol: </b> {props.lastDayData['Meta Data']['2. Symbol']}</span>
        <div className='lastDayDetails'>
            {console.log(props.lastDayData)}
            <span><b>Open:</b> USD {Object.values(props.lastDayData['Time Series (Daily)']).slice(0,1)[0]['1. open']}</span>
            <span><b>High:</b> USD {Object.values(props.lastDayData['Time Series (Daily)']).slice(0,1)[0]['2. high']}</span>
            <span><b>Low:</b> USD {Object.values(props.lastDayData['Time Series (Daily)']).slice(0,1)[0]['3. low']}</span>
            <span><b>close:</b> USD {Object.values(props.lastDayData['Time Series (Daily)']).slice(0,1)[0]['4. close']}</span>
        </div>
        </div>
    )
}


export default LastDayDetails