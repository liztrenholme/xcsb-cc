import { useState } from 'react'
import comments from './assets/comments.json'
import CommentDisplay from './components/CommentDisplay'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">
<CommentDisplay comments={comments.comments} />
      </div>
    </>
  )
}

export default App
