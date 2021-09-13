import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import Cart from './cart';



function CartPage({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {


    const EmptyCart = ()=> (
        <Typography variant="susbtitle1">You have no items in your cart. Start shopping!</Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <Cart item={item}
                     handleUpdateCartQty={handleUpdateCartQty}
                      handleRemoveFromCart={handleRemoveFromCart}
                       />
                    </Grid>
            ))}
        </Grid>
        <div className="cartdetails">
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Empty Cart</Button>
                <Button component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
        </div>
        </>
    );
    if (!cart.line_items) return 'Loading...';
    return (
        <div>
            <div>
                <Container>
                    <div />
                        <Typography variant="h3">Your Shopping Cart</Typography>
                        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
                </Container>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}

export default  CartPage;
