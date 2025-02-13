import { useContext } from 'react'
import Popup from 'reactjs-popup'

import Payment from '../Payment'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => {
  const { cartList } = useContext(CartContext)

  const items = cartList.length
  const totalPrice = cartList.reduce((acc, item) => acc + item.quantity * item.price, 0)

  return (
    <div className="cart-summary-container">
      <div className="cart-summary-card">
        <h1 className="cart-items-total-price">
          Order Total: <span>RS {totalPrice}/-</span>
        </h1>
        <p className="cart-items-count">{items} Items in cart</p>

        <Popup
          modal
          trigger={<button className="checkout-button" type="button">Checkout</button>}
          position="top left"
        >
          {close => <Payment close={close} />}
        </Popup>
      </div>
    </div>
  )
}

export default CartSummary
