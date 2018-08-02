import React from 'react';
import PropTypes from 'prop-types';

const Pin = () => (
  <svg width="20" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10.5c0 2.518-2.93 4.915-4.466 9.5-1.1 3.284-2.975 7.307-4 10C10.39 33 10 33 10 33s-.346 0-1.466-3c-1.006-2.693-2.9-6.716-4-10C2.998 15.415 0 13.018 0 10.5 0 4.977 4.477.5 10 .5s10 4.477 10 10z" fill="#023349"/>
    <circle cx="3" cy="3" r="3" transform="translate(7 6)" fill="#05ABF9" fill-opacity=".36"/>
  </svg>
)

function LocationBlock({node}) {
  return (
    <div className='location'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBQ_6FTCDEoLuc_88i5ZWfBnr_RuH1uYO0' }}
        defaultCenter={[node.center.lat, node.center.lon]}
        defaultZoom={node.zoom}
      >
        <Pin
          lat={node.location.center.lat}
          lng={node.location.center.lon}
          text={node.locationName}
        />
      </GoogleMapReact>
    </div>
  );
}

LocationBlock.defaultProps = {};

LocationBlock.propTypes = {
  node: PropTypes.object.isRequired
}

export default LocationBlock

