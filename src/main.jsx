import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//store
import store from './store/store.js'

// router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Pages/layout
import AppLayout from './AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { Provider } from 'react-redux'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import CartProducts from './pages/CartProducts.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import ProductsPage from './pages/ProductsCategoryPage.jsx'
import ProductsCategoryPage from './pages/ProductsCategoryPage.jsx'



// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>Error Page</div>,

    children: [
      {
        path: "/",
        element: <HomePage />,

      },

      {
        path: "/productDetails/:id",
        element: <ProductDetailsPage />

      },

      {
        path: "/cartProducts",
        element: <CartProducts />
      },
      {
        path: "/favorites",
        element: <FavoritesPage />
      },
      {
        path: "/products",
        element: <ProductsCategoryPage />
      },
      {
        path: "/products/category/:categorySlug",
        element: <ProductsCategoryPage />
      }


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>

  </React.StrictMode>,
)
