import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        // fetch('https://my-server-site-sumaiya357.vercel.app/reviews')
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data=> {

            setReviews(data)
            console.log(data)
        })
    } ,[])

    return (
        <div>
           
            {
                reviews.map(review => <ReviewDetails
                key={review._id}
                review ={review}></ReviewDetails>)
            } 
        </div>
    );
};

export default Review;