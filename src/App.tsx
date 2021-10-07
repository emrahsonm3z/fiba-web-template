import { Button } from 'components/Button'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Button a />
      <hr />
      <h4>API_URL:</h4>
      {process.env.REACT_APP_API_URL}
    </div>
  )
}

export default App
