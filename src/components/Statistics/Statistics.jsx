import React from 'react'
import './statistics.css'

function Statistics() {

    const boxes = [
        {id: 1, img: './images/icon-brand-recognition.svg', title: 'Brand Recognition', content: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.'},
        {id: 2, img: './images/icon-detailed-records.svg', title: 'Detailed Records', content: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'},
        {id: 3, img: './images/icon-fully-customizable.svg', title: 'Fully Customizable', content: 'Improve brand awareness and content discoverability through customizable links, superchargin audience engagement.'}
    ]

  return (
    <section className="statistics">
        <div className="header">
            <h2>Advanced Statistics</h2>
            <p>
                Track how your links are performing across the web with
                our advanced statistics dashboard.
            </p>
        </div>
        <div className="boxes">
            {
                boxes.map(box => (
                    <div className="box" key={box.id}>
                        <figure>
                            <img src={box.img} alt="" />
                        </figure>
                        <h3>{box.title}</h3>
                        <p>{box.content}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Statistics