import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link, graphql } from 'gatsby'

export default function MyForm({ data }) { 

  return (
      <div>

        <script src="https://f.convertkit.com/ckjs/ck.5.js" />

        <form action="https://app.convertkit.com/forms/5990385/subscriptions" method="post" data-sv-form="5990385" data-uid="ccda84e22a" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">

          
          <div data-style="clean"><ul data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false"><div>
        
          <div className={styles.formNoGrid}>
          <input className={styles.inputForm} name="email_address" aria-label="Email Address" placeholder="Email Address *" required type="email" />
        
          <button data-element="submit" className={styles.btn}><div><div></div><div></div><div></div></div>Subscribe</button></div><div></div></div>
          </div>
        
        </div>
        </form>
        
      </div>
  )
}
