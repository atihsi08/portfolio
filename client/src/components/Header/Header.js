import React from 'react';
import { Link } from '@mui/material';
import './header.css';

const links = [
    {
        href: '/',
        name: 'HOME',
    },
    {
        href: '/technology',
        name: 'Technologies',
    },
    {
        href: 'https://drive.google.com/file/d/1raQanzRcoW6YhZcj2TA06kxxCToz0lIQ/view?usp=sharing',
        name: 'Resume',
    },
    {
        href: '/projects',
        name: 'Projects',
    },
    {
        href: '/contact',
        name: 'Contact',
    },
]

function Header() {
    return (
        <div className="headerContainer">
            {
                links.map((link,index) => (
                    <Link
                        href={link.href}
                        underline="hover"
                        key={index}
                        sx={{
                            marginRight: 6,
                            cursor: 'pointer',
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#f1faee',
                        }}
                        target={link.name==='Resume' ? '_blank': ''}
                    >
                        {link.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default Header
