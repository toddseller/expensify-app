import moment from 'moment'

import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'

test('should generate set text filter action object with provided text', () => {
  const text = 'Rent'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('should generate set text filter action object with defaults', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should generate set start date filter action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date filter action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate sort by date filter action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should setup sort by amount filter action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})