import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import App from './App.jsx'
import SurplusExchangePage from './pages/SurplusExchangePage.jsx'
import PostForm from './pages/PostForm.jsx'
import GuidePage from './pages/GuidePage.jsx'
import NetworkPage from './pages/NetworkPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/post', element: <PostForm /> },
  { path: '/exchange', element: <SurplusExchangePage /> },
  { path: '/guide', element: <GuidePage /> },
  { path: '/network', element: <NetworkPage /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
