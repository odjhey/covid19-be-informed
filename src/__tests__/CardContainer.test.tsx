import React from 'react'
import ReactDOM from 'react-dom'
import CardContainer from '../components/CardContainer'
import Card from '../components/Card'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

it('renders CardContainer component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardContainer title="cool" />, div)
})

it('render CardContainer with children', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CardContainer title="cool">
      <Card
        svg="healthy-food.svg"
        title="cool card"
        svgLocation="svg_prevention"
      />
    </CardContainer>,
    div,
  )
})

it('make sure prop is rendered correctly inside specific element', () => {
  const { getByText } = render(<CardContainer title="test title" />)
  expect(getByText('test title')).toHaveClass('card-container-title')
})
