import { Route, Routes } from 'react-router-dom'

import './App.css'
import { AppProvider } from './providers/AppProvider'

import { Layout } from './layouts/Layout'

import { PublicPage } from './pages/PublicPage'
import { PrivatePage } from './pages/PrivatePage'
import { ProtectPage } from './components/Auth/ProtectPage'
import { LoginPage } from './pages/LoginPage'

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
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/private"
            element={<ProtectPage>
              <PrivatePage />
            </ProtectPage>}
          />
        </Route>
      </Routes>
    </AppProvider>
  )
}

export default App
