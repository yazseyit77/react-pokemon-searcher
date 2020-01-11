import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pokemons: data
        })
      })
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons.map(poke => poke.name.includes(this.state.search))} />
      </Container>
    );
  };
}

export default PokemonPage
