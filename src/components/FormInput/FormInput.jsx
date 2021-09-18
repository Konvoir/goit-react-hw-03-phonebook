import React, { Component } from 'react';
import s from "./FormInput.module.css"

export class FormInput extends Component {
    state = {
    name: "",
    number: "",
    };

    reset = () => {
        this.setState({
            name: "",
            number: "",
        });
    };
   
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.currentTarget.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
   

    render() {
        const { name, number} = this.state
        return (
            <>
                <form className={s.form} onSubmit={this.handleSubmit}>
                    <label className={s.label}>Name
                        <input className={s.input}
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleInputChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
                    </label>

                    <label className={s.label}>Number
                        <input className={s.input}
                            type="tel"
                            name="number"
                            value={number}
                            onChange={this.handleInputChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять минимум из 5 цифр и может содержать пробелы, тире, круглые скобки, может начинаться с +"
                            required
                        />
                    </label>

                    <button className={s.button} type="submit">Add contact</button>

                </form>
                
            </>
        );
    }
}