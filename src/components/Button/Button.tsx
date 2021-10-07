import './Button.scss'

import React from 'react'

interface IButtonProps {
  label: string
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => (
  <button className="outline" type="button" {...props}>
    <span>Click</span>
  </button>
)

export default Button
