import React, { Component } from 'react'
import AlbumsList from './AlbumsList'

export default class AlbumsListContainer extends Component {
  state = {}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(myJson => this.setState({albums: myJson}))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.albums) {
      return 'Loading...'
    }
    return (
      < AlbumsList albums={this.state.albums}/>
    )
  }
}
