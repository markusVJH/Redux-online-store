import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProducts } from '../features/productsSlice';
import Product from './Product';

const List = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.cart);

  useEffect(() => {
    if(products.length < 1) dispatch(fetchProducts());
  }, [dispatch, products])

  console.log("products: ", products);



  return (
    <div className='list'>
    <h1>List xd</h1>
    {products.map((product) =>(<Product key={product.id} {...product} cartItems={cartItems}/>)
    )}
    </div>

    )
}

export default List;