import React, { Component } from 'react';
import Odometer from 'react-odometerjs';

import 'odometer/themes/odometer-theme-default.css';

import Cta from "./Cta";
import Details from "./Details";
import location from '../assets/img/SVG/location-pin.svg';
import star from '../assets/img/SVG/star.svg';

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
          odometerValue: 0
        };
      }
  async componentDidMount() {
    this.setState({ odometerValue:8.6 });

  }
  render() {
      const overview = "Portugal";
      let ratingpoint =429;
      const rating = ratingpoint + 1;
      const { odometerValue } = this.state;
    return (
      // jsx
      <div>
        <div className="overview">
            <h1 className="overview__heading">
                Hotel Las Palmas
            </h1>
            <div className="overview__stars">
                <img src={star} className="overview__icon-star"></img>
                <img src={star} className="overview__icon-star"></img>
                <img src={star} className="overview__icon-star"></img>
                <img src={star} className="overview__icon-star"></img>
                <img src={star} className="overview__icon-star"></img>
            </div>
            <div className="overview__location">
                <img src={location} className="overview__icon-location"></img>
                <button className="btn-inline">Albufeira, {overview}</button>
            </div>
            <div className="overview__rating">
                <div className="overview__rating-average"> <Odometer
                    format="(.ddd).dd"
                    duration={ 10000 }
                    value={ odometerValue }
                /></div>
                <div className="overview__rating-count">{rating} votes</div>
            </div>
        </div>
        </div>
    );
  }
}

export default Overview;


