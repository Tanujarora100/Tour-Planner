import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Tours = ({ tours }) => {
    const [places, setPlaces] = useState(tours);

    const handleNotInterested = (id) => {
        setPlaces(prevPlaces => prevPlaces.filter(place => place.id !== id));
    };

    useEffect(() => {
        console.log("Places Changed");
    }, [places]);

    return (
        <div className="flex">
            {places.map((tour) => (
                <div key={tour.id}>
                    <Card tour={tour} />
                    <button onClick={() => handleNotInterested(tour.id)}>Not Interested</button>
                </div>
            ))}
        </div>
    );
};

export default Tours;
