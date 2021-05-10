import React, { Component } from 'react';

class Input extends Component {

    render() { 
        const {name, id, type, src, alt, label, value} = this.props;
        return (
            <React.Fragment>
                <div className="group">
                    {label !== undefined ? <label htmlFor={name}>{label}</label> : ''}                    
                    <input type={type} name={name} id={id} src={src} alt={alt} value={value} />
                </div>
            </React.Fragment>
        );
    }
}
 
export default Input;