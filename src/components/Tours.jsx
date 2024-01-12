import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Tours = ({ tours }) => {
  const [places, setPlaces] = useState(tours);
  const [initialPlaces, setInitialPlaces] = useState(tours);

  const handleNotInterested = (id) => {
    setPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== id));
  };

  useEffect(() => {
    console.log("Places Changed");
  }, [places]);

  return (
    <>
      {places.length === 0 ? (
        <div>
          <h2>No Places Left</h2>
          <button onClick={() => setPlaces(initialPlaces)}>Refresh</button>
        </div>
      ) : (
        <div className='flex flex-wrap justify-center'>
          {places.map((tour) => (
            <div key={tour.id} className='m-4'>
              <Card tour={tour} />
              <button className='text-red-500 border-dotted border-2 ' onClick={() => handleNotInterested(tour.id)}>
                Not Interested
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Tours;
