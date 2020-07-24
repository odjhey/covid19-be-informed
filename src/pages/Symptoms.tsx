import React, { useContext } from 'react'
import AppContext from '../AppContext'
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
          Context.symptomsData.map((symptom: SymptomType) => (
            <Card
              key={symptom.title}
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
