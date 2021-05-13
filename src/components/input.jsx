import React, { Component } from 'react';
import './input.css'

class Input extends Component {

    render() { 
        const {name, id, type, src, alt, label, value, checked} = this.props;
        return (
            <React.Fragment>
                <div className="group">
                    {label !== undefined ? <label htmlFor={name}>{label}</label> : ''}                    
                    <input type={type} name={name} id={id} src={src} alt={alt} checked={checked} value={value} onChange={this.props.onChange} />
                </div>
            </React.Fragment>
        );
    }
}
 
export default Input;