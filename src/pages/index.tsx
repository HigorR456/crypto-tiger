import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

import {AiFillCheckCircle} from 'react-icons/ai'
import {IoMdArrowDropup, IoMdArrowDropdown} from 'react-icons/io'
import {BiLoaderCircle} from 'react-icons/bi'

import {TbWallet} from 'react-icons/tb'
import {BsCoin, BsGraphUpArrow, BsCurrencyExchange,} from 'react-icons/bs'
import {BiChip} from 'react-icons/bi'
import {MdOutlineManageAccounts} from 'react-icons/md'

export async function getStaticProps() {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en')

  if (!response.ok) {
    console.log('Error', response.status)
  }
  
  const list = await response.json()

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
              <span>The World's Fastest</span>
              <span>Cryptocurrency Platform!</span>
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
              <p>FASTELY BUY, SELL, STORE, SEND and TRACK</p>
              <span>Buy crypto the fatest way</span>
            </div>

            <div className='crypto-list-wrap'>

              <div className='crypto-list' id='crypto-head'>
                <div className='list-image'></div>
                <div className='list-name'><b>Name</b></div>
                <div className='current-price'><b>Current Price</b></div>
                <div className='price-change' ><b>24h %</b></div>
                <div className='list-market-cap'><b>Market Cap.</b></div>
              </div>

            {list.length > 0 ? 
              list.map((e:any) => {
                const result = 
                <div className='crypto-list' key={e.name}>
                  <div className='list-image'><img src={e.image} alt={e.id}></img></div>
                  <div className='list-name'>
                    <div className='long-name'>{e.name}</div>
                    <div className='symbol'>{e.symbol.toUpperCase()}</div>
                  </div>
                  <div className='current-price'><div className='money'>$</div>{e.current_price.toFixed(2)}</div>
                  <div className='price-change' 
                  style={e.price_change_percentage_24h > 0 ? 
                  {color: '#16c784'} : {color: '#ea3943'}}>
                    {e.price_change_percentage_24h > 0 ? 
                    <IoMdArrowDropup /> : 
                    <IoMdArrowDropdown />}
                    {e.price_change_percentage_24h > 0 ? 
                    e.price_change_percentage_24h.toFixed(2) : 
                    e.price_change_percentage_24h.toFixed(2) * -1}
                    %
                  </div>
                  <div className='list-market-cap'><div className='money'>$</div>{e.market_cap.toLocaleString()}</div>
                </div>
  
                return result;
              }) :
              <div className='loading'>
                  <BiLoaderCircle className='loading-icon' />
              </div>
            }
            
            </div>

            <div className='button-wrap'>
              <button className='see-more-btn'>See More</button>
            </div>

          </div>
        </section>

        <section className='anywhere-section'>
          <div className='container'>

            <div className='title'>
              <p>TRADE ANYTIME, ANYWHERE</p>
              <span>Available on all device</span>
            </div>

            <div className='content'>
              <div className='box-wrap'>
                <div className='box'>
                  <div className='icon'><TbWallet/></div>
                  <div className='text'>
                    <span>LINK YOUR WALLET</span>
                    <p>Join the app using the supported wallet of your preference.</p>
                  </div>
                </div>

                <div className='box'>
                  <div className='icon'> <BsCoin  /></div>
                  <div className='text'>
                    <span>PICK YOUR AMOUNT</span>
                    <p>Buy any amount of any cryptocurrency you want.</p>
                  </div>
                </div>

                <div className='box'>
                  <div className='icon'><BsGraphUpArrow/></div>
                  <div className='text'>
                    <span>VERIFY YOUR TRANSACTION</span>
                    <p>Make a profit by selling your crypto on our marketplace.</p>
                  </div>
                </div>
              </div>


              <div className='box-wrap-image'>
                <div className='image'>
                  <img className='trade-anywhere-image' src='/tradeanywhere.png' alt='Smartphone and laptop next to each other'></img>
                </div>
              </div>


              <div className='box-wrap'>
                <div className='box'>
                    <div className='icon'><BiChip/></div>
                    <div className='text'>
                      <span>ACQUIRE PERSONALIZATED NFTs</span>
                      <p>Consolidate all your digital assets in a single platform.</p>
                    </div>
                  </div>

                  <div className='box'>
                    <div className='icon'><BsCurrencyExchange/></div>
                    <div className='text'>
                      <span>PARTICIPATE IN THE MARKET</span>
                      <p>Find and trade the perfect crypto collections on our platform.</p>
                    </div>
                  </div>

                  <div className='box'>
                    <div className='icon'><MdOutlineManageAccounts/></div>
                    <div className='text'>
                      <span>MANAGE YOUR COLLECTION</span>
                      <p>Easily explore, invest, and handle your digital assets.</p>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </section>
        
      </main>

      <Footer />
    </>
  )
}
