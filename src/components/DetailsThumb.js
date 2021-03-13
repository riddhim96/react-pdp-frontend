import React, { Component } from 'react'

export class DetailsThumb extends Component {
    render() {
        const {images} = this.props;
        return (
            <div className="thumb">
                {
                images.map((img) =>(
                    <img src={img} alt=""
                    />
                ))
                }
            </div>
        )
    }
}

export default DetailsThumb
