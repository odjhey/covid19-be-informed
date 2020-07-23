import React, { useRef, useContext } from 'react'
import { FontAwesomeIcon as Awesome } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import AppContext from '../AppContext'

const ThemeToggle: React.FC = () => {
  const Context = useContext(AppContext)
  const toggle = useRef<HTMLDivElement>(null)

  const onToggle = () => {
    Context?.toggleTheme()

    const sun = toggle.current?.querySelector('.sun') as HTMLElement
    const moon = toggle.current?.querySelector('.moon') as HTMLElement
    sun.classList.toggle('active')
    moon.classList.toggle('active')
  }

  return (
    <div
      data-testid="toggle"
      className="theme-toggler"
      ref={toggle}
      onClick={onToggle}
    >
      <span
        className={`sun ${
          localStorage.getItem('theme') === 'light-mode' && 'active'
        }`}
      >
        <Awesome id="sun-icon" icon={faSun} />
      </span>
      <span
        className={`moon ${
          localStorage.getItem('theme') === 'dark-mode' && 'active'
        }`}
      >
        <Awesome id="moon-icon" icon={faMoon} />
      </span>
    </div>
  )
}

export default ThemeToggle
