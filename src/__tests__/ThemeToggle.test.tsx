import React from 'react'
import ReactDOM from 'react-dom'
import ThemeToggle from '../components/ThemeToggle'

it('renders component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ThemeToggle />, div)
})
