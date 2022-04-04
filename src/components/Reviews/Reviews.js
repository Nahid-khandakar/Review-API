import React from 'react';
import useReviews from '../../Hook/useReviews';
import Card from '../Card/Card';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useReviews()
    //console.log(reviews)

    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 p-14 bg-gray-200 '>
            {
                reviews.map(review => <Card
                    key={review.id}
                    review={review}
                ></Card>)
            }
        </div>
    );
};

export default Reviews;