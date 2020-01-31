import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import logo from './logo.svg'
import ResponsiveNavigation from './component/ResponsiveNavigation'

import About from './pages/About'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

const MainRouter = () => {
    const navLinks = [
        {
          text: 'Home',
          path: '/',
          icon: 'ion-ios-home'
        },

        {
          text: 'About',
          path: '/about',
          icon: 'ion-ios-business'
        },
        {
          text:'Portfolio',
          path: '/portfolio',
          icon: 'ion-ios-briefcase'
        },
        {
          text: 'Blog',
          path: '/blog',
          icon: 'ion-ios-bonfire'
        },
        {
          text: 'Contact',
          path: "/contact",
          icon: 'ion-ios-megaphone'
        }
      ]
      
    return(
        <BrowserRouter>
            <ResponsiveNavigation navLinks={navLinks} logo={ logo} />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </BrowserRouter>
)}



export default MainRouter