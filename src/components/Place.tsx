import React from 'react';

interface PlaceProps {
  place: string;
}

const Place: React.FC<PlaceProps> = ({ place }) => {
  return <p>{place}</p>;
};

export default Place;
