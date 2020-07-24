import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Home from '../pages/Home'

it('renders component', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
    div,
  )
})

it('render child components', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  )

  expect(getByTestId('home')).toHaveTextContent('covid19')
})
