import React, { useContext } from 'react'
import AppContext from '../AppContext'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import Info from '../components/Info'

interface HomeDataProp {
  title: string
  description: string
  svg: string
}

const Home: React.FC = () => {
  const Context = useContext(AppContext)

  return (
    <div data-testid="home" className="page">
      <Navbar activeItem="home" />
      <ThemeToggle />

      {Context?.homeData &&
        Context.homeData.map((c: HomeDataProp, i) => (
          <Info
            order={i % 2 === 0 ? 'switch' : 'not-switch'}
            key={c.title}
            title={c.title}
            description={c.description}
            svg={c.svg}
          />
        ))}
    </div>
  )
}

export default Home
