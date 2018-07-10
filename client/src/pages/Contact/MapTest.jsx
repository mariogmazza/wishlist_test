import React, { Component } from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from 'google-map-react';


const Marker = () => <Icon name='marker' size='big' color='red' />


class MapTest extends Component {

  static defaultProps = {
    center: {
      lat: 28.05,
      lng: -81.96
    },
    zoom: 11
  };

  render(){
    const {center, zoom} = this.props;
  return (
    <Segment attached="bottom" style={{padding:0}}>
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker 
           lat={28.05537}
           lng={-81.96778990000001} 
           />
        </GoogleMapReact>
      </div>
     </Segment>
  );
 }
};


export default MapTest;