import React from 'react'

const Button = ({title}) => {
  return (
    <>
      <a href="#" className="read_button">
                {title} <img src="../src/assets/vector.svg" alt="" />
              </a>
    </>
  )
}

export default Button
