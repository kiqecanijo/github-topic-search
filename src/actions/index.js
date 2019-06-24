import axios from 'axios'
export const GET_TOPICS = 'github:getTopicsFromApi'
export const INSERT_NEW_TEXT = 'session:addNewText'
export const CHANGE_SERVER = 'server:changeServer'

export const getTopicsFromApi = (
  q,
  page = 1,
  per_page = 10,
  server
) => dispatch => {
  axios
    .get(
      !server
        ? 'https://api.github.com/search/topics'
        : 'http://localhost:3000',
      {
        params: {
          q,
          page,
          per_page
        },
        headers: {
          Accept: 'application/vnd.github.mercy-preview+json'
        }
      }
    )
    .then(({ data }) => {
      console.log('%c updated items ✔️', 'background-color: green;color:white')
      console.log(data)
      dispatch(reduceNewItems(data.items, data.total_count, page))
    })
    .catch(error => {
      console.log(
        '%c ❎ unespected error sending request 😵',
        'background-color: red;color:white',
        error
      )
      return error
    })
}

export const reduceNewItems = (items, count, page) => ({
  type: GET_TOPICS,
  payload: { items, count, page }
})

export const changeApi = status => ({
  type: CHANGE_SERVER,
  payload: status
})

export const insertText = newText => ({
  type: INSERT_NEW_TEXT,
  payload: newText
})
