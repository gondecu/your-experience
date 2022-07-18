import React from 'react';

export const Item = ({product}) => {
  const { image, name, price,id } = product;
  return (
    <div className="container col-lg-4 mt-5 text-decoration-none text-dark">
      <div className="text-center card-box d-flex justify-content-around">
        <div className="card p-3 rounded-5 shadow-lg">
          <img className='rounded-5' src={image}/>
          {/* <p className='h5 m-3'>{id} </p> */}
          <h1 className='h2 shadow-lg'>{name} </h1>
          <p className='text-success'>${price} </p>
        </div>
      </div>
    </div>
  )
}