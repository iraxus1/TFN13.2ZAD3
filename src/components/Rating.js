import React, {useState} from 'react';
import Star from './Star';
const Rating = ({ value, onChange }) => {
    const [rating, setRating] = useState(value);
    const handleClick = (newRating) => {
        setRating(newRating);
        onChange(newRating);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((val) => (
                <Star
                    key={val}
                    filled={val <= rating}
                    onClick={() => handleClick(val)}
                />
            ))}
        </div>
    );
}

export default Rating;