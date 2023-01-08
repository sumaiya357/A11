import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import { Link } from 'react-router-dom';


const Home = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=> {
        fetch('https://my-server-site-sumaiya357.vercel.app/category')
        .then(res => res.json())
        .then(data=> {
           console.log(data)
            setCategory(data)
        })
    } ,[])
    return (
        <div>
          {/* <div className='flex flex-row '>
            <h3 className='font-bold '>All Category</h3>
          {
                category.map(singleCategory =><Category key={singleCategory.id}
                    category={singleCategory}></Category>)
            }
            <Link to='/allcategory'><button className="btn glass text-black">See More</button></Link>

       
           
          </div> */}
               
            
           

            <Banner></Banner>

            <h3 className='text-3xl font-bold mt-20 mb-10'>Our Packages</h3>

          <div className='grid justify-center'>
          {
                category.map(singleCategory =>
                    <Services
                    singleCategory= {singleCategory}>
                        
                    </Services>)
            }
             <div>
                <Link to='/category'><button className='btn btn-outline btn-primary mb-5'>See All Category</button></Link>
            </div>
          </div>

        </div>
    );
};

export default Home;