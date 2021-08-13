import { InfoCardProps, Props } from 'pages/search';
import React, { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

export const Map = ({ searchResults }: Props) => {
  const centerPoint = useMemo(() => {
    const sum = searchResults.reduce(
      (acc, curr) => ({
        latitude: acc.latitude + curr.lat,
        longitude: acc.longitude + curr.long
      }),
      { latitude: 0, longitude: 0 }
    );
    return {
      latitude: sum.latitude / searchResults.length,
      longitude: sum.longitude / searchResults.length
    };
  }, [searchResults]);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: centerPoint.latitude,
    longitude: centerPoint.longitude,
    zoom: 11
  });

  useEffect(() => {
    setViewport({
      ...viewport,
      latitude: centerPoint.latitude,
      longitude: centerPoint.longitude
    });
  }, [searchResults, centerPoint]);

  const [selectedLocation, setSelectedLocation] = useState<InfoCardProps>();
  const handleViewportChange = nextViewport => setViewport(nextViewport);
  const handleMarkerClick = (item: InfoCardProps) => (e: SyntheticEvent) => {
    e.preventDefault();
    setSelectedLocation(item);
  };
  const handlePopupClose = () => setSelectedLocation(undefined);

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/jaccree/cksadyzysak7817p61u4h8w1e'
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={handleViewportChange}
    >
      {searchResults?.map(item => (
        <div key={`${item.lat}_${item.long}`}>
          <Marker longitude={item.long} latitude={item.lat}>
            <p
              className='text-2xl cursor-pointer animate-bounce'
              onClick={handleMarkerClick(item)}
            >
              👇
            </p>
          </Marker>
          {selectedLocation?.long === item.long ? (
            <Popup
              latitude={item.lat}
              longitude={item.long}
              closeOnClick
              onClose={handlePopupClose}
            >
              {item.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
};
