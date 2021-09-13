import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core"
import { AddShoppingCart } from "@material-ui/icons"
import { Link } from "react-router-dom";






const Product = ({ product, onAddToCart, fetchProduct}) => {

    return(

        <Card className="card">
            <CardMedia className="card1" image={product.media.source} title={product.name} component={Link} to="/product" />
            <CardContent>
                <div>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing >
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}
export default Product;