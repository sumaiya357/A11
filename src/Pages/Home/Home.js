import React, { useEffect, useState } from 'react';
import Category from './Category/Category';
import Banner from './Banner/Banner';


const Home = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=> {
        fetch('category.json')
        .then(res => res.json())
        .then(data=> {
            const mydata= data.slice(0,3);
            setCategory(mydata)
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
            <button className="btn glass text-black">See More</button>
          </div>
               
            
            <h2>Thi is home Pages</h2>
            <Banner></Banner>
        </div>
    );
};

export default Home;