import React, {Component} from "react"

export default class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitRate = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
    console.log(this.state)
  }

  changeResolution = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    })
    console.log(this.state)
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.changeBitRate}></button>
        <button className="resolution" onClick={this.changeResolution}></button>
      </div>
    )
  }
}
