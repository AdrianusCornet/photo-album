export default (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_ALBUMS':
      return action.payload
    
    case 'ADD_ALBUM':
      return state.concat([action.payload])

    default:
      //console.log('default in albums')
      return state
  }
}