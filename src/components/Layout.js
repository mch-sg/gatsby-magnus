import React, { useEffect } from 'react'
import { Link, useStaticQuery } from 'gatsby'
import Navbar from './Navbar'
import '../styles/global.css'
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {

  return (
    <div className="layout">
      <div style={{paddingTop: "10px"}}></div>
        <Navbar />
        <div className="content">
            {children}
        </div>
        <footer>
            {/* <p>2024 © Magnus Hvidtfeldt</p> */}
            <p>© 2021-2024 Magnus Hvidtfeldt. All Rights Reserved. <br />
              www.magnus.so v.2024.01</p>
            {/* <p></p>
            <p></p> */}

            <div className="links">
                <h3 style={{fontWeight:"500", marginBottom: "10px"}}>Navigation</h3>
                <Link to="/" target="_blank">Home</Link> <br/>
                <Link to="/article" target="_blank">Articles</Link> <br/>
                <Link to="/work" target="_blank">Work</Link> <br/>
                <Link to="/join" target="_blank">Newsletter</Link> 
            </div>
            <div className="links">
                <h3 style={{fontWeight:"500", marginBottom: "10px"}}>Categories</h3>
                <Link to="/policy/privacy-policy" target="_blank">Privacy Policy</Link> <br/>
                <Link to="/policy/terms-and-conditions" target="_blank">Terms & Conditions</Link> <br/>
                <Link to="https://magnushvidtfeldt.gumroad.com/" target="_blank">Products</Link> <br/>
                <Link to="mailto:hi@magnus.so" target="_blank">Contact me</Link> <br/>
            </div>
            <div className="links">
                <h3 style={{fontWeight:"500", marginBottom: "10px"}}>Socials</h3>
                <Link to="https://x.com/himagnus"  target="_blank">Twitter</Link> <br/>
                <Link to="https://github.com/mch-sg"  target="_blank">GitHub</Link> <br/>
                <Link to="https://www.linkedin.com/in/magnushvidtfeldt/"  target="_blank">LinkedIn</Link> <br/>
                <Link to="https://www.producthunt.com/@himagnus" target="_blank">ProductHunt</Link> <br/>
            </div>
  
        </footer>
        <Analytics />
    </div>
  )
}

