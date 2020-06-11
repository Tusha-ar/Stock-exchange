import React from 'react';
import {Line} from 'react-chartjs-2'

class Graph extends React.Component{
    render(){
        return(
            <div className='graph'>
                <span>*Data based on observations of last 100 days</span>
                <Line 
                options={{ maintainAspectRatio: false }}
                data={this.props.data}
                height={500}
                />
            </div>
        )
    }
}

export default Graph