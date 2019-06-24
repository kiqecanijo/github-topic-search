import { GET_TOPICS, INSERT_NEW_TEXT, CHANGE_SERVER } from '../actions'

const rootReducer = (
  //here is default state 💠
  state = {
    text: 'ruby',
    pages: 1,
    per_page: 10,
    items: [],
    server: false
  },
  { type, payload }
) => {
  switch (type) {
    case INSERT_NEW_TEXT:
      return { ...state, text: payload }
    case GET_TOPICS:
      return { ...state, items: payload }
    case CHANGE_SERVER:
      return { ...state, server: payload }
    default:
      return state
  }
}

export default rootReducer
