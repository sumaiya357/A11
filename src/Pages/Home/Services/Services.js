import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
// import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'

const Services = ({ singleCategory }) => {
    const {image,_id,title, Description ,price} =singleCategory;
    // const {title,desciption,image,price} = category;
    // const [services, setServices] = useState([0]);

    // useEffect(()=> {
    //     fetch('http://localhost:5000/allcategory')
    //     .then(res => res.json())
    //     .then(data=> {

    //         setServices(data)
    //         console.log(data)
    //     })
    // } ,[])

    return (
        <div className=' mb-10'>

            {/* {
                services.map(service =>
               <ServiceDetails service={service}></ServiceDetails>)
            } */}
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><img className='img' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {Description?.length > 40 ?
                        <p>{Description.slice(0, 40) + '...'}</p>
                        :
                        <p>{Description}</p>
                    }


                    <div className="card-actions justify-between">
                        <span className='font-bold'>Price: {price}</span>
                        <Link to={`/allcategory/${singleCategory._id}`}><button className="btn btn-primary">See Details </button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;