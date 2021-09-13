import { Grid } from "@material-ui/core";
import React from "react";

import Product from "./product";

const Products = ({products, onAddToCart, fetchProduct}) => {
    
    return(
        <main className="main">
            <Grid container justify="center" spacing={4}>
                {products.map((product)=> (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} fetchProduct={fetchProduct} />
                        </Grid>
                ))}
            </Grid>
        </main>
    )
}
export default Products;