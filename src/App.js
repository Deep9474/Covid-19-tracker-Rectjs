import React from 'react';
import Cards from './Cards';
import Chart from './Chart'
import Countrypicker from './Countrypicker';
import './App.css';
import { fetchData } from './components/api/api';

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
    <div className="App">
     <Cards data={data} />
     <Chart />
     <Countrypicker />
    </div>
  );
}

}

export default App;
