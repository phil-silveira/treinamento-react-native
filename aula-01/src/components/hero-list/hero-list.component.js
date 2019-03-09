import React from 'react'

import './hero-list-component.css'

export const HeroList = props => (
    <div className='hero-list-component'>

        <h1>Heroes</h1>
        <ul>
            {props.heroes.map((hero, key) => (
                <li key={key} className='hero'>
                    <Hero name={hero.name} image={hero.image} />
                </li>
            ))}
        </ul>
    </div>
)

const Hero = props => (
    <React.Fragment>
        <img src={props.image} alt={props.name} />
        <div className='gradient'>
            <h2>{props.name}</h2>
        </div>
    </React.Fragment>
)
