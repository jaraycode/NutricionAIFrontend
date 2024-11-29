// import { useState } from 'react'
import AppRouter from './router/AppRouter'
import { AuthProvider } from './router/AuthContext'

// import './App.css'

function App() {

  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}

export default App
