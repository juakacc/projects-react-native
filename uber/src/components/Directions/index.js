import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyCgY0BEGf6PnFra_HyxPqT7dc3vXYWU6GQ"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
};

export default Directions;
