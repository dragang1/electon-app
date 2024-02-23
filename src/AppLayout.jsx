
import { Outlet } from 'react-router-dom'
import './App.css'

// components
import HeaderComponent from './components/HeaderComponent'
import NavbarComponent from './components/NavbarComponent'
import CategoryComponent from './components/CategoryComponent'
import FooterComponent from './components/FooterComponent'

// axios
import axios from 'axios'


axios.defaults.baseURL = 'https://dummyjson.com';

function AppLayout() {


  return (
    <div className='bg-bgPrimary'>
      <HeaderComponent />
      <NavbarComponent />
      <CategoryComponent />
      <Outlet />
      <FooterComponent />

    </div>
  )
}

export default AppLayout
