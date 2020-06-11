import React from 'react';
import Nav from './Components/Nav';
import './Styles/main.scss'
import Home from './Components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Stocks from './Components/Stocks';
import StockDetails from './Components/StockDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav/> 
          <Route path='/' exact component={Home}/>
          <Route path='/stocks'exact component={Stocks}/>
          <Route path='/stocks/:symbol' component={StockDetails}/>
      </div>  
    </BrowserRouter>
  );
}

export default App;
