import React, { Component } from 'react'

export class Colors extends Component {
    render() {
        const {colors, tab} = this.props;
        return (
            <div className="colors">
                {
                colors.map((color, index) =>(
                    <button style={{background: color}} key={index}
                    onClick={() => tab(index)}>
                        </button>
                ))
                }
            </div>
        )
    }
}

export default Colors
