import React, { Component } from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum, setAlbums } from '../actions/albums'
import { resolve } from 'path';

const sleep = time => new Promise(
  resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

class AlbumsListContainer extends Component {
  
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/albums')
    //   .then(response => response.json())
    //   .then(myJson => this.setState({ albums: myJson }))
    //   .catch(err => console.log(err))
    
    sleep(2000)
      .then(message => this.props.addAlbum(1, message))

    sleep(3000)
      .then(m => this.props.addAlbum(2, m))

    // this.props.addAlbum({
    //   id:5,
    //   title: 'Enjoying sunshine'
    // })
    // this.props.addAlbum({
    //   id:10,
    //   title:'Having fun in the US'
    // })
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

export default connect(mapStateToProps, {addAlbum, setAlbums})(AlbumsListContainer)

function mapStateToProps(reduxState) {
  return{
    albums: reduxState.albums
  }
}
