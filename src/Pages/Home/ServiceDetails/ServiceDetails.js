import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({service}) => {
    const {title,image,Description,price} = service;
    return (
        <div >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
               <figure><img src={image} alt="Shoes" /></figure>
               <div className="card-body">
                <h2 className="card-title">{title}</h2>
              {
                Description.length>40?
                <p>{Description.slice(0,40) + '...'}</p>
                :<p>{Description}</p>
              }

            <div className="card-actions justify-between">
                <span className='font-bold'>Price: {price}</span>
            <Link to={`/allcategory/${service._id}`}><button className="btn btn-primary">See Details </button></Link>
            </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;