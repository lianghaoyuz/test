import '../global.css'

import React, { Component } from 'react'
import ReactDOM from 'react-dom' 
class App extends Component {
  constructor () {
    super()
    this.state = {
      Text:null
    }
  }
  

  clicked () {
    import('./text.js').then((Text)=>{
      this.setState({
        Text: Text.default,
      })
    })
  }

  render() {
    return (
      <div>
        hello
        {
          this.state.Text
        }
        <button onClick={this.clicked.bind(this)}>
          哈哈哈
        </button>
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('container')
);