import React, { Component } from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { helloWorld } from '../actions/test'

class AlbumsListContainer extends Component {
  state = {}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(myJson => this.setState({ albums: myJson }))
      .catch(err => console.log(err))

    this.props.helloWorld('fn', 'ln')
  }

  render() {
    if (!this.state.albums) {
      return 'Loading...'
    }
    return (
      < AlbumsList albums={this.state.albums} />
    )
  }
}

export default connect(null, {helloWorld})(AlbumsListContainer)
