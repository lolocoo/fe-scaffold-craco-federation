import { Button as AntdButton } from 'antd'
import React, { useState } from 'react'

const Button = () => {
  const [counter, setCounter] = useState(0)
  return (
    <AntdButton onClick={() => setCounter(counter + 1)}>
      Craco Ant Design Button {counter}
    </AntdButton>
  )
}
export default Button
