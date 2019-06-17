export const ADD_ALBUM = 'ADD_ALBUM'
export const SET_ALBUMS = 'SET_ALBUMS'

export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  }
}
export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: albums.map(album => {
      return {
        id: album.id,
        title: album.title
      }
    })
  }
}