import React, { Component } from 'react';
import './form.css'
import Input from './input';

class Form extends Component {
    render() {
        const {name, status} = this.props.values;
        return (
            <form className="create-todo">
                <fieldset>
                    <legend>Create to-do</legend>
                    
                    <Input label="Nome: " type="text" name="name" id="name" value={name} onChange={this.props.onChange} />
                    <Input label="Done: " type="checkbox" name="done" id="done" checked={status} onChange={this.props.onChange} />

                    <button onClick={this.props.onClick}>+</button>
                    
                </fieldset>
            </form>
        );
    }
}
 
export default Form;