import React from 'react'

interface InfoProps {
  title: string
  description: string
  svg: string
  order: string
}

const Info: React.FC<InfoProps> = ({
  title,
  description,
  svg,
  order,
}) => {
  return (
    <div data-testid="info" className="info-container">
      <div className={`text-column ${order}`}>
        <h2>{title}</h2>
        <h5>{description}</h5>
      </div>
      <div className={`svg-column ${order}`}>
        <img src={require(`../svg/${svg}`)} alt="svg" />
      </div>
    </div>
  )
}

export default Info
