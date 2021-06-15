import React from 'react';
import './form.css';

const Form = ({children}) => {
    return (
        <>
            <form className="create-todo">
                {children}            
            </form>
        </>
    );
}
 
export default Form;