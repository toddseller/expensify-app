import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseSummary } from '../../components/ExpenseSummary'



test('should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={325}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={195035}/>)
  expect(wrapper).toMatchSnapshot()
})