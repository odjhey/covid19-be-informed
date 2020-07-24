import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import Card from '../components/Card'

it('renders component', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Card
      title="testTitle"
      svg="/protection.svg"
      svgLocation="svg_prevention"
    />,
    div,
  )
})

it('render props correctly', () => {
  const { getByTestId } = render(
    <Card
      title="testTitle"
      svg="/protection.svg"
      svgLocation="svg_prevention"
    />,
  )

  expect(getByTestId('card')).toHaveTextContent('testTitle')
})
