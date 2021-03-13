import React, { Component } from 'react'

export class Sizes extends Component {
    render() {
        const {sizes} = this.props;
        return (
            <span className="sizes">
                {
                sizes.map((size, index) =>(
                    <button key={index}>{size}
                        </button>
                ))
                }
            </span>
        )
    }
}

export default Sizes
