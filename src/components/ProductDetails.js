import React, { Component } from 'react'

export class ProductDetails extends Component {
    render() {
        const {productdetails} = this.props;
        return (
            <div className="contents">
                {
                productdetails.map((pd, index) =>(
                    <li key={index}>{pd}
                    </li>
                ))
                }
            </div>
        )
    }
}

export default ProductDetails
