import React, { Component } from 'react';

class WeatherToday extends Component {
    render(){
        //let {name, sys, clouds, coord, weather, main, wind} = this.props.data
        let {name, sys, clouds, weather, main, wind} = this.props.data
        let sunrise = new Date(sys.sunrise * 1000)
        let sunset = new Date(sys.sunset * 1000)
        let icon = 'http://openweathermap.org/img/w/' + weather[0].icon + '.png'
        let temp = main.temp
        let pressure = Math.round(main.pressure * 0.75006375541921)
        let humidity = main.humidity
        let windSpeed = wind.speed
        
        return (
            <div className='weatherToday'>
                <div className='weatherToday__header'>
                    {name}, {sys.country}
                </div>
                <div className='weatherToday__content'>
                    <div className='weatherToday__main'>
                        <div className='weatherToday__temp'>
                            {temp}&#8451;
                        </div>
                        <div className='weatherToday__image'>
                            <img src={icon} alt=''/>
                        </div>
                        <div className='weatherToday__sun'>
                            <p>Sunrise: {sunrise.getHours()}:{sunrise.getMinutes()}</p>
                            <p>Sunset: {sunset.getHours()}:{(sunset.getMinutes() < 10 ? '0' : '') + sunset.getMinutes()}</p>
                        </div>
                    </div>
                    <div className='weatherToday__info'>
                        <div className='weatherToday__info-col'>
                            <p>
                                <strong>Cloudiness:</strong> {clouds.all}%
                            </p>
                            <p>
                                <strong>Wind:</strong> {windSpeed}м/c
                            </p>
                        </div>
                        <div className='weatherToday__info-col'>
                            <p>
                                <strong>Humidity:</strong> {humidity}%
                            </p>
                            <p>
                                <strong>Pressure:</strong> {pressure} mmHg
                            </p>
                        </div>
                    </div>
                </div>
                {/*Долгота: {coord.lon}*/}
                {/*Широта: {coord.lat}*/}                
            </div>
        )
    }
}

export {WeatherToday}