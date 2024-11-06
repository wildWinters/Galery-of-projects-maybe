import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Counter } from './components/Counter-project'
import { Modal } from './components/Modal'
import { Quiz } from './components/Quiz'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <Modal/>     */}
    <Quiz/>

  </StrictMode>,
)



