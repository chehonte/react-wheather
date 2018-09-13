import React, { Component } from 'react';

class ScheduleWeatherDay extends Component {
    render(){
      let item = this.props.data
      let date = new Date(item.dt_txt)
      let dateString = ((date.getDate() + 1) < 10 ? '0' : '') + (date.getDate() + 1) + '.' + ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1) + '.' + date.getFullYear()
      let timeString = (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
      let icon = 'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'
      return(
        <div className='scheduleWeatherDays__day'>
          <div className='scheduleWeatherDays__day-date'>
            {dateString}
          </div>
          <div className='scheduleWeatherDays__day-time'>
            {timeString}
          </div>
          <div className='scheduleWeatherDays__day-image'>
            <img src={icon} alt=''/>
          </div>
          <div className='scheduleWeatherDays__day-temp'>
            {Math.round(item.main.temp)}&#8451;
          </div>
        </div>
      )
    }
}

export {ScheduleWeatherDay}