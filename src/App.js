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
        <h1>COVID-19 Tracker</h1>
      </div>
     <Cards data={data} />
     <Countrypicker />

     <Chart />
    </div>
  );
}

}

export default App;
