import { login, logout } from '../../actions/auth'

const uid = { uid: 'lXR7EY96qUPmrToobVEFS2m5Omb2' }

test('should set login action object with provided uid', () => {
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should set logout action object to empty object', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})