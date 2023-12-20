import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navbar />
        <div className="content">
            {children}
        </div>
        <footer>
            <p>2024 © Magnus Hvidtfeldt</p>
        </footer>
    </div>
  )
}