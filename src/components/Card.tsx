import React from 'react'

interface CardProp {
  title: string
  svg: string
  svgLocation: string
}

const Card: React.FC<CardProp> = ({ title, svg, svgLocation }) => {
  const svgPath = require(`../${svgLocation}/${svg}`) // eslint-disable-line import/no-dynamic-require, global-require
  return (
    <div className="card" data-testid="card">
      <div className="svg-container">
        <img src={svgPath} alt="svg" />
      </div>
      <div className="title-container">
        <span className="title">{title}</span>
      </div>
    </div>
  )
}

export default Card
