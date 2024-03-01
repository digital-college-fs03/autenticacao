import { Route, Routes } from 'react-router-dom'

import './App.css'
import { AppProvider } from './providers/AppProvider'

import { Layout } from './layouts/Layout'

import { PublicPage } from './pages/PublicPage'
import { PrivatePage } from './pages/PrivatePage'

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<Layout/>}>
          <Route
            path="/"
            element={<PublicPage />}
          />
          <Route
            path="/private"
            element={<PrivatePage />}
          />
        </Route>
      </Routes>
    </AppProvider>
  )
}

export default App
