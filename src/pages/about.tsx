import Header from '../components/header'
import Footer from '../components/footer'

const About = () => {
    return (
        <>
            <Header />

            <main className='about-main-wrap'>
                <section className='about-section'>
                    <div className='container'>
                        <div className='title title-animation'>
                            <span>This page is&nbsp;</span>
                            <span>powered by&nbsp;</span>
                            <span>CoinGecko&nbsp;</span>
                            <span>Public API&nbsp;</span>
                        </div>

                        <div className='description descr-animation'>

                        <span>
                        Started in 2014, CoinGecko is the world's largest independent crypto data aggregator that is integrated with more than 600 crypto         exchanges and lists more than 10,000 coins.
                        </span>

                        <span>
                        Power your applications with CoinGecko’s independently sourced crypto data such as live prices, NFT floor prices, trading volume, exchange volumes, trading pairs, historical data, contract address data, crypto categories, crypto derivatives, images and more.
                        </span>


                        <span>
                        CoinGecko provides the most comprehensive & reliable crypto data through RESTful JSON endpoints. Thousands of forward-thinking projects, Web3 developers, researchers, institutions, and enterprises use our API to obtain price feeds, market data, metadata, and historical data of crypto assets, NFTs, and exchanges.
                        </span>

                        </div>

                        <div className='button'>
                            <a href='https://www.coingecko.com/en/api/documentation'>Public API Documentation</a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default About