import React, {Component} from 'react';
import './style.css';

class Map extends Component {

    // componentDidMount() {
    //     this.renderMap()
    // }

    // renderMap = () => {
    //     loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&callback=initMap`)
    //     window.initMap = this.initMap
    // }

    // initMap = () => {
    //     let directionsService = new window.google.maps.DirectionsService();
    //     let directionsDisplay = new window.google.maps.DirectionsRenderer();
    //     let location = {lat: 28.583097, lng: -81.293571}
    //     let map = new window.google.maps.Map(document.getElementById('map'), {
    //         zoom: 20,
    //         center: location
    //     });
    //     directionsDisplay.setMap(map)
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(function(position) {
    //             var pos = {
    //               lat: position.coords.latitude,
    //               lng: position.coords.longitude
    //             };
    //             document.getElementById('directions').href=`https://www.google.com/maps/dir/${pos.lat},${pos.lng}/${location.lat},${location.lng}`
    //             map.setCenter(pos);
    //             let request = {
    //                 origin: pos,
    //                 destination: location,
    //                 avoidTolls: true,
    //                 avoidFerries: true,
    //                 travelMode: 'DRIVING'
    //             };
    //             directionsService.route(request, function(result, status){
    //                 if (status === 'OK') {
    //                     directionsDisplay.setDirections(result);
    //                 }
    //             });
    //           }, function() {
    //             // handleLocationError(true, infoWindow, map.getCenter());
    //           });
    //         } else {
    //           // Browser doesn't support Geolocation
    //         //   handleLocationError(false, infoWindow, map.getCenter());
    //     }
    // };

    render() {
        return (
            <div className='mainMap' id='mainMap'>
                <h1>Skye's the Limit Studio</h1>
                <h4>2721 N. Forsyth Road Suites 321 & 410 Winter Park, FL 32746</h4>
                <a id='directions' href={`https://www.google.com/maps/dir//28.583097,-81.293571`} target='_blank' rel='noopener noreferrer'>Get Directions</a>
                {/* <div id='map'></div> */}
            </div>
        );
    };
};

// function loadScript(url) {
//     let index = window.document.getElementsByTagName('script')[0]
//     let script = window.document.createElement('script')
//     script.src = url
//     script.async = true
//     script.defer = true
//     index.parentNode.insertBefore(script, index)
// };

export default Map;