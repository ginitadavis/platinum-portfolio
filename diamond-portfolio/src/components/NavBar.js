import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { SketchOutlined, AppstoreOutlined, MailOutlined, LinkOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Content from './Content';
import '../styles/Content.css';

function NavBar() {

    const navigate = useNavigate();

    const items = [
        {
            label: 'About Me',
            key: 'homepage',
            icon: <SketchOutlined />,
        },
        {
            label: 'Portfolio',
            key: 'portfolio',
            icon: <AppstoreOutlined />,
        },
        {
            label: 'Contact',
            key: 'contact',
            icon: <MailOutlined />,
        },
        {
            label: 'Resume',
            key: 'resume',
            icon: <LinkOutlined />,
        },
    ];

    const [current, setCurrent] = useState('aboutMe');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate('/' + e.key)
        console.log('click ', e.key);
    };

    return (
        <div className='navbar-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <video autoPlay muted loop className="myVideo" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src={process.env.PUBLIC_URL + '/background-video2.mp4'} type="video/mp4" />
            </video>
            <div style={{ textAlign: 'left', marginRight: '10px' }}>
                <p className='myName' style={{ display: 'flex', marginLeft: '10px', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, color: '#fff' }}>Gina Davis</p>

            </div>

            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        </div>
    );
}

export default NavBar;