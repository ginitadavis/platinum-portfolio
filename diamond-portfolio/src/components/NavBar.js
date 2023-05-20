import React, { useState } from 'react';
import { SketchOutlined, AppstoreOutlined, MailOutlined, LinkOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function NavBar() {
    const items = [
        {
            label: 'About Me',
            key: 'aboutMe',
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

    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        console.log('click ', e.key);
    };

    return (<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />)
}

export default NavBar;