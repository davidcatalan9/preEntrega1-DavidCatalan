import React from 'react';
import ShoppingCartIcon from '../../icons/shopping-cart.svg';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <>
      <div className='cart-container'>
      <img src={ShoppingCartIcon} alt='Carrito compras' className='cart-icon'/>
      <h4 className='item-count'>9</h4> 
      </div>
    </>
  );
};

export default CartWidget