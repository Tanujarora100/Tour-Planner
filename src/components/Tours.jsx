import React from 'react';
import Card from './Card'; // Make sure to replace './Card' with the correct path to your Card component

const Tours = ({ tours }) => {
  return (
    <div className='flex '>
      {tours.map((tour) => {
        return <Card key={tour.id} tour={tour} />;
      })}
    </div>
  );
};

export default Tours;
