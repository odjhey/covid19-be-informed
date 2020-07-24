import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Navbar from '../components/Navbar'

it('element esxist at all', () => {
  const { queryByTestId } = render(
    <BrowserRouter>
      <Navbar activeItem="home" />
    </BrowserRouter>,
  )
  expect(queryByTestId('navbar')).toBeTruthy()
})
