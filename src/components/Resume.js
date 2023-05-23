import React from 'react';
import '../styles/Content.css';
import { Typography } from 'antd';
const { Link } = Typography;

function Resume() {
    return (
        <>
            <h1 className='title'>Resume</h1>
            <div className='resumeInformation'>
                <a
                    href={process.env.PUBLIC_URL + '/Gina-Davis-Resume.pdf'}
                    download='Gina-Davis-Resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Download my Resume
                </a>
                <h2 className='subTitle'>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h2 className='subTitle'>Back-end Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>

        </>
    )
}

export default Resume;