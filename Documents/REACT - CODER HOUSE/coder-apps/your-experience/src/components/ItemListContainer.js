import React, { useEffect, useState } from 'react';
// import { ItemCount } from './ItemCount/ItemCount';
import getData from './mock/Productos'; 
import { Itemlist } from './ItemList';




export const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  useEffect(() => {

    const getProducts = async () => {
      try {
        const response = await getData;
        setProducts(response);
      } catch (error) {
        console.log(error);
      } 
    };

    getProducts();

  }, []);

  return (
    <>
    
      <h1 className='h3 p-5 text-center'>
        {greeting}
        {/* <ItemCount stock={5} initial={1} onAdd={alertProductos} /> */}
        <Itemlist products={products} />
      </h1>

    </>

  )
}