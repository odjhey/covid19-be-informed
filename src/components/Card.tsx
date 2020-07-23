import React from 'react'

interface CardProp {
  title: string
  svg: string
  svgLocation: string
}

const Card: React.FC<CardProp> = ({ title, svg, svgLocation }) => {
  return (
    <div className="card" data-testid="card">
      <div className="svg-container">
        <img src={require(`../${svgLocation}/${svg}`)} alt="svg" />
      </div>
      <div className="title-container">
        <span className="title">{title}</span>
      </div>
    </div>
  )
}

export default Card
