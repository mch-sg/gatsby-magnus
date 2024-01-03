import React, { useEffect } from 'react'
import { Link, useStaticQuery } from 'gatsby'
import Navbar from './Navbar'
import '../styles/global.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function LayoutNo({ children }) {

  return (
    <div className="layout">
      <div style={{paddingTop: "10px"}}></div>
        <Navbar />
        <div className="content">
            {children}
        </div>
        <Analytics />
        <SpeedInsights/>
    </div>
  )
}

