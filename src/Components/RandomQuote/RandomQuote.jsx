import React, { useState } from 'react'
import './RandomQuote.css'

import Reload_Img from '../Assets/refressh.png'
// import TwitterX_Img from '../Assets/twitterx.png'


const RandomQuote = () => {

    let quotes = []

    async function loadQuotes(){
        const response = await fetch('https://type.fit/api/quotes')
        quotes = await response.json()
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select)
    }

    const [quote, setQuote] = useState({
        text : "Difficulties increase the nearer we gwt to the goal.",
        author : "Johan Wolfgang von Goethe"
    })

    loadQuotes()

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author"> --- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <img
              src={Reload_Img}
              onClick={() => {
                random();
              }}
              alt=""
            />
            {/* <img src={TwitterX_Img} alt=''/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote