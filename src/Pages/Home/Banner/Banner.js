import React from 'react';
import img2 from '../../../Assets/slide/img-2.jpg'
import img3 from '../../../Assets/slide/img-3.jpg'
import img4 from '../../../Assets/slide/img-4.jpeg'
const Banner = () => {
    return (
      <div className='mt-5 pt-5'>
            <div className="carousel w-full mb-5 rounded-xl">

                 <div id="slide1" className=" rounded-xl carousel-item relative w-full pt-6">
                        <img src={img2} className="w-full rounded-xl" />
                        <div className="absolute flex justify-evenly 
                           transform -translate-y-1/2 left-5 top-1/2 bottom-10 bottom-0 ">  
                           <h2 className='text-xl text-white font-bold'>CAPTURING PRICELESS MOMENTS<br></br>
                           & MEMORIES</h2> 
                        </div>

                        <div className="absolute flex justify-evenly 
                           transform -translate-y-1/2 left-20 top-1/2 ml-10 mt-5">
                              <button className="btn btn-warning ">Warning</button>
                         </div>

                        <div className="absolute flex justify-evenly 
                        transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                            
                            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                </div> 

                <div id="slide2" className=" rounded-xl carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className="absolute flex justify-evenly 
                           transform -translate-y-1/2 left-5 top-1/2 bottom-10 bottom-0 ">  
                           <h2 className='text-xl text-white font-bold'>CAPTURING PRICELESS MOMENTS<br></br>
                           & MEMORIES</h2> 
                        </div>

                        <div className="absolute flex justify-evenly 
                           transform -translate-y-1/2 left-20 top-1/2 ml-10 mt-5">
                              <button className="btn btn-warning ">Warning</button>
                         </div>

                        <div className="absolute flex justify-evenly 
                        transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                            
                            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                </div> 

                <div id="slide3" className=" rounded-xl carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-xl" />
                    <div className="absolute flex justify-evenly 
                           transform -translate-y-1/2 left-5 top-1/2 bottom-10 bottom-0 ">  
                           <h2 className='text-xl text-white font-bold'>CAPTURING PRICELESS MOMENTS<br></br>
                           & MEMORIES</h2> 
                        </div>

                        <div className="absolute flex justify-evenly 
                           transform -translate-y-1/2 left-20 top-1/2 ml-10 mt-5">
                              <button className="btn btn-warning ">Warning</button>
                         </div>

                        <div className="absolute flex justify-evenly 
                        transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                            
                            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                </div> 
            </div> 
        </div>
    );
};

export default Banner;