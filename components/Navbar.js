import Link from 'next/link'
import React from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'
import logo from  '../assets/images/logo.png'


const Navbar = () => (
    <nav className="ui secondary stackable menu">    
        <Link href="/">
            <Menu.Item as="a" header className="logo">
                <Image src={logo} size='small' />
            </Menu.Item>
        </Link>
        <div className="right menu">
            <Link href="/">
                <Menu.Item as="a" className="mute">Home</Menu.Item>
            </Link>
            <Link href="/">
                <Menu.Item as="a">How it works</Menu.Item>
            </Link>
            <Link href="/">
                <Menu.Item as="a">Disc Assessment</Menu.Item>
            </Link>
            <Link href="/">
                <Menu.Item as="a">FAQs</Menu.Item>
            </Link>
            <Link href="/">
                <Menu.Item as="a">Contact</Menu.Item>
            </Link>
            <Link href="/">
                <Menu.Item as="a">Login</Menu.Item>
            </Link>
        </div> 
    </nav>
);

export default Navbar;