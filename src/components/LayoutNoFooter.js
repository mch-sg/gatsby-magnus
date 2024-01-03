import React, { useEffect } from 'react'
import { Link, useStaticQuery } from 'gatsby'
import Navbar from './Navbar'
import '../styles/global.css'
import { Analytics } from '@vercel/analytics/react';

export default function LayoutNo({ children }) {

  return (
    <div className="layout">
      <div style={{paddingTop: "10px"}}></div>
        <Navbar />
        <div className="content">
            {children}
        </div>
        <Analytics />
    </div>
  )
}

