import React, { Component } from 'react';

import { Title, HeroList, AddHeroForm } from './components'

import heroes from './heroes.json'

import './app.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      heroes: []
    }
  }

  componentDidMount() {
    this.setState({
      heroes
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state)
  }

  addHero = (hero) => {
    console.log(hero)

    this.setState({
      heroes: [hero, ...this.state.heroes]
    })
  }

  render() {
    const { heroes } = this.state

    return (
      <div>
        <Title>Welcome to React, Heroes!</Title>
        <div className='app-content'>
          <AddHeroForm onAddHero={this.addHero} />
          {(heroes.length === 0) ?
            <span>Sem Heroes</span> :
            <HeroList heroes={heroes} />
          }
        </div>
      </div>
    );
  }
}

export default App;
