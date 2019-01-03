import authReducer from '../../reducers/auth'

const uid = { uid: 'lXR7EY96qUPmrToobVEFS2m5Omb2' }

test('should login user', () => {
  const action = {
    type: 'LOGIN',
    uid
  }
  const state = authReducer(undefined, action)
  expect(state.uid).toEqual(uid)
})

test('should logout user', () => {
  const currentState = { uid }
  const action = { type: 'LOGOUT' }
  const state = authReducer(currentState, action)
  expect(state).toEqual({})
})