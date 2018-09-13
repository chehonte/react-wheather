import React, { Component } from 'react';
import { CityWeather } from './components/CityWeather';
import { CityAdd } from './components/CityAdd';

class App extends Component {
  state = {
    cities: [
    ]
  }

  cityAddHandler = (cityId) => {
    let nextCities = [cityId, ...this.state.cities]
    this.setState({cities: nextCities})
    localStorage.setItem("weatherCities", nextCities);
  }

  cityRemoveHandler = (cityId) => {
    let removeIndex = this.state.cities.indexOf(cityId)
    let nextCities = this.state.cities
    if (removeIndex > -1) {
      nextCities.splice(removeIndex, 1);
      this.setState({cities: nextCities})
      localStorage.setItem("weatherCities", nextCities);
    }
  }

  componentDidMount(){
    let localStorageCities = localStorage.getItem("weatherCities")
    if(localStorageCities !== null && localStorageCities !== ''){
      this.setState({cities: localStorageCities.split(',')})
    }
  }


  render() {
    const { cities } = this.state
    let citiesTemplate

    if( cities.length ) {
      citiesTemplate = cities.map((item)=>{
        return <CityWeather cityRemoveHandler={this.cityRemoveHandler} key={item} cityId={item}/>
      })
    } else {
      citiesTemplate = <div>Please add one or more cities.</div>
    }

    return (
      <div className='weather'>
        <CityAdd cityAddHandler={this.cityAddHandler} cities={cities}/>
        {citiesTemplate}
      </div>      
    )
  }

}

export default App;
