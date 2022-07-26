import { Route, Routes } from 'react-router-dom'
import GoalPage from './GoalPage'
import RunnerPage from './RunnerPage'

function App() {
  return (
    <>
      <h1>Copy App</h1>
      <Routes>
        <Route path='/run' element={<RunnerPage />} />
        <Route path='/goal' element={<GoalPage />} />
      </Routes>
    </>
  )
}

export default App