import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Awesome } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MenuIcon: React.FC<{ onClickMenu: () => void }> = ({
  onClickMenu,
}) => {
  return (
    <div className="menu-icon-container" onClick={onClickMenu}>
      <Awesome className="menu-icon" icon={faBars} />
    </div>
  )
}

const Navbar: React.FC<{ activeItem: string }> = ({ activeItem }) => {
  const navigationsRef = useRef<HTMLUListElement | null>(null)

  const LinkStyle = {
    textDecoration: 'none',
    color: '#fff',
  }

  const onClickMenu = () => {
    navigationsRef.current?.classList.toggle('mobile-active')
  }

  return (
    <nav data-testid="navbar" className="navbar">
      <span className="navbar-logo">
        <Link to="/" style={LinkStyle}>
          covid<span>19</span>
        </Link>
      </span>

      <ul className="navbar-nav" ref={navigationsRef}>
        <Link to="/" style={LinkStyle}>
          <li
            className={`nav-item ${
              activeItem === 'home' && 'active'
            }`}
          >
            home
          </li>
        </Link>
        <Link to="/symptoms" style={LinkStyle}>
          <li
            className={`nav-item ${
              activeItem === 'symptoms' && 'active'
            }`}
          >
            symptoms
          </li>
        </Link>
        <Link to="/prevention" style={LinkStyle}>
          <li
            className={`nav-item ${
              activeItem === 'prevention' && 'active'
            }`}
          >
            prevention
          </li>
        </Link>
      </ul>
      <MenuIcon onClickMenu={onClickMenu} />
    </nav>
  )
}

export default Navbar
