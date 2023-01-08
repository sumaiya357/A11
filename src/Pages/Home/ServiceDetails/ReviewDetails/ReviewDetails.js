import React from 'react';

const ReviewDetails = ( {review} ) => {
    const {name,email,rate,comment,img,time} = review;
    
    return (
        
              <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
               
               <div className="card-body">
               <div className='flex items-center'>
               <figure className='h-64 rounded-lg '><img className='img' src={img} alt="user" /></figure>
               </div>
                <h2 className="card-title">Name: {name}</h2>
              
                 <p>Email: {email}</p>
                 <p>Comment:{comment}</p>
            <div className="card-actions justify-between">
                <span className='font-bold'>Rating: {rate}</span><br></br>
                
            </div>
            <p>Time:{time}</p>
        </div>
        </div>
       
    );
};

export default ReviewDetails;