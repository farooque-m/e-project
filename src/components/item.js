import { Card, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import Items from './items';

function Item({items}) {
    console.log(items)
    return (
        <div>
            <Card >
            <CardMedia className="card1" title={items.data.name}/>
            <Typography>
                {items.description}
                {items.name}
            </Typography>
                {/* {product.map((product) => ( */}
                    {/* <div key={product.id} > */}
                        {/* <Items product={product} fetchProduct={fetchProduct}/> */}
                    {/* </div> */}
                {/* ))} */}
            </Card>
        </div>
    )
}

export default Item
