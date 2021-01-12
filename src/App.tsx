import { mount, route } from 'navi'
import Login from './pages/Login'
import Register from './pages/Register'
import React from 'react'
import Shop from './pages/Shop'
import Profile from './pages/Profile'
import Coffees from './pages/Coffees'
import { withAuthentication } from './api/auth/authenticatedRoute'
import Checkout from './pages/Checkout'
import Landing from './pages/Landing'
import Completed from './pages/Completed'
import AboutAuthor from './pages/AboutAuthor'
import AboutProgram from './pages/AboutProgram'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Faq from './pages/Faq'
import Menu from './pages/Menu'
import AboutUs from './pages/AboutUs'
import Places from './pages/Places'

const App = mount({
  '/': route({
    title: 'Home',
    view: <Landing />,
  }),
  '/register': route({
    title: 'Register',
    view: <Register />,
  }),
  '/login': route({
    title: 'Login',
    view: <Login />,
  }),
  '/shop': withAuthentication(
    route({
      title: 'Shop',
      view: <Shop />,
    })
  ),
  '/profile': route({
    title: 'Profile',
    view: <Profile />,
  }),
  '/coffee': route({
    title: 'Coffees',
    view: <Coffees />,
  }),
  '/cart': route({
    title: 'Cart',
    view: <Cart />,
  }),
  '/checkout': route({
    title: 'Checkout',
    view: <Checkout />,
  }),
  '/aboutMe': route({
    title: 'AboutMe',
    view: <AboutAuthor />,
  }),
  '/aboutProgram': route({
    title: 'AboutProgram',
    view: <AboutProgram />,
  }),
  '/contact': route({
    title: 'Contact',
    view: <Contact />,
  }),
  '/success': route({
    title: 'Success',
    view: <Completed />,
  }),
  '/faq': route({
    title: 'Faq',
    view: <Faq />,
  }),
  '/menu': route({
    title: 'Menu',
    view: <Menu />,
  }),
  '/about': route({
    title: 'About',
    view: <AboutUs />,
  }),
  '/places': route({
    title: 'Places',
    view: <Places />,
  }),
})

export default App
