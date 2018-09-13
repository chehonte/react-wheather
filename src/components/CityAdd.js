import React, { Component } from 'react';
import {CityAddList} from './CityAddList';
import {OPEN_WHEATHER_API_KEY} from '../configs/config';

class CityAdd extends Component {
    constructor(props) {
      super(props)
      this.input = React.createRef()
    }
  
    state = {
      hasCity: false,
      cities: null
    }
  
    getCities = (cityName) => {
      fetch('http://api.openweathermap.org/data/2.5/find?q=' + cityName + '&units=metric&appid=' + OPEN_WHEATHER_API_KEY)
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.setState({cities: data});
          });
    }
  
    clearListHandler = () => {
      this.setState({cities: null});
    }
  
    onBtnSearchClick = (e) => {
      this.setState({hasCity: false})
      this.getCities(this.input.current.value);
      this.input.current.value = ''
    }
  
    cityAddHandler = (cityId) => {
      let cityInList = this.props.cities.indexOf(cityId)
      if (cityInList > -1) {
        this.setState({hasCity: true})
      }else{
        this.props.cityAddHandler(cityId)
      }
      
    }
  
    render(){
      const { cities, hasCity } = this.state
      return(
        <div className='addCity'>
          <div className='addCity__form'>
            <div className='addCity__form-input'>
              <input type='text' placeholder='City name' ref={this.input}/>
            </div>
            <div className='addCity__form-button'>
              <button type='button' onClick={this.onBtnSearchClick}>Find</button>
            </div>
          </div>
          {hasCity &&
            <div className='addCity__message'>
              This city already has been added.
            </div>
          }
          {cities !== null &&
            <div className='addCity__message'>
              Please, choose one of the following cities.
            </div>
          }
          {cities !== null &&
            <div className='addCity__list'>
              <CityAddList cityAddHandler={this.cityAddHandler} clearListHandler={this.clearListHandler} data={cities}/>
            </div>
          }
          
        </div>
      )
    }
}

export {CityAdd}