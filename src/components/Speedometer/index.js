// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Speedometer</h1>
          <div className="inner-container">
            <img
              className="img-style"
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              alt="img"
            />
          </div>
          <h1 className="paragraph-1">Speed is {count}mph</h1>
          <p className="paragraph-2">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="inner-container">
            <div className="buttons">
              <button className="btn-1" onClick={this.onAccelerate}>
                Accelerate
              </button>
              <button className="btn-2" onClick={this.onBrake}>
                Apply Brake
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
