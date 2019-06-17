import React, { Component } from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum, setAlbums } from '../actions/albums'


class AlbumsListContainer extends Component {

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(myJson => this.props.setAlbums(myJson))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.props.albums.length) {
      return 'Loading...'
    }
    return (
      < AlbumsList albums={this.props.albums} />
    )
  }
}

export default connect(mapStateToProps, { addAlbum, setAlbums })(AlbumsListContainer)

function mapStateToProps(reduxState) {
  return {
    albums: reduxState.albums
  }
}
