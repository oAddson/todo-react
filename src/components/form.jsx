import React, { Component } from 'react';
import './form.css'
import Input from './input';

class Form extends Component {
    render() { 
        return (
            <form className="create-todo">
                <fieldset>
                    <legend>Create to-do</legend>
                    
                    <Input label="Nome: " type="text" name="name" id="name" />
                    <Input label="Done: " type="checkbox" name="done" id="done" />

                    <Input type="submit" value="+" />
                    
                    
                </fieldset>
            </form>
        );
    }
}
 
export default Form;