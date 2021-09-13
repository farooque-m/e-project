import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import "../css/style.css";

function Cart({item, handleUpdateCartQty, handleRemoveFromCart}) {
    return (
        <Card>
            <CardMedia className="card1" image={item.media.source} alt={item.name} />
            <CardContent>
                <Typography variant="h4" >{item.name}</Typography>
                <Typography variant="h5" >{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions >
                <div >
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1) } >+</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1) } >-</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    );
};

export default Cart;
