import React, { useEffect, useState } from 'react';
import Category from './Category/Category';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import { Link } from 'react-router-dom';


const Home = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data=> {
           
            setCategory(data)
        })
    } ,[])
    return (
        <div>
          <div className='flex flex-row mb-5'>
            <h3 className='font-bold '>All Category</h3>
          {
                category.map(singleCategory =><Category key={singleCategory.id}
                category={singleCategory}></Category>)
            }
            <Link ><button className="btn glass text-black">See More</button></Link>
          </div>
               
            
           

            <Banner></Banner>

            {
                category.map(singleCategory =><Services key={singleCategory.id}
                category={singleCategory}></Services>)
            }
        </div>
    );
};

export default Home;