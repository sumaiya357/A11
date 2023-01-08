import React  from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../ServiceDetails/Review/Review';
import ReviewDetails from '../ServiceDetails/ReviewDetails/ReviewDetails';

const SingleService = () => {
    const service = useLoaderData();
    console.log(service)
    
    const {title,image,Description,price} = service[0];
    return (
        <div>

            
            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
               <figure><img src={image} alt="Shoes" /></figure>
               <div className="card-body">
                <h2 className="card-title">{title}</h2>
              
                 <p>{Description}</p>

            <div className="card-actions justify-between">
                <span className='font-bold'>Price: {price}</span>
            
            </div>
            
        </div>
        </div>

         <div>
            <h3 className='text-3xl font-bold mt-20 mb-10'>Plese share your experience with us here</h3>
            <Review></Review>
         </div>
        {/* <ReviewDetails></ReviewDetails> */}
              {/* {
                services.map(service => 
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
               <figure><img src={service.image} alt="Shoes" /></figure>
               <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
              
                 <p>{service.Desciption}</p>

            <div className="card-actions justify-between">
                <span className='font-bold'>Price: {service.price}</span>
            <Link to='/allcategory'><button className="btn btn-primary">See Details </button></Link>
            </div>
            
        </div>
        </div>
                    )
              } */}
        </div>
    );
};

export default SingleService;