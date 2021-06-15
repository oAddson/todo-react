import React from 'react';
import './input.css'

const Input = ({name, id, type, src, alt, label, value, checked, onChange}) => {
    return (
    <>
        <div className="group">
            {label !== undefined ? <label htmlFor={name}>{label}</label> : ''}                    
            <input type={type} name={name} id={id} src={src} alt={alt} checked={checked} value={value} onChange={onChange}/>
        </div>
    </>
    );
}

export default Input;