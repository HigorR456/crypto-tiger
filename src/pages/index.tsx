import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

import {AiFillCheckCircle} from 'react-icons/ai'

export async function getStaticProps() {
  const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&locale=en')
  const list = await data.json()

  return {
    props: {list}
  }
}

export default function Home({ list }: any) {
  useEffect(() => {
    console.log(list)
  },[])

  return (
    <>
      <Head>
        <title>Crypto-Tiger</title>
        <link rel="icon" href="/tiger.svg" />
      </Head>

      <Header />

      <main className='main-wrap'>
        <section className='hero-section'>
          <div className='container'>

            <div className='title'>
              <h1>The World's Best</h1>
              <h1>Cryptocurrency Platform!</h1>
            </div>

            <div className='description'>
              <div className='description-div'>
                <AiFillCheckCircle className='check-circle'/>
                <div className='text-div'>
                  Trusted by <span>hundreds of thousands</span> of users worldwide
                </div>
              </div>

              <div className='description-div'>
                <AiFillCheckCircle className='check-circle'/>
                <div className='text-div'>
                  Leader in <span>compliance</span> and <span>security</span>
                </div>
              </div>

              <div className='description-div'>
                <AiFillCheckCircle className='check-circle'/>
                <div className='text-div'>
                  The company with the most <span>verified proof of reserves</span> and <span>insurance coverage</span>
                </div>
              </div>

            </div>
            
          </div>
        </section>

        <section className='list-section'>
          <div className='container'>

            <div className='title'>
              <div className='text'>FASTELY BUY, SELL, STORE, SEND and TRACK</div>
              <div className='text'>Buy crypto the fatest way</div>
            </div>

            <div className='crypto-list-wrap'>

              <div className='crypto-list'>
                <div className='list-image'></div>
                <div className='list-name'>Name</div>
                <div className='current-price'>Current Price</div>
                <div className='price-change' >24h %</div>
                <div className='list-market-cap'>Market Cap.</div>
              </div>

            {list.map((e:any) => {
              const result = 
              <div className='crypto-list' key={e.name}>
                <div className='list-image'><img src={e.image} alt={e.id}></img></div>
                <div className='list-name'>{e.name}</div>
                <div className='current-price'>{e.current_price.toFixed(2)}</div>
                <div className='price-change' style={e.price_change_percentage_24h > 0 ? {color: '#16c784'} : {color: '#ea3943'}}>{e.price_change_percentage_24h.toFixed(2)}</div>
                <div className='list-market-cap'>{e.market_cap}</div>
              </div>

              return result;
            })}
            </div>

          </div>
        </section>

        <section className='section-three'>
          <img src='/crypto-image1.png' alt='crypto' className='image-three'></img>
        </section>
        
      </main>

      <Footer />
    </>
  )
}
