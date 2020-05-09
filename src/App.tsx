import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

interface IState{
  data:any;
  country:string;
}

class App extends React.Component<any,IState> {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData(this.state.country);

    this.setState({ data });
  }

  handleCountryChange = async (country:string) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;