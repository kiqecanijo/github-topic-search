import React from 'react'
const Item = ({ values }) => {
  const { name, description, created_by, released, created_at, score } = values

  return (
    <div>
      <h3>{name}</h3>
      <h3>{description}</h3>
      <h3>{created_by}</h3>
      <h3>{released}</h3>
      <h3>{created_at}</h3>
      <h3>{score}</h3>
    </div>
  )
}
export default Item
