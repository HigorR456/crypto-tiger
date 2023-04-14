import React from 'react';
import Link from 'next/link'
import {GiTigerHead} from 'react-icons/gi'

const Header = () => {
    return (
        <>
            <header className='header-wrap'>
                <div className='header-title'>
                    <Link className='header-link' href='/'>
                        <GiTigerHead className='tiger-head' />
                        <div className='title-text'>Crypto-Tiger</div>
                    </Link>
                </div>

                <nav className='nav-wrap'>
                    <Link className='nav-link' href='/'>Home</Link>
                    <Link className='nav-link' href='/about'>About</Link>
                </nav>
            </header>
        </>
    );
};

export default Header;