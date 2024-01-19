import React, { useState, useEffect } from "react";
import "./global.css"
import Navbarrr from "./components/navbar";
import SlidingImage from "./components/carousel";
import { Route, Routes } from "react-router-dom";
import Login from './pages/login/login';
import Signup from './pages/sign up/sign up';
import Yeezy from './pages/yeezy';
import Menshoes from './pages/menshoes';
import Womenshoes from './pages/womenshoes';
import Kidshoes from './pages/kidshoes';
import Nike from './pages/nike';
import Airjordan from './pages/air jordan';
import Apparel from './pages/apparel'
import Navbarforall from "./components/navbarforall";
import Account from "./pages/Account";
import { AuthContextProvider } from './components/context/auth-context';

import {commerce} from "./api/commerce";
import Products from "./components/product/Products";
//import Shoppingcartitem from "./components/shoppingcart folder/shoppingcart item/shoppingcart item";
//import Shoppingcart from './components/shoppingcart folder/shoppingcart'
import Cart from './components/cart 2.0/cart';
import  Checkout from './components/checkoutform/checkout'






function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [order, setOrder] = useState({});
 
const [jordanCategories, setJordanCategories] = useState([]);
const [yeezyCategories, setYeezyCategories] = useState([]);
   




   

  
  

  

  //'cat_yA6nldBraoEWbz'

  const jordansPage = () => {
  commerce.products.list({
    category_slug: ['jordans'], }).then(response =>  {
    setJordanCategories(response.data)
  })

}

const yeezyPage = () => {
  commerce.products.list({
    category_slug: ['yeezy'], }).then(response =>  {
    setYeezyCategories(response.data)
  })

}



  

  

  

    
     
   

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    
  };

  

  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }

  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  
  useEffect(() => {
    fetchProducts();
    fetchCart();
    jordansPage()
    yeezyPage()
    
  }, []);

  

  

  
  

 
  

  return (
    <>

    
    
    <AuthContextProvider>

    
     <Routes>
     
        

     <Route exact path='/' element={ <> <Navbarrr cartNum={cart.total_items}/> <SlidingImage/> 
     <Products newReleaseproducts={products}
                                    onAddToCart={handleAddToCart}/>
         </>}  />
     
     <Route exact path="/account" element={<Account/>}/>
     <Route exact path="/login" element={<> <Navbarforall cartNum={cart.total_items}/>  <Login/> </>    }/>
        <Route exact path="/sign-up" element={<> <Navbarforall cartNum={cart.total_items}/> <Signup /> </> }/>
        <Route exact path="/apparel" element={<Apparel  onAddToCart={handleAddToCart}/>}/>
        <Route exact path="/yeezy" element={<> <Navbarforall cartNum={cart.total_items}/>  <Yeezy yeezyCategories={yeezyCategories}/> </>}/>
        <Route exact path="/air-jordan" element={<> <Navbarforall cartNum={cart.total_items}/> <Airjordan jordanCategories={jordanCategories} onAddToCart={handleAddToCart} />  </> }/>
        <Route exact path="/sign-up" element={<Signup/>}/>
        <Route exact path="/nike" element={<Nike/>}/>
        <Route exact path="/menshoes" element={<Menshoes/>}/>
        <Route exact path="/womenshoes" element={<Womenshoes/>}/>
        <Route exact path="/kidshoes" element={<Kidshoes/>}/>  
        <Route exact path="/cart" element={ <> <Navbarforall/> <Cart 
                                   cart={cart}
                                   onUpdateCartQty={handleUpdateCartQty} 
                                   onRemoveFromCart={handleRemoveFromCart} 
                                   onEmptyCart={handleEmptyCart}
                                        
                                     />  </>}/> 

<Route exact path="/checkout" element={ <> <Navbarforall/> <Checkout 
                                       onCaptureCheckout={handleCaptureCheckout}  
                                             cart={cart}
                                            order={order}
                                        error={errorMessage}   /> </>}/>
        

        
        
 
        

                                           

     </Routes>
     </AuthContextProvider>
     
          
    </>
  );
}

export default App;
