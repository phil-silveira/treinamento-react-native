import React from 'react'

import './add-hero-form-component.css'

export class AddHeroForm extends React.Component {
    state = {
        name: '',
        image: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSaveHero = (e) => {
        e.preventDefault()

        this.props.onAddHero({
            name: this.state.name,
            image: this.state.image
        })
    }

    render() {
        const { name, image } = this.state

        return (
            <form className='hero-form' onSubmit={this.onSaveHero}>
                <label><div className='form-text'>Name</div>
                    <input className='form-input' name='name' value={name} onChange={this.handleChange} />
                </label>
                <label><div className='form-text'>Image</div>
                    <input className='form-input' name='image' value={image} onChange={this.handleChange} />
                </label>
                <button className='form-button'>Registrar</button>
            </form>
        )
    }
}