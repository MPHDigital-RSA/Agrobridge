import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductProvider } from './store/ProductContext.jsx';

// pages
import App from './App.jsx'
import SurplusExchangePage from './pages/SurplusExchangePage.jsx';
import PostForm from './pages/PostForm.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import OfferPage from './pages/OfferPage.jsx';
import { UserProvider } from './store/UserContext.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/post', element: <PostForm /> },
  { path: '/exchange', element: <SurplusExchangePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '/offer/:id', element: <OfferPage /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ProductProvider>
  </StrictMode>,
)
