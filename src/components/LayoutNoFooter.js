import React, { useEffect } from 'react'
import { Link, useStaticQuery } from 'gatsby'
import Navbar from './Navbar'
import '../styles/global.css'

export default function LayoutNo({ children }) {

  return (
    <div className="layout">
      <div style={{paddingTop: "10px"}}></div>
        <Navbar />
        <div className="content">
            {children}
        </div>
        
    </div>
  )
}

