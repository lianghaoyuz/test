import '../global.css'

const React = require('react')
// import React, { Component } from 'react'
class App extends React.Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     Text:null
  //   }
  // }
  

  // clicked () {
  //   import('./text.js').then((Text)=>{
  //     this.setState({
  //       Text: Text.default,
  //     })
  //   })
  // }

  render() {
    return (
      <div>
        hello
        {/* {
          this.state.Text
        } */}
        {/* <button onClick={this.clicked.bind(this)}>
          哈哈哈
        </button> */}
      </div>
    )
  }
}
module.exports = App