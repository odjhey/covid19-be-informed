import React from 'react'

const CardContainer: React.FC<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <div className="card-container">
      <span className="card-container-title">{title}</span>
      <div className="container">{children}</div>
    </div>
  )
}

export default CardContainer
