import React from 'react';
import Link from 'next/link'
import {FaRegCopyright} from 'react-icons/fa'
import {IoLogoGooglePlaystore, IoLogoApple} from 'react-icons/io5'
import {GiTigerHead} from 'react-icons/gi'

const Footer = () => {
    return (
        <>
            <footer className='footer-wrap'>
                <div className='container'>

                    <div className='first-row'>
                        <div className='logo'>
                            <GiTigerHead className='tiger-head' />
                            <div className='title-text'>Crypto-Tiger</div>
                        </div>

                        <div className='pages'>
                            <nav className='nav-wrap'>
                                <Link className='nav-link' href='/'>
                                    Home</Link>
                                <Link className='nav-link' href='/'>
                                    Coins</Link>
                                <Link className='nav-link' href='/'>
                                    Contact</Link>
                            </nav>
                        </div>
                    </div>

                    <div className='second-row'>
                        <div className='copyright'><FaRegCopyright /> 2023. All Rights Reserved.</div>

                        <div className='downloads'>
                            <div className='logo-wrap'>
                                <IoLogoGooglePlaystore className='logo'/></div>

                            <div className='logo-wrap'>
                                <IoLogoApple className='logo'/></div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;