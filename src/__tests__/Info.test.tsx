import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import Info from '../components/Info'

it('renders component', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Info
      title="cool title"
      description="cool description"
      svg="doctor.svg"
      order="switch"
    />,
    div,
  )
})

it('it renders elements / props', () => {
  const { getByTestId } = render(
    <Info
      title="cool title"
      description="cool description"
      svg="doctor.svg"
      order="switch"
    />,
  )
  expect(getByTestId('info').textContent).toBe(
    'cool titlecool description',
  )
})
