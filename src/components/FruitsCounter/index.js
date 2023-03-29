import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoAdded = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaAdded = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="body-container">
        <div className="white-container">
          <h1 className="fruit-text">
            Bob ate <span className="span-ele"> {mango} </span>
            mangoes <span className="span-ele"> {banana} </span>
            bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                className="fruits-image"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                className="fruit-button"
                type="button"
                onClick={this.mangoAdded}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-container">
              <img
                className="fruits-image"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                className="fruit-button"
                type="button"
                onClick={this.bananaAdded}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
