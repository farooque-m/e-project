import { Card, CardMedia } from '@material-ui/core'
import React from 'react'

function Items({product, fetchProduct}) {
    return (
        <div>
            <Card>
                <CardMedia className="card1" image={product.media.source} title={product.name} />
            </Card>
        </div>
    )
}

export default Items
