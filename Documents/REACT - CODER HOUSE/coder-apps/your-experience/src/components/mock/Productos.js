
const products = [
    {
        id: 1,
        name: 'New Balance',
        price: 250,
        image: './img/4k-iguazu-falls-argentina-waterfall-wallpaper-preview.jpg'
      },
      {
        id: 2,
        name: 'New Balance',
        price: 250,
        image: "./img/photo-1552751753-0fc84ae5b6c8.jfif"
  
      },
];

const getData = new Promise((resolve, reject) => {
    let afterPromises = true;
    setTimeout(() => {
      if (afterPromises) {
        resolve(products);
      } else {
        reject("Failed to get data");
      }
    }, 2000);
  });
  
  export default getData;