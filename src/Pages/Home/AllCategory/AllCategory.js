import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import ServiceDetails from '../ServiceDetails/ServiceDetails';

const AllCategory = () => {

    const categories = useLoaderData();
    return (
        <div>
            <h1>All Categories</h1>
             {
                categories.map(category => <ServiceDetails  key={category._id}
                category={category}></ServiceDetails>)
            } 
           
        </div>
    );
};

export default AllCategory;