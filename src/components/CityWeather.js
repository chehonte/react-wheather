import React, { Component } from 'react';
import { WeatherToday } from './WeatherToday';
import { ScheduleWeather } from './ScheduleWeather';
import {OPEN_WHEATHER_API_KEY} from '../configs/config';

class CityWeather extends Component {
    state = {
      currentWeather: null,
      scheduleWeather: null
    }
  
    componentDidMount(){
      let cityId = this.props.cityId
  
      fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&units=metric&appid=' + OPEN_WHEATHER_API_KEY)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({scheduleWeather: data});
        });
  
        fetch('http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=metric&appid=' + OPEN_WHEATHER_API_KEY)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({currentWeather: data});
        });
    }

    cityRemoveHandler = (e) =>{
        e.preventDefault()
        this.props.cityRemoveHandler(this.props.cityId);
    }
  
    render() {
      const { currentWeather, scheduleWeather } = this.state
      return(
        <div className='cityWeather'>
            <a href='#' className='cityWeather__remove' onClick={this.cityRemoveHandler}>&#10005;</a>
            {currentWeather !== null && <WeatherToday data={currentWeather}/>}
            {scheduleWeather !== null && <ScheduleWeather data={scheduleWeather}/>}
            
        </div>
      )
    }
}

export {CityWeather}