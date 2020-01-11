import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flip: true
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { flip: !prevState.flip }
    }
    )
  }

  render() {
    const { name, sprites } = this.props
    const hp = this.props.stats.find(stat => stat.name === "hp").value
    return (
      <Card >
        <div>
          <div className="image" onClick={this.handleClick}>
            <img alt="oh no!" src={this.state.flip ? sprites.front : sprites.back} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
