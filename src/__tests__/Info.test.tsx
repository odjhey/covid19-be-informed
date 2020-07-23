import React from 'react'
import ReactDOM from 'react-dom'
import Info from '../components/Info'
import { render } from '@testing-library/react'

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
