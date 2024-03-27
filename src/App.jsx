import React, { useState } from 'react'
import Display from './components/Display.jsx'
import Buttons from './components/Button.jsx'
import History from './components/History.jsx'


function App() {
  const [SavedHistory, SetHistory] = useState({
    records: [],
    render: false,
  })
  const [OperatorSelected, SetOperator] = useState('')
  function handleReset(){
    SetHistory(() =>({
      render: true,
      records: [],
    }))
  }
  function handleCancel() {
    SetHistory((prev) => ({
      ...prev,
      render: prev.render = false
    }))
  }
  function onSelectOperator(buttonsSelect) {
    if (buttonsSelect !== '=' && buttonsSelect !== 'History' && buttonsSelect !== 'Clear') {
      SetOperator((prevOperator) => prevOperator + buttonsSelect);
    }
    else if (buttonsSelect === 'History') {
      SetHistory((prev) => ({
        ...prev,
        render: true,
      }))
    }
    else if (buttonsSelect === '=') {
      SetOperator(() => {
        try {
          const result = eval(OperatorSelected);
          if (Number.isInteger(result)) {
            return result.toString();
          } else {
            return result.toFixed(3);
          }
        } catch (error) {
          return 'Error';
        }
      })
      SetHistory((prevHistory) => ({
        ...prevHistory,
        records: [...prevHistory.records, OperatorSelected]
      }
      ))
    }
    else {
      SetOperator((prev) => '')
    }
  }
  return (
    <div className='bg-purple-400 w-full h-screen flex items-center justify-center text-white gap-10'>
      <div className='bg-gray-300 border-4 border-purple-700 w-1/5 h-[28rem] flex flex-col items-center rounded-lg'>
        <Display display={OperatorSelected} />
        <Buttons onSelect={onSelectOperator} />
      </div>
      {SavedHistory.render && <History reset={handleReset} onCancel={handleCancel} history={SavedHistory.records} />}
    </div>
  )
}

export default App