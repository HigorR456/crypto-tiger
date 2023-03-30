import React from 'react';
import Link from 'next/link'
import {GiTigerHead} from 'react-icons/gi'

const Header = () => {
    return (
        <>
            <header className='header-wrap'>
                <div className='title'>
                    <GiTigerHead className='tiger-head' />
                    <div className='title-text'>Crypto-Tiger</div>
                </div>

                <nav className='nav-wrap'>
                    <Link className='nav-link' href='/'>Home</Link>
                    <Link className='nav-link' href='/'>Coins</Link>
                    <Link className='nav-link' href='/'>Contact</Link>
                </nav>
            </header>
        </>
    );
};

export default Header;