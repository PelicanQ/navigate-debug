import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Runner({ run }) {
  useEffect(() => {
    run()
  }, [])

  return <div onClick={run}>Manual run</div>
}

function RunnerPage() { 
  const navigate = useNavigate()

return (
    <Runner run={() => navigate('/goal')} />
  )
}

export default RunnerPage