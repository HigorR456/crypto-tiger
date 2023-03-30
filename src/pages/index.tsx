import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

import {AiFillCheckCircle} from 'react-icons/ai'
import {BsCoin} from 'react-icons/bs'

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
              <h1>The World's Fastest</h1>
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

            <div className='image'>
              <button className='download-app-btn'>Download the App</button>
              <div className='app-image-wrap'>
                <div className='back-blur'></div>
                <img className='app-image' src='/downloadtheapp.png' alt='app image'></img>
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
                <div className='list-name'>
                  <div className='long-name'>{e.name}</div>
                  <div className='symbol'>{e.symbol.toUpperCase()}</div>
                </div>
                <div className='current-price'><div className='money'>$</div>{e.current_price.toFixed(2)}</div>
                <div className='price-change' style={e.price_change_percentage_24h > 0 ? {color: '#16c784'} : {color: '#ea3943'}}>{e.price_change_percentage_24h.toFixed(2)}</div>
                <div className='list-market-cap'><div className='money'>$</div>{e.market_cap}</div>
              </div>

              return result;
            })}
            </div>

          </div>
        </section>

        <section className='anywhere-section'>
          <div className='container'>

            <div className='box-wrap'>
              <div className='box'>
                <div className='icon'><BsCoin/></div>
                <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>

              <div className='box'>
                <div className='icon'> <BsCoin  /></div>
                <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>

              <div className='box'>
                <div className='icon'><BsCoin/></div>
                <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
            </div>


            <div className='box-wrap-image'>
              <div className='image'>
                <img className='trade-anywhere-image' src='/tradeanywhere.png' alt='Smartphone and laptop next to each other'></img>
              </div>
            </div>


            <div className='box-wrap'>
              <div className='box'>
                  <div className='icon'><BsCoin/></div>
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>

                <div className='box'>
                  <div className='icon'><BsCoin/></div>
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>

                <div className='box'>
                  <div className='icon'><BsCoin/></div>
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
            </div>

          </div>
        </section>
        
      </main>

      <Footer />
    </>
  )
}
