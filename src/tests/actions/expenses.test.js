import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  addExpense,
  editExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startAddExpense,
  startEditExpense,
  startSetExpenses
} from '../../actions/expenses'
import database from '../../firebase/firebase'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  database.ref('expenses').set(expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should remove expense from firebase', (done) => {
  const store = createMockStore()
  const id = expenses[2].id
  store.dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      })

      return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
    expect(snapshot.val()).toBeNull()
    done()
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { description: 'Rent', amount: 12300 })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'Rent',
      amount: 12300
    }
  })
})

test('should edit expense in firebase', (done) => {
  const store = createMockStore()
  const id = expenses[1].id
  const updates = {
    description: 'Bob Ross Shirt',
    note: 'Best shirt ever!',
    amount: 2999
  }
  store.dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      })

      return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
        createdAt: -345600000,
        ...updates
      })
        done()
  })
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      })

      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({})
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }

  store.dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      })

      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults)
      done()
    })
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore()
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})


