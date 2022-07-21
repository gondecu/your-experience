import React, { useEffect, useState } from 'react'
// import detalleData from './mock/detailsProduct';
import { ItemListDetail } from './ItemListDetail';
import { useParams } from 'react-router-dom';

const product = [{
  id: "1",
  title: "iPhone 9",
  description: "An apple mobile which is nothing like  apple",
  price: 549,
  stock: 3,
  brand: "Apple",
  images: [
    "https://dummyjson.com/image/i/products/1/1.jpg",
  ]
}

]


const ItemContainer = () => {
  const [detail, setData] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 1000);
    });
    getData.then((res) =>
    setData(res.find((glass) => glass.Id === detailId)),
  );
}, [detailId]);

return (
  <>
      <ItemListDetail detail ={detail} />
  </>
)
}

export default ItemContainer;





// export const ItemContainer = () => {

//   const [detail, setDetail] = useState([]);
    
//   useEffect(() => {
   
//    const getItem = async() =>{
//     try{
//       const obtenerData = await detalleData;
//       setDetail(obtenerData)
//     }catch(error){
//       console.log(error)
//     }}

//    getItem();

//   }, []);



//   return (
  
//       <h1>
//           <ItemListDetail  detail={detail} />
//       </h1>
    
//   )
// }