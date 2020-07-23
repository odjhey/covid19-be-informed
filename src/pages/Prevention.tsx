import React, { useContext } from 'react'
import { AppContext } from '../App'
import NavBar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import CardContainer from '../components/CardContainer'
import Card from '../components/Card'

interface PreventionType {
  svg: string
  title: string
}

const Symptoms: React.FC = () => {
  const Context = useContext(AppContext)

  return (
    <div className="page">
      <NavBar activeItem="prevention" />
      <ThemeToggle />
      <CardContainer title="Prevention is Key!">
        {Context?.preventionData &&
          Context.preventionData.map(
            (prevention: PreventionType, i) => (
              <Card
                key={i}
                svg={prevention.svg}
                title={prevention.title}
                svgLocation="svg_prevention"
              />
            ),
          )}
      </CardContainer>
    </div>
  )
}

export default Symptoms
