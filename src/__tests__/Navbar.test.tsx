import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { render } from '@testing-library/react'

it('element esxist at all', () => {
  const { queryByTestId } = render(
    <BrowserRouter>
      <Navbar activeItem="home" />
    </BrowserRouter>,
  )
  expect(queryByTestId('navbar')).toBeTruthy()
})
