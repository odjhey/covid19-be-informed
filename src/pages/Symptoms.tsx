import React, { useContext } from 'react'
import { AppContext } from '../App'
import NavBar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import CardContainer from '../components/CardContainer'
import Card from '../components/Card'

interface SymptomType {
  svg: string
  title: string
}
const Symptoms: React.FC = () => {
  const Context = useContext(AppContext)

  return (
    <div className="page">
      <NavBar activeItem="symptoms" />
      <ThemeToggle />
      <CardContainer title="Signs you have COVID">
        {Context?.symptomsData &&
          Context.symptomsData.map((symptom: SymptomType, i) => (
            <Card
              key={i}
              svg={symptom.svg}
              title={symptom.title}
              svgLocation="svg_symptoms"
            />
          ))}
      </CardContainer>
    </div>
  )
}

export default Symptoms
