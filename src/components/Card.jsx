import React, { useState } from 'react';


const Card = ({ tour }) => {
    const [readMore, setReadMore] = useState(false);
   const[text,setText]=useState('read more');

    const [desc, setDesc] = useState(tour.info.substring(0,200));

    const toggleReadMore = () => {
        setReadMore(!readMore);
        setText(readMore ? 'read more' : 'show less');
        setDesc(readMore ? tour.info.substring(0,200) : tour.info);
    };

    const handleNotInterested = () => {
        // Implement logic to handle "Not Interested" button click
        console.log(`Not Interested in ${tour.name}`);
    };

    return (
        <div className="card">
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <div>
                <p>{tour.price}</p>
            </div>
            <div className='description'>
                {desc}
                <br></br>
                <br></br>
                <span className='read-more' onClick={toggleReadMore} >
                    {text}
                </span>
            </div>
            <button onClick={handleNotInterested}>Not Interested</button>
        </div>
    );
};

export default Card;
