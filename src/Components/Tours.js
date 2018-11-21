import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class Tours extends Component{

    render(){
        return(
       <div className="detail" style={{width: '80%', height: '500px',display:"block"}}>
            <div className="description" style={{width: '100%', height: '100%',display:"block"}}>
            <Map google={this.props.google} zoom={14}>
 
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                </InfoWindow>
                </Map>
            </div>
       </div>

        );
    }
}

// export default Tours;
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAWUWeyy-IoG24YNDOUTKKllT8_g0Oaj1w")
  })(Tours)