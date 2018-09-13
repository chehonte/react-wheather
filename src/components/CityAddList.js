import React, { Component } from 'react';

class CityAddList extends Component {
    onBtnAddClick = (e) => {
      this.props.cityAddHandler(e.target.dataset.cityId);
      this.props.clearListHandler();
    }
    render(){
  
      let {list} = this.props.data
      let listTemplate
      if(list.length){
        listTemplate = list.map((item)=>{
          let flagName = item.sys.country.toLowerCase()
          let flag = 'http://openweathermap.org/images/flags/' + flagName + '.png'
          return (
            <div className='addCity__item' key={item.id}>
              <div className='addCity__item-flag'>
                <img src={flag} alt=''/>
              </div>
              <div className='addCity__item-name'>
                {item.name}, {item.sys.country}
              </div>
              <div className='addCity__item-cords'>
                Geo coords: [{item.coord.lon}, {item.coord.lat}]
              </div>
              <div className='addCity__item-add'>
                <button type='button' data-city-id={item.id} onClick={this.onBtnAddClick}>Add city</button>
              </div>
              
            </div>
          )
        });
      }else{
  
      }
  
      return(
        <React.Fragment>{listTemplate}</React.Fragment>
      )
    }
}

export {CityAddList}