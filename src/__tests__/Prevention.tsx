import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Prevention from '../pages/Prevention'

it('renders component', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Prevention />
    </BrowserRouter>,
    div,
  )
})
