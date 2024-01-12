import React, { useState } from 'react';

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
        <div className="border border-gray-300 rounded-md overflow-hidden shadow-md m-4">
            <img src={tour.image} alt={tour.name} className="w-500 h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold">{tour.name}</h3>
                <p className="text-gray-600 mb-2">{tour.price}</p>
                <div className='description'>
                    {desc}
                    <br />
                    <br />
                    <span className='read-more text-blue-500' onClick={toggleReadMore}>
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
