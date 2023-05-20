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
            key: '',
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
        <div className='navbar-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'left', marginRight: '10px' }}>
                <p className='myName' style={{ display: 'flex', marginLeft: '10px', alignItems: 'center', justifyContent: 'center' }}>Gina Davis</p>
            </div>

            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ backgroundColor: '#D7C9FF' }} />
        </div>
    );
}

export default NavBar;