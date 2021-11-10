import React from 'react'

const Icon = ({ color = "#fff", size = 14, viewBox, className, children }) => (
  <svg
    fill={color}
    width={size}
    height={size}
    viewBox={viewBox}
    className={className}
  >
    {children}
  </svg>
)

export default Icon;