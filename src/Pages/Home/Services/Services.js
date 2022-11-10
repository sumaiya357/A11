import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    // const {title,desciption,image,price} = category;
    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/allcategory')
        .then(res => res.json())
        .then(data=> {
            
            setServices(data)
        })
    } ,[])
    return (
        <div className=''>
            <h2 className='text-5xl font-bold mx-5 mb-5 mr-40'>Our Packages</h2>
            <div className='grid grid-cols-1 gap-5 mb-5 '>
            {
                services.map(service =>
               <ServiceDetails service={service}></ServiceDetails>)
            }
            </div>
        </div>
    );
};

export default Services;