import React from 'react';

const Search = (props)=>{
    const changeHandler =(e)=>{
        props.setKeyword(e.target.value)
    }

    return(
        <div className='search'>
            <input type='text' placeholder='Search Stocks' onChange={changeHandler} onKeyUp={props.onEnter}/>
        </div>
    )
}

export default Search