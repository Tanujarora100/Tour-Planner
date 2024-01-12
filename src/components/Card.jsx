import React, { useEffect, useState } from 'react';

const Card = ({ tour }) => {
    const [readMore, setReadMore] = useState(false);
    const [text, setText] = useState('read more');
    const [desc, setDesc] = useState(tour.info.substring(0, 200));
    

  

    const toggleReadMore = () => {
        setReadMore(!readMore);
        setText(readMore ? 'read more' : 'show less');
        setDesc(readMore ? tour.info.substring(0, 200) : tour.info);
    };


    return (
        <div className=" border-solid border-black-300">
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <div>
                <p>{tour.price}</p>
            </div>
            <div className='description'>
                {desc}
                <br />
                <br />
                <span className='read-more' onClick={toggleReadMore}>
                    {text}
                </span>
            </div>
           

        </div>
    );
};

export default Card;
