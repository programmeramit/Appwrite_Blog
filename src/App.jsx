import React from 'react'
import config from './config/config'
function App() {
  {console.log(import.meta.env.VITE_APPWRITE_URL)}
  return (
    <div>App {config.appwriteurl}</div>
  )
}

export default App