import React , {useState, useEffect} from "react";
import Products from "../components/comp/products"
import {commerce}from "../lib/commerce";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import CartPage from "./cartPage";

import "../css/style.css";

import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Item from "../components/item";
import Checkout from "./checkout/checkoutPage";

const Homepage = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart ] = useState({});
    const [items, setItems] = useState([]);

    const fetchProducts = async ()=> {
        const {data} = await commerce.products.list();
        setProducts(data);
    };

    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve());
    };
    const handleAddToCart = async (productId, quantity) =>{
         const item = await commerce.cart.add(productId, quantity);
         setCart(item.cart);
    }
    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId,{ quantity });

        setCart(cart);
    }
    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);
        
        setCart(cart);
    }
    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();

        setCart(cart)
    }
    const fetchProduct = async () => {
        setItems( await commerce.products.list())
    }

    useEffect( ()=> {
        fetchProducts();
        fetchCart();
        fetchProduct();  
    }, []);
    console.log(items)
    return(
        <Router>
        <div>
            <div>
                <NavBar totalItems={cart.total_items}/>
            </div>
            <Switch>
                <Route exact path="/home">
            <div className="salelive">
            <img alt="banner" className="saleimg" src="https://rukminim1.flixcart.com/www/816/816/promos/25/05/2021/c6ee5938-9153-49e6-b519-e6c71717fc4c.png?q=90"></img>
            <img alt="mobile" className="img" src="https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/521352b2-9c3e-4d2e-bf79-71165ed41a3b.png?q=90"/>
            <img alt="fashion" className="img" src="https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/55e3d7c3-9564-4ec6-8024-02c6b2fe65ed.png?q=90"></img>
            <img alt="electronics" className="img" src="https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/880e0970-97a8-4159-9c4f-e22e4d1a76ab.png?q=90"></img>
            </div>
            <div>
            <img alt="discount" className="discountimg" src="https://rukminim1.flixcart.com/www/3376/3376/promos/27/05/2021/cf26c3ca-85f3-4805-b04c-1e6bd97c1c80.png?q=90"/>
            </div>
            <div>
                <Products products={products} onAddToCart={handleAddToCart} fetchProduct={fetchProduct} />
            </div>
            </Route>

            <Route exact path="/cart" >
            <CartPage 
             cart={cart}
             handleUpdateCartQty={handleUpdateCartQty}
             handleRemoveFromCart={handleRemoveFromCart}
             handleEmptyCart={handleEmptyCart}
             />
            </Route>
            <Route exact path="/product" >
            <Item items={items}/>
            </Route>
            <Route exact path="/checkout" >
                <Checkout />
            </Route>
            </Switch>
            <div className="footer" >
                <Footer/>
            </div>
        </div>
        </Router>
    )
};
export default Homepage;