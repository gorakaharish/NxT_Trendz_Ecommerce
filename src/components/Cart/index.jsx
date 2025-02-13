import { useContext } from 'react'
import CartContext from '../../context/CartContext'

import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => {
  const { cartList, removeAllCartItems } = useContext(CartContext)
  const isCartEmpty = cartList.length === 0

  return (
    <>
      <Header />
      <div className="cart-container">
        {isCartEmpty ? (
          <EmptyCartView />
        ) : (
          <div className="cart-content-container">
            <div className="cart-header">
              <h1 className="cart-heading">My Cart</h1>
              <button type="button" className="remove-all-btn" onClick={removeAllCartItems}>
                Remove All
              </button>
            </div>
            <CartListView />
            <CartSummary />
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
