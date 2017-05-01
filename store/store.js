import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  currentQuestion: 0
}

export const actionTypes = {
  NEXT_QUESTION: 'NEXT_QUESTION'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.NEXT_QUESTION:
    return Object.assign({}, state, {
      currentQuestion: action.questionNr + 1
    })
  default:
    return state
  }
}

// ACTIONS
export const nextQuestion = qnr => dispatch => {
  console.log('QNR:', qnr)
  return dispatch({ type: actionTypes.NEXT_QUESTION, questionNr: qnr || 0 })
}

export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}
