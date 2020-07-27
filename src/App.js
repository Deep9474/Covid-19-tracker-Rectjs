import React from 'react';
import Cards from './Cards';
import Chart from './Chart'
import Countrypicker from './Countrypicker';
import './App.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;


    return (
      <div className="container">
        <div className="covid">
        <h1>C</h1>
        <img src="https://img.icons8.com/fluent/48/000000/virus.png" alt="covid__logo"/>
        <h1>VID-19</h1>
      </div> 
        <Cards data={data} />
        <Countrypicker handleCountryChange={this.handleCountryChange} />

        <Chart data={data} country={country} />
      </div>
    );
  }

}

export default App;
