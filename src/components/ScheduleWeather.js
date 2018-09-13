import React, { Component } from 'react';
import { ScheduleWeatherDay } from './ScheduleWeatherDay';

import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const $ = window.$;

class ScheduleWeather extends Component {
    constructor(props) {
      super(props)
      this.slider = React.createRef()
    }
    componentDidMount(){
      $(this.slider.current).owlCarousel({
        items: 6,
        dots: false,
        nav: true,
        responsive : {
          0 : {
              items: 1
          },
          480 : {
              items: 3
          },
          768 : {
              items: 5
          },
          992 : {
            items: 6
          }
        }
      });
    }
  
    componentWillUnmount(){
      $(this.slider.current).trigger('destroy.owl.carousel');
    }
    render(){
      let { list } = this.props.data
      let scheduleWeatherDays = list.map(function(item) {
        return <ScheduleWeatherDay key={item.dt} data={item}/>
      })
      return(
        <div className='scheduleWeatherDays'>
          <div className='scheduleWeatherDays__inner owl-carousel' ref={this.slider}>
            {scheduleWeatherDays}
          </div>
        </div>
      )
    }
}

export {ScheduleWeather}