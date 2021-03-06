
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node
      // let position = new maps.LatLng({lat: 28.05537, lng: -81.96778990000001});
      const mapConfig = Object.assign({}, {
        center: {lat: 28.05537, lng: -81.96778990000001}, // sets center of google map to NYC.
        zoom: 15, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '100vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '100vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
   
      <div ref="map" style={{height:500, width:'100%',   left:0,
        top:0, overflow:'hidden',  position:'relative'}} >
        loading map...
      </div>
  
    )
  }
}