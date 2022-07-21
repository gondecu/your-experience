import React from 'react';
import { Item } from './Item';

export const ItemList = ({data = []}) => {

  return (
    <div className="row ">
      {data.map(product => {
        return <Item key={product.id} product={product} id={product.id} />;
      })}
    </div>
  )
}