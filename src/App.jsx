// import {useState, useCallback} from 'react'
// import {Route, Switch, Redirect} from 'react-router-dom'

// import LoginForm from './components/LoginForm'
// import Home from './components/Home'
// import Products from './components/Products'
// import ProductItemDetails from './components/ProductItemDeatils'
// import Cart from './components/Cart'
// import NotFound from './components/NotFound'
// import ProtectedRoute from './components/ProtectedRoute'
// import CartContext from './context/CartContext'

// import './App.css'

// const App = () => {
//   const [cartList, setCartList] = useState([])

//   const removeAllCartItems = useCallback(() => {
//     setCartList([])
//   }, [])

//   const incrementCartItemQuantity = useCallback(id => {
//     setCartList(prevCartList =>
//       prevCartList.map(item =>
//         item.id === id ? {...item, quantity: item.quantity + 1} : item
//       )
//     )
//   }, [])

//   const decrementCartItemQuantity = useCallback(id => {
//     setCartList(prevCartList => {
//       const product = prevCartList.find(item => item.id === id)
//       if (product && product.quantity > 1) {
//         return prevCartList.map(item =>
//           item.id === id ? {...item, quantity: item.quantity - 1} : item
//         )
//       }
//       return prevCartList.filter(item => item.id !== id)
//     })
//   }, [])

//   const removeCartItem = useCallback(id => {
//     setCartList(prevCartList => prevCartList.filter(item => item.id !== id))
//   }, [])

//   const addCartItem = useCallback(product => {
//     setCartList(prevCartList => {
//       const existingProduct = prevCartList.find(item => item.id === product.id)
//       if (existingProduct) {
//         return prevCartList.map(item =>
//           item.id === product.id
//             ? {...item, quantity: item.quantity + product.quantity}
//             : item
//         )
//       }
//       return [...prevCartList, product]
//     })
//   }, [])

//   return (
//     <CartContext.Provider
//       value={{
//         cartList,
//         addCartItem,
//         removeCartItem,
//         incrementCartItemQuantity,
//         decrementCartItemQuantity,
//         removeAllCartItems,
//       }}
//     >
//       <Switch>
//         <Route exact path="/login" component={LoginForm} />
//         <ProtectedRoute exact path="/" component={Home} />
//         <ProtectedRoute exact path="/products" component={Products} />
//         <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} />
//         <ProtectedRoute exact path="/cart" component={Cart} />
//         <Route path="/not-found" component={NotFound} />
//         <Redirect to="not-found" />
//       </Switch>
//     </CartContext.Provider>
//   )
// }

// export default App

import { useState, useCallback } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Products from './components/Products';
import PrimeDealsSection from './components/ProductItemDeatils';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import CartContext from './context/CartContext';

import './App.css';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const [cartList, setCartList] = useState([]);

  const removeAllCartItems = useCallback(() => {
    setCartList([]);
  }, []);

  const incrementCartItemQuantity = useCallback(id => {
    setCartList(prevCartList =>
      prevCartList.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decrementCartItemQuantity = useCallback(id => {
    setCartList(prevCartList => {
      const product = prevCartList.find(item => item.id === id);
      if (product && product.quantity > 1) {
        return prevCartList.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCartList.filter(item => item.id !== id);
    });
  }, []);

  const removeCartItem = useCallback(id => {
    setCartList(prevCartList => prevCartList.filter(item => item.id !== id));
  }, []);

  const addCartItem = useCallback(product => {
    setCartList(prevCartList => {
      const existingProduct = prevCartList.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCartList.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCartList, product];
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeAllCartItems,
      }}
    >
      
      <div className={!isLoginPage ? 'main-content' : ''}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<PrimeDealsSection />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
};

export default App;
