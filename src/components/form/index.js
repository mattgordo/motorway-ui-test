import React, { PureComponent } from 'react';

import './form.scss';

/**
 * Wanted to experiment here with states instead of using a 3rd party plugin for validation.
 * It's pretty brute force but it does the trick
 */
class Form extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            inputName: {
                name: 'name',
                errorMessage: 'Please enter name',
                isValid: true
            },
            email: {
                name: 'email',
                errorMessage: 'Please enter an email',
                isValid: true
            },
            date: {
                name: 'date',
                isValid: true,
                value: undefined
            },
            colour: {
                name: 'colour',
                errorMessage: 'Please enter a colour',
                isValid: true
            },
            salary: {
                name: 'salary',
                value: 50,
                isValid: true
            }
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.changeRange = this.changeRange.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    onSubmit(e) {
        e?.preventDefault();

        const canSubmit = this.validateForm();

        canSubmit && console.log('Form Submitted');
    }

    validateForm() {
        let fieldResults = [];

        Object.keys(this.state).forEach(key => {
            const { name, value } = this.state[key];
            const inputValue = document.getElementById(name)?.value || value;
            let isFieldValid;

            if (!inputValue) {
                console.log(name + '' + inputValue);
                isFieldValid = false;
                const updatedState = {...this.state[key]}
                updatedState.isValid = false;
                this.setState({
                    [key] : { ...updatedState }
                });
            } else {
                isFieldValid = true;
                const updatedState = {...this.state[key]}
                updatedState.isValid = true;
                this.setState({
                    [key] : { ...updatedState }
                });
            }

            fieldResults.push(isFieldValid);
        });

        return !fieldResults.some(value => value === false);
    }

    changeRange(e) {
        this.setState({ salary: { value : e?.target?.value }});
    }

    changeDate(e) {
        const updatedState = this.state.date;

        this.setState({
            date: {
                ...updatedState,
                value : e.timeStamp
            }
        });
    }

    render() {
        return <form action="/" method="get" className="form" onSubmit={this.onSubmit}>
            <div className="form-field">
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className={`text-input ${!this.state['inputName'].isValid ? 'error' : ''}`}
                    placeholder={!this.state['inputName'].isValid ? this.state['inputName'].errorMessage : ''} />
            </div>
            <div className="form-field">
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={`text-input ${!this.state['email'].isValid ? 'error' : ''}`}
                    placeholder={!this.state['email'].isValid ? this.state['email'].errorMessage : ''} />
            </div>
            <div className="form-field">
                <label htmlFor="dob">D.O.B:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    onChange={this.changeDate}
                    className={`date-input ${!this.state['date'].isValid ? 'error' : ''}`} />
            </div>
            <div className="form-field">
                <label htmlFor="colour">Favourite Colour: </label>
                <input
                    type="text"
                    name="colour"
                    id="colour"
                    className={`text-input ${!this.state['colour'].isValid ? 'error' : ''}`}
                    placeholder={!this.state['colour'].isValid ? this.state['colour'].errorMessage : ''} />
            </div>
            <div>
                <label htmlFor="salary">Salary (K): </label>
                <input
                    type="range"
                    name="salary"
                    id="salary"
                    min="0"
                    max="100"
                    onChange={this.changeRange}
                    value={this.state.salary.value} />
            </div>
            <div className="form-field">
                <input type="submit" className="submit" value="Submit" />
            </div>
      </form>;
    }
}

export default Form;
