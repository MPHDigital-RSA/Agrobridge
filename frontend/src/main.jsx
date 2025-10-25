import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProductProvider } from './store/ProductContext.jsx'

// pages
import App from './App.jsx'
import SurplusExchangePage from './pages/SurplusExchangePage.jsx'
import PostForm from './pages/PostForm.jsx'
import GuidePage from './pages/GuidePage.jsx'
import NetworkPage from './pages/NetworkPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/post', element: <PostForm /> },
  { path: '/exchange', element: <SurplusExchangePage /> },
  { path: '/guide', element: <GuidePage /> },
  { path: '/network', element: <NetworkPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>,
)
