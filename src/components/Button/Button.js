import React from "react"
import { Button } from "element-react"

function TButton({ children }) {
  return (
    <Button
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "0.5px solid rgba(255, 255, 255, 0.3)",
        boxSizing: "border-box",
        borderRadius: "10px",
      }}
    >
      {children}
    </Button>
  )
}

export default TButton
