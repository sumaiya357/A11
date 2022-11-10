import React from 'react';

const Category = ({category}) => {
    const {title} = category;
    return (
        <div  className=' flex flex-row text-sm'>
           <p className='ml-5'>{title}</p>
           
         
        </div>
        
    );
};

export default Category;