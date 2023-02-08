import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className="hero">
        <div>
            <h2>More than just shorter links</h2>
            <p>
                Build your brand's recognition and get detailed
                insights on how your links are performing.
            </p>
            <div className="get-started">
                <button>Get Started</button>
            </div>
        </div>
        <figure>
            <img src="./images/illustration-working.svg" alt="" />
        </figure>
    </section>
  )
}

export default Hero