import React from 'react';
import Cards from './Cards';
import Chart from './Chart'
import Countrypicker from './Countrypicker';
import './App.css';
import { fetchData } from './api';

class  App extends React.Component  {

  state = {
    data: {},
  }
   async componentDidMount(){

     const fetchedData = await fetchData();
this.setState({ data: fetchedData });

   }
   render(){

    const { data } = this.state;

  return (
    <div className="container">
      <div className="covid">
        <h1>C</h1>
        <img src="https://img.icons8.com/fluent/48/000000/virus.png"/>
        <h1>VID-19</h1>
        
        
      </div>
     <Cards data={data} />
     <Countrypicker />

     <Chart />
    </div>
  );
}

}

export default App;
