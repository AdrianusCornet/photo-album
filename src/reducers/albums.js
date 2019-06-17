export default (state = [], action = {}) => {
  switch (action.type) {
    
    case 'TEST':
      console.log('testing the albums reduser')
      return state.concat([action.payload])

    default:
      console.log('default in albums')
      return state
  }
}