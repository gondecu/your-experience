import React, { useEffect, useState } from 'react';
// import { ItemCount } from './ItemCount/ItemCount';
// import getData from './mock/Productos'; 
import {ItemList} from './ItemList';
import { useParams } from 'react-router';

const products = [
  {
      id: 1,
      name: 'Noche en el bosque',
      price: 250,
      image: './img/pexels-lumn-167699.jpg',
      category: 'escapadas'
    },
    {
      id: 2,
      name: 'New Balance',
      price: 250,
      image: "./img/photo-1552751753-0fc84ae5b6c8.jfif",
      category: 'escapadas'

    },
];

const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoryId } = useParams();
  
  useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(products);
			}, 1000);
		});

    if (categoryId) {
			getData.then((res) =>
				      setData(res.filter((glass) => glass.category === categoryId)),
			);
		} else {
			getData.then((res) => setData(res));
		}
	}, [categoryId]);

  return (
      <ItemList data={data}/> 
    );
}

export default ItemListContainer;




// export const ItemListContainer = ({ greeting }) => {

//   const [data, setProducts] = useState([]);

//   const { id } = useParams();


  // useEffect(() => {
  // //   customFetch(2000, products)
  // //     .then(result => setProducts(result))
  // //     .catch(err => console.log(err))
  // if(id === undefined){
  //   const getProducts = async () => {
  //     try {
  //       const response = await getData;
  //       setProducts(response);
  //     } catch (error) {
  //       console.log(error);
  //     } 
  //   };
  //   getProducts();
  // } else {

  // }
    

    

  // }, []);


  // useEffect(() => {
	// 	const getData = new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve(products);
	// 		}, 1000);
	// 	});

  //   if (id) {
	// 		getData.then((res) =>
	// 			      setProducts(res.filter((product) => product.id === parseInt(id))),
	// 		);
	// 	} else {
	// 		getData.then((res) => setProducts(res));
	// 	}
	// }, [id]);

  // return (
  //   <>
    
  //     <h1 className='h3 p-5 text-center'>
  //       {greeting}
  //       {/* <ItemCount stock={5} initial={1} onAdd={alertProductos} /> */}
  //       <Itemlist products={products} />
  //     </h1>

  //   </>

  // )
// }