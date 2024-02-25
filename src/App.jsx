import React, { useState } from 'react'
import Display from './components/Display.jsx'
import Buttons from './components/Button.jsx'

function App() {
  const [OperatorSelected, SetOperator] = useState('')
  function onSelectOperator(buttonsSelect) {
    SetOperator((prevOperator) => prevOperator + buttonsSelect);
    // SetOperator(buttonsSelect)
  }
  return (
    <div className='bg-purple-400 w-full h-screen flex items-center justify-center text-white'>
      <div className='bg-gray-300 border-4 border-purple-700 w-1/5 h-3/5 flex flex-col items-center rounded-lg'>
        <Display display={OperatorSelected} />
        <Buttons onSelect={onSelectOperator} />
      </div>
    </div>
  )
}

export default App