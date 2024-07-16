import React, { useState } from 'react';
import { BestSellingHamperBest, HomeBestSellingHampers, ProductShop } from './DataDetails';


const Search = () => {
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
        </div></div>
    </>
  );
};

export default Search;
