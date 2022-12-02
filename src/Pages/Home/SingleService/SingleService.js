import React  from 'react';
import { useLoaderData } from 'react-router-dom';

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