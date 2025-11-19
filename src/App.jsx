import React, { useState } from 'react'
import StartScreen from './Components/StartScreen/StartScreen'
import { QUESTIONS } from './Data/data'


export default function App() {
  const [step, setStep] = useState('start')
  return (
    <div>
      {step === 'start' && (
        <StartScreen total={QUESTIONS.length} onStart={() => setStep('quiz')} />
      )}
    </div>
  )
}
