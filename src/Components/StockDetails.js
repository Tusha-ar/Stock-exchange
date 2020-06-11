import React from 'react';
import Axios from 'axios';
import Graph from './Graph';
import LastDayDetails from './LastDayDetails';

let stockData = []
class StockDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            StockData: {
                labels : [],
                datasets : [
                ]
            }
        }
    }

    componentDidMount=()=>{
        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.match.params.symbol}&apikey=3B5UPTTN5KM2DZNC`)
            .then(res=>{
                stockData = res.data
                this.setState({
                    StockData: {
                        labels: Object.keys(res.data['Time Series (Daily)']).reverse(),
                        datasets: [
                            {
                                label: 'price',
                                data: Object.values(res.data['Time Series (Daily)']).map(close=>parseInt(close['4. close'])).slice(0).reverse(),
                                backgroundColor: 'rgba(182,235,122, 0.6)',
                                borderColor: 'rgba(55, 47, 78, 0.5)'
                            }
                        ]
                    }
                })
            })
            .catch(err=>console.log(err))
    }
    render(){
    return(
        <div className='stockDetails'>
            {this.state.StockData.datasets.length > 0? <LastDayDetails lastDayData = {stockData}/>: null}
            <Graph data = {this.state.StockData}/>
        </div>
    )
    }
}

export default StockDetails