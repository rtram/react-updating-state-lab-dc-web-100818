import React, {Component} from "react"

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementButton = (event) => {
    let increment = this.state.timesClicked + 1
    this.setState({
      timesClicked: increment
    })
  }

  render() {
    return(
      <button onClick={this.incrementButton} >{this.state.timesClicked}</button>
    )
  }
}
