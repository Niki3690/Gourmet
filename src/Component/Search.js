import React, { useState } from 'react';
import { BestSellingHamperBest, HomeBestSellingHampers, ProductShop } from './DataDetails';
import { useEffect } from "react";

const Search = () => {

  useEffect(()=>{
    document.title="search-Gourment"
  },[])
  


  const allItems = [...BestSellingHamperBest, ...HomeBestSellingHampers, ...ProductShop];

  const [searchh, setSearchh] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchh(value);

    const filteredItems = allItems.filter(item =>
      item.title.toLowerCase().includes(value)
    );
    setSearchResults(filteredItems);
  };

  return (

    <>
      <div className='d-flex justify-content-center mt-4'>
        <input
          type='text'
          placeholder='write text here..'
          className='border border-danger border-4 w-50 text-center fs-3 text-capitalize'
          style={{ height: 75 }}
          value={searchh}
          onChange={handleSearch}
        />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-11 col-md-8 col-ld-8'>
            <div className="mt-4">

              <div>
                {searchResults.map((item, index) => (
                  <div key={index} className="card pb-2">
                    <div className="text-center">

                      <img src={item.image} alt={item.title} className="qq" />
                      <h5 style={{ color: 'black' }} className="mt-3">{item.title}</h5>
                      <h5 className="abc">₹{item.price}.00</h5>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className='d-flex gap-5 border border-2 border-danger p-5 rounded-5'>
            <p className='text-success-hover'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et ipsa quos sequi quia, quam ducimus beatae quas nam ex? Quo laudantium, dolore soluta voluptate nostrum officia debitis. Dolores omnis, quibusdam aspernatur consequatur ratione commodi optio, facere dicta assumenda a dolore ducimus, corrupti dolor illum!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et ipsa quos sequi quia, quam ducimus beatae quas nam ex? Quo laudantium, dolore soluta voluptate nostrum officia debitis. Dolores omnis, quibusdam aspernatur consequatur ratione commodi optio, facere dicta assumenda a dolore ducimus, corrupti dolor illum!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et ipsa quos sequi quia, quam ducimus beatae quas nam ex? Quo laudantium, dolore soluta voluptate nostrum officia debitis. Dolores omnis, quibusdam aspernatur consequatur ratione commodi optio, facere dicta assumenda a dolore ducimus, corrupti dolor illum!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et ipsa quos sequi quia, quam ducimus beatae quas nam ex? Quo laudantium, dolore soluta voluptate nostrum officia debitis. Dolores omnis, quibusdam aspernatur consequatur ratione commodi optio, facere dicta assumenda a dolore ducimus, corrupti dolor illum!</p>
          </div>
        </div></div>
    </>
  );
};

export default Search;
